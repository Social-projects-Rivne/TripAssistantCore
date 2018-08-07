const db = require('../db/db');
const UserModel = require('../models/userModel');

const userController = {};

userController.getUser = ({ params: { id } }, res) => {
  db.query(UserModel.getUser(id))
    .then(({ rows }) => res.json(rows))
    .catch(err => {
      res.status(500).end();
      console.error(err);
    });
};

userController.getUserCars = ({ params: { id } }, res) => {
  db.query(UserModel.getUserCars(id))
    .then(({ rows }) => res.json(rows))
    .catch(err => {
      res.status(500).end();
      console.error(err);
    });
};

userController.addNewCar = ({ params: { id }, body: { formData } }, res) => {
  db.query(UserModel.addNewCar(formData, id))
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
