/*
In Node there are internal modules:
fs --> fileSystem */
const fs = require('fs')

const file = fs.readFileSync('./file.js', {encoding: 'utf-8'}).toString()
console.log(file)

//you can overwrite a file, in this example, we put this in the templateFile
fs.writeFileSync('./templateFile.js', 'let api2= "template"')