const Query = require('../PgBaseUtils');
const data = require('./createData');

module.exports = (function create() {
    Query.createTable(data);
}());
