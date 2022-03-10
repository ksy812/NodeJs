//객체의 속성으로 함수 할당
var Person = {};

Person['age'] = 20;
Person['name'] = "김소연";

var oper = function(a, b){ //***********
    return a + b;
};
Person['add'] = oper; //***********

console.log("더하기 : %d", Person.add(10, 10));