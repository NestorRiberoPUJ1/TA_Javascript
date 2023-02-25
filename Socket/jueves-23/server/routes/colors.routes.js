const ColorsController = require("../controllers/colors.controllers");


module.exports = app => {
    app.get("/api/colors", ColorsController.getColors);
    app.post("/api/colors", ColorsController.createColor);
}
