const express = require('express');
const signupController = require('../controllers/signupController');

const router = express.Router();

router.post('/api/checkEmailExistence', signupController.checkEmailExistence);
router.post('/api/register', signupController.register);
router.get('/api/register/:confirmEmail', signupController.confirmEmail);

module.exports = router;
