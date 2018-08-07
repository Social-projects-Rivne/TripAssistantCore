const db = require('../db');
require('dotenv').config({path: 'server/.env'})

module.exports = {
  createTable: (data) => {
    const query = 'CREATE TABLE IF NOT EXISTS';
    data.forEach(({ tableName, column }) => db.query(`${query} ${tableName} (${column});`));
  },  
  insert: (data) => {
    const { table, fields } = data;
    data.values.forEach(val => db.query(`INSERT INTO ${table} (${fields}) VALUES (${val})`)); 
  },
  dropAllTables: () => {
    const SQL = `
      DROP SCHEMA public CASCADE;
      CREATE SCHEMA public;
      GRANT ALL ON SCHEMA public TO dimapro;
      GRANT ALL ON SCHEMA public TO public;
      `
    db.query(SQL)
      .catch(e => console.error(e));
  }
};
