const _ = require('lodash');

module.exports = arr => {
    let obj = [];
    _.forEach(_.groupBy(arr, 'username'), (value, key) => obj.push({username: key, comment_count: _.size(value)}));
    return obj.reverse();
};