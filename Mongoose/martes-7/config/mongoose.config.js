const mongoose = require("mongoose"); // Importando el paquete mongoose


mongoose.connect("mongodb://localhost/colorsTest", { //se realiza la conexión a mongo DB por localhost
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("CONNECTED TO DB"))
    .catch(err => {
        console.log("ERROR WITH DB: " + err);
        mongoose.connect("mongodb://127.0.0.1/colorsTest", { //se realiza la conexión a mongo DB por local ip
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
            .then(() => console.log("CONNECTED TO DB"))
            .catch(err => {
                console.log("ERROR WITH DB: " + err);
            })
    })