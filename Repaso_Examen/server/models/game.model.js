const mongoose = require("mongoose"); // Importando el paquete mongoose


const gameSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Field is required"],
            minlength: [3, "Name must have at least 3 characters"],
            maxlength: [30, "Name must be shorter than 30 characters"]
        },

        category: {
            type: String,
            required: [true, "Field is required"],
            minlength: [3, "Category must have at least 3 characters"],
            maxlength: [10, "Category must be shorter than 10 characters"]
        },

        company: {
            type: String,
            required: [true, "Field is required"],
            minlength: [5, "Company must have at least 3 characters"],
            maxlength: [15, "Company must be shorter than 10 characters"]
        },

        releaseDate: {
            type: Date,
            required: [true, "Field is required"],
            max: [Date.now, "Release Date cant be in future"]

        },

        rating: {
            type: String,
            required: [true, "Field is required"],
            enum: {
                values: ["E", "E10+", "T", "M", "AO", "RP"],
                message: "Option not found"
            },
            default: "E"
        }

    },
    {
        timestamps: true
    }
)

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;