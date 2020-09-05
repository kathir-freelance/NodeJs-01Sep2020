const fs = require('fs')
fs.stat('a.txt', (err, stats) => {
  if (err) {
    console.error(err)
    return
  }

  console.log(stats.isFile()); //true
  console.log( stats.isDirectory() );//false
  console.log(  stats.isSymbolicLink()); //false
  console.log(stats.size); //1024000 //= 1MB
  console.log(stats); //1024000 //= 1MB
})
