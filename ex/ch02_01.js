/**
 * some console format example
 * console time
 */
var obj = { name: "srkim 'hello'", 'age': 10 };

/* 콘솔 포맷 */
console.log('숫자 보여주기 : %d', 10);
console.log('문자열 보여주기 : %s', '소녀시대');
// %j를 쓰면, 키와 문자열값에 무조건 ""가 붙는 것을 볼 수 있다
console.log('json 객체 보여주기 : %j', obj);
// log, dir 차이가 없어 보인다.. 대신 문자열값만 ''로 감싸져보임.
console.log(obj);
console.dir(obj);

/* 시간 측정 */
var result = 0;

console.time('duration');
for (var i = 0; i < 1000; i++) {
    result += i;
}
console.timeEnd('duration');
console.log('sum', result);

/* global variable */
console.log('파일명 %s', __filename);
console.log('경로명 %s', __dirname);

