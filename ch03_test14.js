//배열 일부를 잘라내어 새로운 객체로 만들기
var Users = [{name:'고양이', age:20}, {name:'강아지', age:22},
{name:'해파리', age:18}, {name: '가오리', age:15}];

console.log('배열 요소의 수 : %d', Users.length);
console.log('원본 Users');
console.dir(Users);

var Users2 = Users.slice(1, 3);
console.log('slice()로 잘라낸 후 Users2');
console.dir(Users2);

var Users3 = Users2.slice(1);
console.log('slice()로 잘라낸 후 Users3');
console.dir(Users3);
