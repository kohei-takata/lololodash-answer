const _ = require('lodash');

module.exports = arr => {
    return `Hello ${arr.name} (logins: ${arr.login.length})`;
};