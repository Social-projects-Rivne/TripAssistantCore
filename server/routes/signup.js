const express = require('express');
const signupController = require('../controllers/signupController');

const router = express.Router();

router.post('/api/checkEmailExistence', signupController.checkEmailExistence);
router.post('/api/register', signupController.register);

module.exports = router;
