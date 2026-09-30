const {
    Signup,
    Login,
    Logout,
} = require("../Controller/AuthController");
const { userVerification } = require("../Middlewares/AuthMiddleware");
const router = require("express").Router();

router.post("/signup", Signup);
router.post("/login", Login);
router.post("/logout", Logout);
router.post("/verifyuser", userVerification);

module.exports = router;