const express = require("express"); // importación del paquete express
const cors = require('cors') // Importación CORS
const app = express();  //Creando instancia llamada app
const port = 8000;      //asignación del puerto del servidor

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()) // Uso de política de orígenes

require("./config/mongoose.config");//Conexión a DB

const avionRoutes = require("./routes/avion.routes");// Incluir modulo de rutas
avionRoutes(app);//Instancia de modulo de rutas

app.listen(port, () => console.log(`Listening on port: ${port}`));