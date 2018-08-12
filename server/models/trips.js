module.exports = {
  getAll: () => {
    return `SELECT * FROM trips`
  },

  addNew: ({
    name,
    color,
    distance,
    start_address,
    end_address,
    duration,
    time
  },
  user_id) => {
    return {
      text: `INSERT INTO trips (user_id, name, color, distance, start_address, end_address, duration, time) VALUES($1, $2, $3, $4, $5, $6, $7, $8)`,
      values: [user_id, name, color, distance, start_address, end_address, duration, time]
    }
  }
}
