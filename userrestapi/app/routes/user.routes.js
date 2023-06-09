module.exports = app => {
    const users = require("../controllers/user.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Users
    router.post("/", users.create);
  
    // Retrieve all Users
    router.get("/", users.findAll);
  
    // Delete all User
    router.delete("/", users.deleteAll);
  
    app.use('/api/crudrest', router);
  };