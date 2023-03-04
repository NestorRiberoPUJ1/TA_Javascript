const mongoose = require("mongoose"); // Importando el paquete mongoose


const avionSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "El avión no puede ser anónimo"],
            minlenght: [3, "El nombre no puede ser tan corto"],
            maxlenght: [10, "El nombre no puede ser tan largo"]
        },
        model: {
            type: Number,
            required: [true, "El modelo es obligatorio"],
            min: [1903, "El modelo no puede ser previo a la invención del avión"],
            max: [2023, "El modelo no puede ser del futuro"],
        },
        miles: {
            type: Number,
            required: [true, "El millaje es obligatorio"],
            min: [0, "El millaje mínimo es cero"]
        },
        manufacturer: {
            type: String,
            required: [true, "El Fabricante no puede ser anónimo"],
            minlenght: [3, "El nombre del Fabricante no puede ser tan corto"],
            maxlenght: [10, "El nombre del Fabricante no puede ser tan largo"]
        },
        plate: {
            type: String,
            required: [true, "El Placa no puede ser anónima"],
            minlenght: [6, "La placa debe ser de 6 carácteres"],
            maxlenght: [6, "La placa debe ser de 6 carácteres"]
        },
        url: {
            type: String,
            required: [true, "Imagen obligatoria"],
        }
    },
    {
        timestamps: true
    }
)


const Avion = mongoose.model("Avion", avionSchema);

module.exports = Avion;