export default function sendMessage(req, res) {
  require('dotenv').config();

  let nodemailer = require('nodemailer');
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'primedevs.burner@gmail.com',
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailData = {
    from: 'primedevs.burner@gmail.com',
    to: 'kenyanseller@gmail.com',
    subject: `Message From ${req.body.name}`,
    email: `${req.body.email}`,
    text: req.body.message + ' | Sent from: ' + req.body.email,
    html: `<div>${req.body.name} || ${req.body.email} <p>${req.body.message}</p></div>`,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });

  console.log(req.body);
  res.send('success');
}
