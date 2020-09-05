var fs = require("fs");
var zlib = require('zlib');
const readableStream = fs.createReadStream('file.txt');
const transformStream = zlib.createGzip();
const writableStream = fs.createWriteStream('file.zip');
readableStream.pipe(transformStream).pipe(writableStream);