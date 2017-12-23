/**
 * non blocking callback function example
 */
function add(a, b, callback) {
    var result = a + b;
    callback(a, b, result);
    var cnt = 0;
    return function() {
        cnt++;
        return cnt + ' : ' + result;
    };
}

var fnCnt = add(10, 11, function(a, b, res) {
    setTimeout(function(){console.log(a + ' + ' + b + ' = ' + res);}, 5000);
});

console.log(fnCnt());
console.log(fnCnt());
console.log(fnCnt());
console.log(fnCnt());

console.log(add(11, 11, function(a, b, res) {
    setTimeout(function(){console.log(a + ' + ' + b + ' = ' + res);}, 4000);
})());
console.log(add(100, 11, function(a, b, res) {
    setTimeout(function(){console.log(a + ' + ' + b + ' = ' + res);}, 3000);
})());
