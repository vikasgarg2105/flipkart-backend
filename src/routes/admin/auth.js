const express = require("express");
const { signup, signin, requireSignin } = require("../../controller/admin/auth");
const router = express.Router();

// define the home page route
router.post("/admin/signin", signin);
router.post("/admin/signup", signup);


module.exports = router;
