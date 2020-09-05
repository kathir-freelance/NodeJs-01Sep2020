var fs=require('fs');

var data=fs.readFile('a1.txt',function(err,data){
if(err)
return err

console.log(data.toString());
});


console.log('program ended');
