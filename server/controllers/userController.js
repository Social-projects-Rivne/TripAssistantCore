const db = require('../db');
const UserModel = require('../models/userModel');

const userController = {};

userController.getUser = ({ params: { iduser } }, res) => {
  db.query(UserModel.getUser(iduser))
    .then(({ rows }) => res.json(rows))
    .catch(err => {
      res.status(500).end();
      console.error(err);
    });
};

userController.getAllUsers = (req, res) => {
  db.query(UserModel.getAllUsers())
    .then(({ rows }) => res.json(rows))
    .catch(err => {
      res.status(500).end();
      console.error(err);
    });
};

userController.unblockUser = ({ body: { iduser, status } }, res) => {
  db.query(UserModel.unblockUser(iduser, status))
    .then(() => res.send('Ok'))
    .catch(err => {
      res.status(500).end();
      console.error(err);
    });
};

userController.deleteUser = ({ body: { iduser } }, res) => {
  db.query(UserModel.deleteUser(iduser))
    .then(() => res.send('Ok'))
    .catch(err => {
      res.status(500).end();
      console.error(err);
    });
};

userController.getUserCars = ({ params: { iduser } }, res) => {
  db.query(UserModel.getUserCars(iduser))
    .then(({ rows }) => res.json(rows))
    .catch(err => {
      res.status(500).end();
      console.error(err);
    });
};

userController.addNewCar = ({ body: { formData } }, res) => {
  db.query(UserModel.addNewCar(formData))
    .then(res.send())
    .catch(err => {
      res.status(500).end();
      console.error(err);
    });
};

userController.deleteCar = ({ body: { data } }, res) => {
  db.query(UserModel.deleteCar(data))
    .then(res.send())
    .catch(err => {
      res.status(500).end();
      console.error(err);
    });
};

userController.updateCar = ({ body: { newCarData } }, res) => {
  db.query(UserModel.updateCar(newCarData))
  .then(res.send())
  .catch(err => {
    res.status(500).end();
    console.error(err);
  });
};

module.exports = userController;
