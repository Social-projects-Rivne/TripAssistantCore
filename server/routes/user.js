const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/api/user/', userController.getUser);
router.get('/api/user/cars', userController.getUserCars);

router.post('/api/user/addCar', userController.addNewCar);
router.post('/api/user/deleteCar', userController.deleteCar);

router.post('/api/user/updateCar', userController.updateCar);

module.exports = router;
