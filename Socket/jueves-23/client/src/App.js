import { io } from "socket.io-client";
import { useState, useEffect } from "react";
import axios from "axios"

function App() {

  const [socket] = useState(io(":8000"));

  const [colors, setColors] = useState([]);

  const [newColor, setNewColor] = useState("");

  const getColors = () => {
    axios.get("http://localhost:8000/api/colors")
      .then(result => result.data)
      .then(response => {
        console.log("Colors: ", response);
        setColors(response);
      })
      .catch(error => {
        console.log(error);
      })
  }

  useEffect(() => {
    getColors();
    socket.on("update", data => {
      console.log(data);
      getColors();
    })
  }, [])

  const handleSend = () => {
    axios.post("http://localhost:8000/api/colors", {
      id: 0,
      name: newColor
    })
      .then(result => result.data)
      .then(response => {
        console.log(response);
        socket.emit("update", true);
      })
      .catch(error => {
        console.log(error);
      })
  }


  return (
    <div className="App">
      <div>
        <input type="text" value={newColor} onChange={(e) => setNewColor(e.target.value)} />
        <button onClick={handleSend} >enviar</button>
      </div>
      <ul>
        {colors.map((item, index, array) => {
          return (
            <li key={"color" + index}>
              {item.name}
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
