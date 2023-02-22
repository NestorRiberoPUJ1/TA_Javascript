const { Server } = require("socket.io");

module.exports = (httpServer) => {

    const io = new Server(httpServer, {
        cors: {
            origin: "*"
        }
    });

    io.on("connection", socket => {
        console.log("New Connection", socket.id);
        socket.on("event_from_client", data => {
            socket.broadcast.emit("send_data_to_all_other_clients", data);
        });
        socket.on('disconnect', () => {
            console.log('End of a Connection');
        });
        socket.on("new_message", (payload) => {
            console.log("Incoming Message:", payload);
            socket.emit("Welcome", payload);
            socket.broadcast.emit("Welcome", "New user connected");
            io.emit("Welcome", "Message for all");
        })
    });

}