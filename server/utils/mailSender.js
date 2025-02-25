const nodemailer = require("nodemailer");

const mailSender = async (email, title, body) => {
  try {
    let transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      secure: false,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    let info = await transporter.sendMail({
      from: "Blood Buddy",
      to: `${email}`,
      subject: `${title}`,
      html: `${body}`,
    });

    console.log("Email sent successfully:", info);

    return info;
  } catch (error) {
    console.error("Error sending email:", error.message);
    throw error; // Rethrow the error to propagate it to the calling function
  }
};

module.exports = mailSender;
