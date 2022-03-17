//클로저: 리턴된 함수에서 자신을 만들어준 함수 내의 변수 접근
//반환된 함수엣 이 함수를 반환했던 함수 내부의 변수를 접근하는 방법
function add(a, b, callback){
    var result = a + b;
    callback(result);
    var count = 0;

    var history = function(){
        count++; //count값은 계속 남아서 변화하고 있음(1, 2, 3)
        return a + ' + ' + b + ' = ' + result;
    };
    return history;
}

var add_history = add(10, 10, function(result){
    console.log('파라미터로 전달된 콜백 함수 호출됨.');
    console.log('더하기(10, 10)의 결과 : %d', result);  
});

console.log('결과값으로 받은 함수 실행 결과 : ' + add_history());
console.log('결과값으로 받은 함수 실행 결과 : ' + add_history());
console.log('결과값으로 받은 함수 실행 결과 : ' + add_history());