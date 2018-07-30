const Query = require('../helpers/utils.js');

module.exports = (function drop() {
    Query.dropAllTables();
}());
