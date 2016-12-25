#! /usr/bin/env node

var random = require('./index')

var count = process.argv[2]

console.log('\nCreate a new project with:\n')
var list = random({ count: count })

list.forEach(function (item, i) {
  console.log('  -', item, '(https://npmjs.com/' + item + ')')
})

console.log('\n')
