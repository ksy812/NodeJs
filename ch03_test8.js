var Users = [{name:'김소연', age:20}, {name:'큰일남', age:22}];
console.log("사용자 수 : %d", Users.length);

Users.push({name:'어떡함', age:23});

console.log("사용자 수 : %d", Users.length);
console.log("첫번째 사용자 이름 : %s", Users[0].name);