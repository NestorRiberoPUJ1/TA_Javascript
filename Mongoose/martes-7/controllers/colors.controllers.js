const Color = require("../models/colors.model")

module.exports.getColors = (req, res) => {
    Color.find()
        .then(colors => res.json({ colors: colors }))
        .catch(err => res.json({ message: "ERROR " + err }));
};

module.exports.createColor = (req, res) => {
    console.log(req.body);
    Color.create(req.body)
        .then(color => res.json({ color: color }))
        .catch(err => res.json({ message: "ERROR " + err }));
}