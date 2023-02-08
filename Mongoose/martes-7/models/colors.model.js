const mongoose = require("mongoose"); // Importando el paquete mongoose

const ColorSchema = new mongoose.Schema({
    name: String,
    hex: String,
    red: Number,
    green: Number,
    blue: Number
});

const Color = mongoose.model("Color", ColorSchema);

module.exports = Color;