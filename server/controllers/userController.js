const db = require('../db/db');
const UserModel = require('../models/userModel');

const userController = {};

userController.getUser = (req, res) => {
  const idUser = req.params.id;
  db.query(UserModel.getUser(idUser), (err, result) => {
    err ? res.sendStatus(500) : res.json(result.rows[0]);
  })
};

userController.getUserCars = (req, res) => {
  const idUser = req.params.id;
  db.query(UserModel.getUserCars(idUser), (err, result) => {
    err ? res.sendStatus(500) : res.json(result.rows);
  })
};

userController.addNewCar = (req, res) => {
  const idUser = req.params.id;
  const newData = req.body.formData;
  db.query(UserModel.addNewCar(newData, idUser), () => res.send());
};

userController.deleteCar = (req, res) => {
  const idCar = req.body.data;
  db.query(UserModel.deleteCar(idCar), () => res.send());
};

userController.updateCar = (req, res) => {
  const newCarData = req.body.newCarData;
  db.query(UserModel.updateCar(newCarData), () => res.send());
};

module.exports = userController;
