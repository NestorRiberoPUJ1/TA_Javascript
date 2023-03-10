const UserController = require('../controllers/user.controllers');
const { authenticate, admin } = require('../config/jwt.config');

module.exports = app => {
    app.post("/api/register", UserController.register);
    app.post("/api/login", UserController.login);
    app.get("/api/logout", UserController.logout);
    app.get("/api/users", authenticate, UserController.get_all);
    app.get("/api/users/all", admin, UserController.get_all);
    app.get("/api/admin", admin, (req, res) => { res.status(200).json({}) })
}
