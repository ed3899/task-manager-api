const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "cb.inv7613@gmail.com",
    subject: "Thanks for joining in!",
    text: `Welcome to the app, ${name}. Let me know how you get along with the app`,
  });
};

const sendByeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "cb.inv7613@gmail.com",
    subject: "We're sorry to see you go!",
    text: `We would appreciate if you could tell us what we could have done better, ${name}`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendByeEmail,
};
