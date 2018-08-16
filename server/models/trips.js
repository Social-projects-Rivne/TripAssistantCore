module.exports = {
  getAll: () => {
    return `SELECT trips.*, users.name username FROM trips INNER JOIN users ON (trips.user_id = users.iduser);`
  },

  getById: (id) => {
    return {
      text: `SELECT date, active, name, color FROM trips WHERE user_id=$1`,
      values: [id]
    }
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
