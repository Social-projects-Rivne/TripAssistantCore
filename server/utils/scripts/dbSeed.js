const Query = require('../PgBaseUtils');
const tablesData = require('./insertData');

module.exports = (function seed() {
    tablesData.forEach(data => {
        Query.insert(data)
    });
}());
