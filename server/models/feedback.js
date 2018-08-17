module.exports = {
  getById: (id) => {
    return {
      text: `SELECT trips.name AS trip_name, feedback.rating, feedback.text, users.name AS user_name, trips.date FROM feedback INNER JOIN trips ON feedback.trip_id = trips.id INNER JOIN users ON feedback.create_by = users.iduser WHERE feedback.user_id=$1`,
      values: [id]
    }
  }
}
