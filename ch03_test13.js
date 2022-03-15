var Users = [{name:'고양이', age:20}, {name:'강아지', age:22}, {name:'해파리', age:18}];

console.log('delete 키워드로 배열 요소 삭제 전 배열 요소의 수 : %d', Users.length);
//배열의 요소 삭제하기, 요소들을 추가하거나 삭제하기
delete Users[1]; //인덱스는 그대로 남아있음

console.log('delete 키워드로 배열 요소 삭제 후');
console.dir(Users);

Users.splice(1, 0, {name:'가오리', age:15}); //인덱스 1 위치에 추가
console.dir(Users);

Users.splice(2, 1);
console.log('splice()로 인덱스 2의 요소를 1개 삭제한 후');

console.dir(Users);