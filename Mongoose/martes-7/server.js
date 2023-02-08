const express = require("express"); // importación del paquete express
const app = express();  //Creando instancia llamada app
const port = 8000;      //asignación del puerto del servidor

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


require("./config/mongoose.config");//Conexión a DB

const colorRoutes = require("./routes/colors.routes");// Incluir modulo de rutas
colorRoutes(app);//Instancia de modulo de rutas


app.listen(port, () => console.log(`Listening on port: ${port}`));