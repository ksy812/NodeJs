/*
 * 설정 파일
 */

module.exports = {
	server_port: 3000,
	db_url: 'mongodb://sunny5:ksy0812a@cluster0-shard-00-00.qypxz.mongodb.net:27017,cluster0-shard-00-01.qypxz.mongodb.net:27017,cluster0-shard-00-02.qypxz.mongodb.net:27017/myuserdb?replicaSet=atlas-10ro63-shard-0&ssl=true&authSource=admin',
	//'mongodb+srv://sunny5:ksy0812a@cluster0.qypxz.mongodb.net/test',
	//db_url: 'mongodb://localhost:27017/local',
	db_schemas: [
	    {file:'./user_schema', collection:'users3', schemaName:'UserSchema', modelName:'UserModel'}
	],
	route_info: [
	    //===== User =====//
	    {file:'./user', path:'/process/login', method:'login', type:'post'}	      // user.login 
	    ,{file:'./user', path:'/process/adduser', method:'adduser', type:'post'}  // user.adduser 
	    ,{file:'./user', path:'/process/listuser', method:'listuser', type:'post'}// user.listuser 

	]
}