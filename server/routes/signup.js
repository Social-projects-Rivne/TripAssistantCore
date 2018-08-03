const express = require('express');
const signupController = ('../controllers/signupController');

const router = express.Router();


router.post('/register', signupController.register);
router.get('*', signupController.index);


module.exports = router;
