const db = require('../db');
require('dotenv').config({path: 'server/.env'})

module.exports = {
  createTable: (data) => {
    const query = 'CREATE TABLE IF NOT EXISTS';
    data.forEach(({ tableName, column }) => db.query(`${query} ${tableName} (${column});`));
  },  
  insert: (data) => {
    const { table, fields, values } = data;
    values.forEach(val => db.query(`INSERT INTO ${table} (${fields}) VALUES (${val})`)); 
  },
  reCreate: () => {
    const { PGDEFAULTSCHEMA, USER } = process.env;
    const SQL = `
      DROP SCHEMA ${PGDEFAULTSCHEMA} CASCADE;
      CREATE SCHEMA ${PGDEFAULTSCHEMA};
      GRANT ALL ON SCHEMA ${PGDEFAULTSCHEMA} TO ${USER};
      `
    db.query(SQL)
      .catch(e => console.error(e));
  }
};
