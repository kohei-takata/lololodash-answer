const _ = require('lodash');

module.exports = arr => _.sortBy(arr, 'quantity').reverse();