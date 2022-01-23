import mailer from "nodemailer";

const dispatchPassword = (user) => {
  const mailOptions = {
    from: "xiungungoc5@gmail.com",
    to: user.email,
    subject: `Password`,
    text: `Your password: ${user.password}`,
  };

  const transporter = mailer.createTransport({
    service: "gmail",
    auth: {
      user: "xiungungoc5@gmail.com",
      pass: "banhpound66",
    },
  });
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response + " ");
    }
  });
};
export default dispatchPassword;
