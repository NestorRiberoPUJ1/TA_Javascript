const Game = require("../models/game.model");

module.exports.getGames = (req, res) => {
    Game.find(req.query)
        .then(Games => {
            res.status(200);
            res.json(Games);
        }
        )
        .catch(error => {
            res.status(404);
            res.json(error);
        })

}

module.exports.getGameById = (req, res) => {
    Game.findOne({ _id: req.params.id })
        .then(Game => {
            res.status(200);
            res.json(Game);
        }
        )
        .catch(error => {
            res.status(404);
            res.json(error);
        })
}

module.exports.createGame = (req, res) => {
    let data = req.body;
    Game.create(data)
        .then(Game => {
            res.status(200);
            res.json(Game);
        })
        .catch(error => {
            res.status(500);
            res.json(error);
        })

}

module.exports.updateGame = (req, res) => {
    Game.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(updatedGame => res.json(updatedGame))
        .catch(err => res.json(err))
}

module.exports.deleteGameById = (req, res) => {
    Game.findOneAndDelete({ _id: req.params.id })
        .then(Game => {
            res.status(200);
            res.json(Game);
        }
        )
        .catch(error => {
            res.status(404);
            res.json(error);
        })
}

