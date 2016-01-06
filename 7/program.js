const _ = require('lodash');

module.exports = arr => {
    let obj = [];
    _.forEach(_.groupBy(arr, 'article'), (value, key) => {
        obj.push({'article': +key, 'total_orders': _.sum(value, 'quantity')});
    });
    return obj.reverse();
};