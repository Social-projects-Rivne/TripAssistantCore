const express = require('express');
const signinController = require('../controllers/signinController');

const router = express.Router();

router.post('/api/login', signinController.login);
router.get('/api/is-auth', signinController.isAuth);
router.get('/api/logout', signinController.logout);

module.exports = router;
