const fs = require('fs'),
path = 'a.txt'

const stat = fs.statSync(path)
console.log(stat.dev)