const { Pool } = require('pg');

const pool = new Pool({
  user: 'username',
  database: 'tadb',
  password: 'password',
  host: 'localhost',
  port: '5432'
});

module.exports = {
  query: (text, params, callback) => pool.query(text, params, callback)
}
