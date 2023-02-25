import { useEffect, useState } from "react";
import { io } from "socket.io-client";


const Chat = () => {

    const [socket] = useState(io(":8000", { autoConnect: false }));
    const [newMessage, setNewMessage] = useState("");
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        socket.connect();
        socket.on("connect", () => {
            console.log(socket);
        });
        socket.on("message", data => {
            console.log("New message:", data);
            let messages_aux = messages;
            messages_aux.push(data);
            setMessages([...messages_aux]);
        })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleSend = () => {
        socket.emit("message", newMessage);
        let messages_aux = messages;
        messages_aux.push({ sender: socket.id, data: newMessage });
        setMessages([...messages_aux]);
    }

    return (
        <>
            <div>
                <input type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />
                <button onClick={handleSend} >enviar</button>
            </div>
            <hr></hr>

            <table>
                <thead>
                    <tr>
                        <td></td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {messages.map((item, index, array) => {
                        return (
                            <tr key={"msg" + index}>
                                <td>{item.sender !== socket.id ?
                                    <div>
                                        <h6>Sender: {item.sender}</h6>
                                        <p>{item.data}</p>
                                    </div>
                                    :
                                    null}
                                </td>
                                <td>{item.sender === socket.id ?
                                    <div>
                                        <h6>Me</h6>
                                        <p>{item.data}</p>
                                    </div>
                                    :
                                    null}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default Chat;