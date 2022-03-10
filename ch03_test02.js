var Person = {}; //객체 만드는  방법
//객체 속성은 .(dot) 연산자 또는 ["속성이름 문자열"]를 통해 접근 가능함.

Person['age'] = 20;
Person['name'] = "김소연";
Person.mobile = '010-2744-8233';

console.log("나이 : %d", Person.age);
console.log("나이 : %d", Person['age']);
console.log("이름 : %s", Person.name);
console.log("이름 : %s", Person['name']);
console.log("전화 : %s", Person.mobile);
console.log("전화 : %s", Person['mobile']);