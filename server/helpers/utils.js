const db = require('../db/db');

module.exports = {
  createTable: (data) => {
    const query = 'CREATE TABLE IF NOT EXISTS';
    data.forEach(obj => db.query(`${query} ${obj.tableName} (${obj.column});`));
  },  
  insert: (data) => {
    data.values.forEach(val => db.query(`INSERT INTO ${data.table} (${data.fields}) VALUES (${val})`)); 
  },
  dropAllTables: () => {
    db.query(`
      DROP SCHEMA public CASCADE;
      CREATE SCHEMA public;
      GRANT ALL ON SCHEMA public TO username;
      GRANT ALL ON SCHEMA public TO public;`);
  }
};
