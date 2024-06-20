const postmark = require("postmark");
const client = new postmark.ServerClient(
  require("../config/keys").postmarkServerToken
);

const sendEmailWithPostmark = async (to, subject, text) => {
  await client.sendEmail({
    From: "20N31A12C5@mrcet.ac.in",
    To: to,
    Subject: subject,
    TextBody: text,
  });
};

module.exports = {
  sendEmailWithPostmark,
};
