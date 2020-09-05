const fs = require('fs'),
path = 'a.txt'

const stat = fs.statSync(path)
console.log(stat.size);

console.log(__dirname);
console.log(__filename);

const func=(str)=>{
	console.log(str);
}
func('jjjj');


setTimeout(func('jjj'),2000);
//setInterval(func('jjj'),2000);