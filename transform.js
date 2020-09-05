const fs=require('fs');
const zlib=require('zlib');

const readableStream = fs.createReadStream('file.txt');
const transformStream = zlib.createGzip();
const writableStream = fs.createWriteStream('file.gz');
readableStream.pipe(transformStream).pipe(writableStream);