const express = require("express"); // importación del paquete express
const app = express();  //Creando instancia llamada app
const port = 8000;      //asignación del puerto del servidor

app.use(express.json());
app.use(express.urlencoded({ extended: true }));





app.listen(port, () => console.log(`Listening on port: ${port}`));