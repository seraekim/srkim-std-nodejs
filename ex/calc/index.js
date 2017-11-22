/**
 * make require module
 */
// calc.js 를 못찾으면, calc/index.js를 찾음.

var calc = {};

calc.add = function(a, b) {
    return a + b;
}

module.exports = calc;

// exports.add = function(a, b) {
//     return a + b;
// }