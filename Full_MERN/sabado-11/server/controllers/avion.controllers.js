const Avion = require("../models/aviones.model");

module.exports.getAviones = (req, res) => {
    Avion.find()
        .then(aviones => {
            res.status(200);
            res.json(aviones);
        }
        )
        .catch(error => {
            res.status(404);
            res.json(error);
        })

}

module.exports.createAviones = (req, res) => {
    let data = req.body;
    Avion.create(data)
        .then(avion => {
            res.status(200);
            res.json(avion);
        })
        .catch(error => {
            res.status(500);
            res.json(error);
        })

}