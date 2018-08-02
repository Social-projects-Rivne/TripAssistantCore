const express = require ('express');

const signinController = require('../controllers/signinController');

const router = express.Router();

router.post('/api/login', signinController.login);
router.get('/api/logout', signinController.logout);
router.get('/api/checkLogin', signinController.checkLogin);

module.exports = router;