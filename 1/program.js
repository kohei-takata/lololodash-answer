const _ = require('lodash');

module.exports = arr => _.where(arr, {active: true});