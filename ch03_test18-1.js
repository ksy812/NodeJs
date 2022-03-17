//프로토타입 객체 만들기
function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.say = function(word){ //.prototype이 없을 시 에러 발생함
    console.log(this.name + ' 객체가 ' + word + '라고 말합니다.');
}

Person.prototype.listen = function(song){
    console.log(this.name + ' 객체가 ' + song + '을 듣습니다,');
}

//객체 생성이 함수 추가보다 먼저 일어났음에도, ride()를 사용할 수 있음
var person01 = new Person('3205김소연', 19);
var person02 = new Person('고양이', 3);
var person03 = new Person('강아지', 17);

Person.prototype.ride = function(vehicle){
    console.log(this.name + ' 객체가 ' + vehicle + '을 탑승합니다,');
}

console.log(person01.name + ' 객체의 say("안녕하세요")을 호출합니다.');
person01.say('안녕하세요');

console.log(person02.name + ' 객체의 listen("INVU")을 호출합니다.');
person02.listen('INVU');

console.log(person03.name + ' 객체의 ride("BUS")을 호출합니다.');
person03.ride('BUS');

//중복된 선언을 하면 가장 최근의 내용으로 덮어쓰여짐
Person.prototype.say = function(person){
    console.log(this.name + ' 씨가 ' + person.name + '를 부릅니다!!!');
}
console.log(person01.name + ' 객체의 변경된 say('+ person02.name +')을 호출합니다.');
person01.say(person02);