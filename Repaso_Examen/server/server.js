require('dotenv').config()
const express = require("express"); // importación del paquete express
const cors = require('cors') // Importación CORS
const app = express();  //Creando instancia llamada app
const port = process.env.URL_PORT;      //asignación del puerto del servidor

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()) // Uso de política de orígenes

require("./config/mongoose.config");//Conexión a DB

//Registro de rutas
const gameRoutes = require("./routes/game.routes");// Incluir modulo de rutas
gameRoutes(app);//Instancia de modulo de rutas

app.listen(port, () => console.log(`Listening on port: ${port}`));//inicio de nuestro servidor