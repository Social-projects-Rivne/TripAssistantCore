const db = require('../db');
const SignupModel = require('../models/signupModel');
var uuid = require('uuid-v4');
const nodemailer = require('nodemailer');

const signupController = {};

signupController.checkEmailExistence = ({ body: { email } }, res) => {
  db.query(SignupModel.getEmail(email))
    .then(({ rows }) => {
      rows[0]
        ? res.send('emailExist')
        : res.send('emailDoNotExist');
    })
    .catch(err => {
      res.status(500).end();
      console.error(err);
    });
};

signupController.register = (req, res) => {
  const { body: { fname, lname, email, password } } = req;
  const activationId = uuid();
  db.query(SignupModel.inserNewUser(fname, lname, email, password, activationId))
    .then(() => {
      const fullUrl = `${req.get('origin')}?${activationId}`;
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'trip.assistant.noreply@gmail.com',
          pass: '!trip!assistant'
        }
      }); 
      
      let mailOptions = {
        from: 'trip.assistant.noreply@gmail.com',
        to: email,
        subject: 'Confirm registration',
        text: fullUrl
      };

      transporter.sendMail(mailOptions, err => err && console.log(err))

      res.send('registrationSuccesul');
    })
    .catch(err => {
      res.status(500).end();
      console.error(err);
    })
};

signupController.confirmEmail = ({ params: { confirmEmail } }, res) => {
  db.query(SignupModel.updateIsActivated(confirmEmail))
    .then(({ rows }) => res.send(rows[0]))
    .catch(err => {
      res.status(500).end();
      console.error(err);
    })
};

module.exports = signupController;
