/*
In Node there are internal modules:
fs --> fileSystem */
const fs = require('fs')

const file = fs.readFileSync('./file.js', {encoding: 'utf-8'}).toString()

console.log(file)