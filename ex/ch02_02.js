/**
 * command line args
 */
console.log('argv 속성 length : %d', process.argv.length);
console.dir(process.argv);

process.argv.forEach(function(it, i){
    console.log(i, it);
});