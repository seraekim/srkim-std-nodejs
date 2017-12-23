/**
 * internal module
 * os
 */
var os = require('os');
console.log('hostname: %s', os.hostname);
console.log('memory: %d / %d', os.freemem(), os.totalmem());
console.log('cpus: %j', os.cpus());
console.log('network interfaces: %j', os.networkInterfaces());
