const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  database: 'tripassistant',
  password: 'opacity11',
  host: 'localhost',
  port: '5433'
});

module.exports = {
  query: (text, params) => pool.query(text, params)
}
