const { Pool } = require('pg');
require('colors')
const pool = new Pool();

// the pool with emit an error on behalf of any idle clients
// it contains if a backend error or network partition happens
pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client'.red, err)
  process.exit(-1)
})


module.exports = {
  query: (sql, params) => {
    return new Promise((resolve, reject) => {
      pool.connect()
        .then(client => {
          return client.query(sql,params)
            .then(res => {
              client.release();
              console.log('SQL:'.green, `${sql.text}`.blue, '\nPARAMS:'.green, `${params}`.yellow);
              res.rowCount > 0 && resolve(res);
            })
            .catch(err => {
              client.release();
              reject(err.stack);
            })
        })
    });
  }
}
