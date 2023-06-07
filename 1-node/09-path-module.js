const path = require('path');

// console.log(path)
console.log(path.sep)

// join method is used to join the path of the file
const filePath = path.join('/content', 'subfolder', 'test.txt') 

console.log(filePath)

// basename method is used to get the base name of the file
const base = path.basename(filePath)
console.log(base)


// resolve method is used to get the absolute path of the file

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')

console.log(absolute)

// path.basename()
// path.resolve()
// path.join()
// path.sep