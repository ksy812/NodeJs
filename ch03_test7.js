//객체 선언 시 속성 정의
var Person = {
    age: 20,
    name: "김소연",
    add: function(a, b){ //***********
        return a + b;
    }
};

console.log("더하기 : %d", Person.add(10, 10));