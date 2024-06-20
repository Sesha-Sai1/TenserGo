const router = require("express").Router();
const { ensureAuth } = require("../middlewares/authMiddleware");
const { getEmails, sendEmail } = require("../controllers/emailController");

// Get communication history
router.get("/history", ensureAuth, getEmails);

// Send email
router.post("/send", ensureAuth, sendEmail);

module.exports = router;
