const AvionControllers = require("../controllers/avion.controllers");
const { upload } = require("../config/multer.config");

module.exports = app => {
    app.get("/api/aviones", AvionControllers.getAviones);
    app.post("/api/aviones", upload.single('file'), AvionControllers.createAviones);
    app.put("/api/aviones/:id", AvionControllers.updateAvion);
    app.get("/files/:filename", AvionControllers.getFile);
}