import './App.css';
import io from "socket.io-client";
import { useEffect, useState } from "react"

function App() {

  const [socket] = useState(io(":8000"));

  useEffect(() => {
    console.log("Mounted component");
    socket.on("Welcome", data => {
      console.log("Welcome", data);
    });
    setTimeout(() => {
      socket.emit("new_message", "Im connected");
    }, 2000)
  }, [])

  return (
    <div className="App">
      Socket Testing
    </div>
  );
}

export default App;
