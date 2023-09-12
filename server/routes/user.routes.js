const UserController = require("../controllers/user.controller");
// const { authenticate } = require("../config/jwt.config");
module.exports = (app) => {
    app.post("/register", UserController.register); //
    app.post("/login", UserController.login);
    app.post("/logout", UserController.logout);
    // app.get("/users", authenticate, UserController.getAllUsers);
    app.get("/users", UserController.getAllUsers)
    app.get('/users/:id', UserController.getUserById)
    app.delete('/users/:id', UserController.deleteUserById)
    app.put('/users/:id', UserController.updateUserById)
};
