const db = require('../db');
const FEEDBACK_MODEL = require('../models/feedback');


module.exports = {
  getFeedbackById: ({ params: { id } }, res ) => {
    db.query(FEEDBACK_MODEL.getById(id))
      .then(({ rows }) => res.json(rows))
      .catch(err => {
        res.status(500).end();
        console.error(err);
      });
  }
}
