const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/api/user/:id', userController.getUser);
router.get('/api/user/:id/cars', userController.getUserCars);

router.post('/api/user/:id/addCar', userController.addNewCar);
router.post('/api/user/deleteCar', userController.deleteCar);

router.post('/api/user/updateCar', userController.updateCar);

module.exports = router;
