const express = require("express");
const { createServer } = require("http");


const app = express();
const httpServer = createServer(app);

const chatSocket = require("./sockets/chat.socket");// Incluir modulo de socket
chatSocket(httpServer);//Instancia de modulo de socket

httpServer.listen(8000, () => {
    console.log("SERVER RUNNING");
});