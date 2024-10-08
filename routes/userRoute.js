const express = require("express");
const {
  loginController,
  registerController,
} = require("../controllers/userController");

//router object
const router = express.Router();

//routers
//POST || LOGIN USER
router.post("/users/login", loginController);

//POST || REGISTER USER
router.post("/users/register", registerController);

//export
module.exports = router;
