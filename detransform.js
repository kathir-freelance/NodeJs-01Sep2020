var fs = require("fs");
var zlib = require('zlib');
// Decompress the file 
fs.createReadStream('file.zip')
   .pipe(zlib.createGunzip())
   .pipe(fs.createWriteStream('file2.txt'));
console.log("File Decompressed.");