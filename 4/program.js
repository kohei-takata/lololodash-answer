const _ = require('lodash');

module.exports = arr => {
    let obj = {hot: [], warm: []};
    _.forEach(arr, (value, key) => {
        if (_.every(value, template => template > 19)) {
            obj.hot.push(key);
        } else if (_.some(value, template => template > 19)) {
            obj.warm.push(key);
        }
    });
    return obj;
}