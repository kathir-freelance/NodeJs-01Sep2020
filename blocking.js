var fs=require('fs');

var data=fs.readFileSync('a.txt');

console.log(data.toString());
console.log('program ended');
