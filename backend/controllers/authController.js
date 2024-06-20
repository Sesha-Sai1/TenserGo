const User = require("../models/user");

const loginSuccess = (req, res) => {
  res.redirect("http://localhost:3000/dashboard"); // Redirect to frontend after successful login
};

const logout = (req, res) => {
  req.logout();
  res.redirect("/");
};

module.exports = {
  loginSuccess,
  logout,
};
