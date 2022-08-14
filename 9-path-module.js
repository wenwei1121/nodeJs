const path = require('path')
console.log(path.sep) // "/"

const filepath = path.join('/content/', 'subfolder', 'test.txt')
console.log(filepath) // "/content/subfolder/test.txt"

const base = path.basename(filepath)
console.log(base) // test.txt

// __ => underscore underscore is global
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute);