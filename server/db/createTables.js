const Query = require('../helpers/utils.js');
const data = require('./createData.js');

module.exports = (function create() {
    Query.createTable(data.tablesData);
}());
