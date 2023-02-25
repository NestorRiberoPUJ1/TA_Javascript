import './App.css';
import io from "socket.io-client";
import { useEffect, useState } from "react"

function App() {

  const [socket] = useState(io(":8000"));

  const [sendMessage, setSendMessage] = useState("");
  const [received, setReceived] = useState([]);

  useEffect(() => {
    console.log("Mounted component", { ...socket });
    socket.on("Welcome", data => {
      console.log("Welcome", data);
    });

    setTimeout(() => {
      socket.emit("new_messages", "Im connected");
    }, 2000)

    socket.on("connect", () => {
      console.log("Connected:", socket.id);
      socket.on(socket.id, data => {
        console.log(data);
        let aux = received;
        console.log(aux);
        aux.push(data);
        console.log(aux);
        setReceived([...aux]);
      })
    })

  }, [])


  const handleSendMessage = () => {
    console.log(socket);
    socket.emit(socket.id, sendMessage);
  }

  return (
    <div className="App">
      <input type="text" value={sendMessage} onChange={(e) => setSendMessage(e.target.value)} />
      <button onClick={handleSendMessage} >Enviar</button>
      <div>
        <ul>
          {received.map((item, index, arry) => {
            return (
              <li key={"msg" + index}>{item}</li>
            )
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
