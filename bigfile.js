const fs = require('fs');
const file = fs.createWriteStream('bigfile.txt');

for (let i = 0; i < 10000000; i++) {
    file.write('Hello world ' + i);
}
file.end();