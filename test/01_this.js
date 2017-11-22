/**
 * `this` object is bound to the currently executed context.
 * nodejs doesn't have window like web browser.
 * 
 * @author srkim
 */
//var name = "The Window";
name = "The Window";
var object = {
    name: "My Object",
    getNameFunc: function () {
        console.log('1' + this.name);
        return function () {
            console.log('2' + this.name);
            return this.name;
        };
    }
};

/**
 * The inner function cannot access the outer function's `this` and `arguments`.
 */
console.log(object.getNameFunc()()); // unexpected "The Window"
//console.log(window.name); 
console.log(global.name);

/**
 * we can keep the outer function's `this` thanks to closure.
 */
object = {
    name: "My Object",
    getNameFunc: function () {
        var that = this;
        return function(){
            return that.name;
        };
    }
};
console.log(object.getNameFunc()()); //expected "My Object"

/**
 * The assigned function itself is function removing its object context.
 * That's why `this` never remains just like inside a context.
 */
console.log((object.getNameFunc = object.getNameFunc)()()); // unexpected again "The Window"