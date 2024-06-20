const router = require("express").Router();
const passport = require("passport");
const { loginSuccess, logout } = require("../controllers/authController");

// Auth with Google
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

// Callback route for Google to redirect to
router.get("/google/redirect", passport.authenticate("google"), loginSuccess);

// Logout
router.get("/logout", logout);

module.exports = router;
