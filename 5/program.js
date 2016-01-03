const _ = require('lodash');

module.exports = arr => _.chain(arr)
    .map(chr => `${chr}Chained`.toUpperCase())
    .sortBy()
    .value();