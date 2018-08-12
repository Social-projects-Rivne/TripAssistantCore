const db = require('../db');
const TRIPS_MODEL = require('../models/trips');


module.exports = {
  addNewTrip: ({ params: { id }, body: { data } }, res) => {
    db.query(TRIPS_MODEL.addNew(data, id))
    .then(res.send())
    .catch(err => {
      res.status(500).end();
      console.error(err);
    });
  }
}
