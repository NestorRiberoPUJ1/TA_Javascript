const gameController = require("../controllers/game.controller")



module.exports = app => {

    app.post("/api/games", gameController.createGame);
    app.get("/api/games", gameController.getGames);
    app.get("/api/games/:id", gameController.getGameById);
    app.put("/api/games/:id", gameController.updateGame);
    app.delete("/api/games/:id", gameController.deleteGameById);

}

