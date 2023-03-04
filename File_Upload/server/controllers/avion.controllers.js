const Avion = require("../models/aviones.model");
const { upload } = require("../config/multer.config");
const multer = require("multer");

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

    console.log(req.body);
    const result_upload = upload.single('file');

    result_upload(req, res, (err) => {
        console.log(err);
        if (err instanceof multer.MulterError) {
            // A Multer error occurred when uploading.
            res.status(500);
            res.json(err);
        } else if (err) {
            // An unknown error occurred when uploading.
            res.status(500);
            res.json(err);
        }
        else {
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
    })

}

module.exports.updateAvion = (request, response) => {
    Avion.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true })
        .then(updatedAvion => response.json(updatedAvion))
        .catch(err => response.json(err))
}

