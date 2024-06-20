const Email = require("../models/email");
const { sendEmailWithPostmark } = require("../utils/postmark");

const getEmails = async (req, res) => {
  const emails = await Email.find({ userId: req.user.id });
  res.json(emails);
};

const sendEmail = async (req, res) => {
  const { to, subject, text } = req.body;
  const email = new Email({
    userId: req.user.id,
    to,
    subject,
    text,
  });
  await email.save();
  await sendEmailWithPostmark(to, subject, text);
  res.status(200).json({ message: "Email sent successfully" });
};

module.exports = {
  getEmails,
  sendEmail,
};
