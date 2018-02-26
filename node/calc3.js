/**
 * inherit EventEmitter and use on and emit.
 */
var util = require('util');
var ee = require('events').EventEmitter;

var Calc = function() {
    var self = this;

    this.on('stop', function() {
        console.log('transfer stop event to calc');
    });
};

util.inherits(Calc, ee);

Calc.prototype.add = function(a, b) {
    return a + b;
};

module.exports = Calc;
module.exports.title = 'calculator';

