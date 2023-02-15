const AvionControllers = require("../controllers/avion.controllers");

module.exports = app => {
    app.get("/api/aviones", AvionControllers.getAviones);
    app.post("/api/aviones", AvionControllers.createAviones);
    app.put("/api/aviones/:id", AvionControllers.updateAvion);
}