const { Pool } = require('pg');
require('colors');


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
          return client.query(sql, params)
            .then(res => {
              client.release();
              console.info('SQL:'.green, `${sql.text || sql}`.blue);
              params || sql.values && console.info('\nPARAMS:'.green, `${params || sql.values}`.yellow)
              res.rowCount >= 0 && resolve(res);
            })
            .catch(err => {
              client.release();
              console.error(err.stack);
              reject(err.stack);
            })
        })
    });
  }
}
