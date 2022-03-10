var Users = [{name:'김소연', age:20}, {name:'큰일남', age:22}];

var add = function(a, b){
    return a + b;
}

Users.push(add); //**********

console.log("배열 요소의 수 : %d", Users.length);
console.log("첫번째 사용자 이름 : %s", Users[0].name);
console.log("두번째 사용자 나이 : %d", Users[1].age);
console.log(Users[0], Users[1], Users[2], Users[3]);

console.log("세 번째 요소로 추가된 함수 실행 : %d", Users[2](10, 10)); //**********