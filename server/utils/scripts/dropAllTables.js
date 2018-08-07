const Query = require('../PgBaseUtils');

module.exports = (function drop() {
    Query.dropAllTables();
}());
