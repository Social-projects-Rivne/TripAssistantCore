const express = require('express');
const FeedbackController = require('../controllers/feedback');


const router = express.Router();


router.get('/api/feedbacks/:id', FeedbackController.getFeedbackById);


module.exports = router;
