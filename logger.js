var url = 'http://mylogger.io/log';

function log(message) {
    console.log(message);
}
// Exports log as a property of the module, allowing multiple exports
// module.exports.log = log;

// Exports log as the default export, meaning only this function will be exported.
module.exports = log