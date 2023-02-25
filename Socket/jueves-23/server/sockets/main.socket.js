
const { Server } = require("socket.io");

module.exports = (httpServer) => {

    const io = new Server(httpServer, {
        cors: {
            origin: "*"
        }
    });

    io.on("connection", socket => {
        console.log("New Connection", socket.id);
        socket.on("update", data => {
            console.log("Update", data);
            io.emit("update", data);
        })
    });

}