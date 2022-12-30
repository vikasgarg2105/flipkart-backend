const express = require("express");
const { check } = require("express-validator");
const { signup, signin, requireSignin } = require("../controller/auth");
const { validateRequest, isRequestValidated } = require("../validators/auth");
const router = express.Router();

// define the home page route
router.post("/signin", signin);

router.post(
  "/signup",
  validateRequest,isRequestValidated,
  signup
);
// router.post("/profile", requireSignin, (req, res) => {
//   res.status(200).json({ user: "profile" });
// });

module.exports = router;
