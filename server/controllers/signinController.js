const db = require('../db');
const SigninModel = require('../models/signinModel');

const signinController = {};
signinController.sessions = {};

signinController.login = ({ body: { email, passwordHash } }, res) => {

  db.query(SigninModel.findUserByEmail(email))
    .then(({ rows }) => {
      const result = rows[0];
      if (!result) {
        res.json({ response: 'No such email' });
      } else if (result.passwordhash !== passwordHash) {
        res.json({ response: 'Email and password do not match' });
      } else if (!result.is_activated) {
        res.json({ response: 'Email is not activated' });
      } else  {
        response = 'ok';
        res.json({ response: { iduser: result.iduser } });
      }
    })
    .catch(err => {
      res.status(500).end();
      console.error(err);
    });
};

signinController.isAuth = ({ signedCookies: { iduser } }, res) => {
  if (!iduser) {
    res.json({ isAuth: false });
  } else {
    db.query(SigninModel.getUserId(iduser))
      .then(({ rows }) => {
        if (rows[0].iduser) {
          res.json({ isAuth: true });
        } else {
          res.json({ isAuth: false });
        }
      })
      .catch(err => {
        res.status(500).end();
        console.error(err);
      });
  }
};

signinController.logout = (req, res) => {
  res.clearCookie('iduser');
  res.redirect('/');
}

module.exports = signinController;
