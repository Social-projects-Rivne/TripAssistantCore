const Query = require('../helpers/utils');
const data = require('./insertData');

module.exports = (function seed() {
    Query.insert(data.users);
    Query.insert(data.cars);
}());
