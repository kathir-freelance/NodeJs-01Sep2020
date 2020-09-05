const fs = require('fs');
const file = fs.createWriteStream('file.txt');

file.write('appending ? hello world');
file.end(', from streams!');