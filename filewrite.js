var fs=require('fs');

fs.appendFile('b.txt','   !!!!',function(err){

console.log('written succesfully');
fs.readFile('b.txt',function(err,data){
	console.log(data.toString());
});
});