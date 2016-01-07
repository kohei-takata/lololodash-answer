const _ = require('lodash');

module.exports = arr => {
    let obj = {};
    let average = _.sum(arr, 'income') / arr.length;
    obj.average = average;
    obj.underperform = _.sortBy(_.filter(arr, freelancer => freelancer.income <= average), 'income');
    obj.overperform = _.sortBy(_.filter(arr, freelancer => freelancer.income > average), 'income');
    return obj;
};