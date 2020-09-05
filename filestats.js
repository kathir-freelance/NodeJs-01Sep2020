var fs=require('fs');
fs.stat('a.txt',function(err,stats){

if(err)
	return console.error(err);

console.log(stats);
console.log(stats.isFile());
console.log(stats.isDirectory());
});