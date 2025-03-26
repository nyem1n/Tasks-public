// 함수 표현식
function foo1() {
    console.log('foo1');
}
foo1();

// 함수 표현식
const foo2 = function() {
    console.log('foo2');
}
foo2();

// Function 생성자 함수
const foo3 = new Function(console.log('foo3'));
foo3();

// 화살표 함수
const foo4 = () => {
    console.log('foo4');
}
foo4();

// 즉시 실행 함수
(function foo5() {
    console.log('foo5');
})()

// 재귀함수
function foo6 (arg) {
    if(arg === 3) return;
    console.log(arg);
    foo6(arg + 1);
}
foo6(1);

// 중첩함수
function foo7 (arg) {
    function bar() {
        console.log(arg);
    }
    bar();
}
foo7(1);

// 콜백함수
function foo8(arg) {
    arg();
}

foo8(() => {
    console.log(1);
});