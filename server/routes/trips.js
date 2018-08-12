const express = require('express');
const TRIPS_CONTROLLER = require('../controllers/trips');


const router = express.Router();

router.post('/api/trips/:id/addTrip', TRIPS_CONTROLLER.addNewTrip);

module.exports = router;
