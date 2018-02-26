/**
 * event on and emit.
 */
var Calc = require('./calc3');
var c = new Calc();

console.log(c.add(1, 3));
c.emit('stop');
console.log(Calc.prototype);
console.log(Calc.title, 'stop');
