const express = require('express');
const TripsController = require('../controllers/trips');


const router = express.Router();

router.get('/api/trips/all', TripsController.getAllTrips);
router.get('/api/trips/:id/byId', TripsController.getTripById);

router.post('/api/trips/:id/addTrip', TripsController.addNewTrip);


module.exports = router;
