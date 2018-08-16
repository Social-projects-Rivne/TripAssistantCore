const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/api/user/:iduser', userController.getUser);
router.get('/api/user/:iduser/cars', userController.getUserCars);
router.get('/api/allUsers', userController.getAllUsers);

router.post('/api/user/addCar', userController.addNewCar);
router.post('/api/user/deleteCar', userController.deleteCar);
router.post('/api/user/unblock', userController.unblockUser);
router.post('/api/user/delete', userController.deleteUser);

router.post('/api/user/updateCar', userController.updateCar);

module.exports = router;
