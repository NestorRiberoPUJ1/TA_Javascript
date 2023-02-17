const mongoose = require("mongoose"); // Importando el paquete mongoose

mongoose.set('strictQuery', false);
mongoose.connect("mongodb://localhost/eGamesDB", { //se realiza la conexión a mongo DB por localhost
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("CONNECTED TO DB"))
    .catch(err => {
        console.log("ERROR WITH DB: " + err);
        mongoose.connect("mongodb://127.0.0.1/eGamesDB", { //se realiza la conexión a mongo DB por local ip
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
            .then(() => console.log("CONNECTED TO DB"))
            .catch(err => {
                console.log("ERROR WITH DB: " + err);
            })
    })