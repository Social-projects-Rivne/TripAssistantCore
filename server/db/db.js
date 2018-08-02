const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  database: 'tadb',
  password: '1234',
  host: 'localhost',
  port: '5432'
});

module.exports = {
  query: (text, params, callback) => pool.query(text, params, callback)
}
