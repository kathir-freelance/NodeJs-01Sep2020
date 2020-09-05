
const fs = require('fs');

const readableStream = fs.createReadStream('file.txt', {
    highWaterMark: 10
});

readableStream.on('readable', () => {
    process.stdout.write(`[${readableStream.read()}]`);
});

readableStream.on('end', () => {
    console.log('DONE');
});

readableStream.on('data', (d) => {
    console.log('data read is -- '+d+' --');
});