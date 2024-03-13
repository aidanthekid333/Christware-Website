const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'christwarellc@gmail.com',
    pass: 'umvz kdal xffd hnmh',
  },
});

app.post('/contact-submission', (req, res) => {
  const { name, email, tel, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'christwarellc@gmail.com',
    subject: `New Contact Message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${tel}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
