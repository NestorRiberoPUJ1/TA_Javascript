const Avion = require("../models/aviones.model");

const path = require("path")

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
    let data = JSON.parse(req.body.data);

    console.log(req.file.filename);
    console.log(data);
    data.url = req.file.filename; 

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


module.exports.updateAvion = (request, response) => {
    Avion.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true })
        .then(updatedAvion => response.json(updatedAvion))
        .catch(err => response.json(err))
}

module.exports.getFile = (req, res) => {
    const filepath = "./uploads/" + req.params.filename;
    console.log(filepath);
    let absolutePath = path.resolve(filepath);
    res.sendFile(absolutePath);
}

