//프로토타입 객체 만들기
function Person(name, age){
    this.name = name;
    this.age = age;
}

//객체를 이 위치에서 생성해도 walk()를 사용할 수 있음.
//var person01 = new Person('첫번째', 20);

Person.prototype.walk = function(speed){ //prototype없으면 에러남
    console.log(speed + 'km 속도로 걸어갑니다.');
}

var person01 = new Person('첫번째', 20);
var person02 = new Person('두번째', 22);

console.log(person01.name + ' 객체의 walk(10)을 호출합니다.');
person01.walk(10);