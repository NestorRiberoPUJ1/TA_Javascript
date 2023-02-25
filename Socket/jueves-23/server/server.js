const express = require("express"); // importación del paquete express
const { createServer } = require("http"); //importación http server
const cors = require("cors");
const app = express();  //Creando instancia llamada app
const port = 8000;      //asignación del puerto del servidor

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
const httpServer = createServer(app);


const colorRoutes = require("./routes/colors.routes");// Incluir modulo de rutas
colorRoutes(app);//Instancia de modulo de rutas

const mainSocket = require("./sockets/main.socket");// Incluir modulo de socket
mainSocket(httpServer);//Instancia de modulo de socket



httpServer.listen(port, () => console.log(`Listening on port: ${port}`));