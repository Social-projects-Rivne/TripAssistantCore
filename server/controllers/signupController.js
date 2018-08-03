import path from 'path';

import db from '../db';
import signupModel from '../models/signupModel';

const signupController = {};

signupController.register = (req, res) => {
    const roleId = result.rows[0].id;
    db.query(signupModel.upsertIntoUsers(
        credentials.name, credentials.email, credentials.password)),
    (err) => {
        console.log(err);     
        }
  };



signupController.index = (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', '..', 'dist', 'index.html'));
};

module.exports = signupController;