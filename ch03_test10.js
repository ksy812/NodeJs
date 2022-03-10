var Users = [{name:'김소연', age:20}, {name:'큰일남', age:22}, {name:'안녕하세요', age:1}];

console.log("배열 요소의 수 : %d", Users.length);
for(var i = 0; i < Users.length; i++){
    console.log("배열 요소 #" + i + " : %s", Users[i].name);
}

console.log("\nforEach 구문 사용하기");
Users.forEach(function(item, index){
    console.log("배열 요소 #" + i + " : %s", item.name);
});