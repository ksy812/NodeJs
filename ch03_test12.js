var Users = [{name:'고양이', age:20}, {name:'강아지', age:22}];

console.log('unshift()호출 전 배열 요소의 수 : %d', Users.length);

Users.unshift({name:'해파리', age:18});

console.log('unshift()호출 후 배열 요소의 수 : %d', Users.length);
console.dir(Users);

Users.shift();

console.log('shift()호출 후 배열 요소의 수 : %d', Users.length);
console.log(Users);