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
  },

  getAllTrips: ({}, res) => {
    db.query(TRIPS_MODEL.getAll())
      .then(({ rows }) => res.json(rows))
      .catch(err => {
        res.status(500).end();
        console.error(err);
      });
  },

  getTripById: ({ params: { id } }, res ) => {
    db.query(TRIPS_MODEL.getById(id))
      .then(({ rows }) => res.json(rows))
      .catch(err => {
        res.status(500).end();
        console.error(err);
      });
  }
}
