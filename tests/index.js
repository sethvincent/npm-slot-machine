var test = require('tape')

var slotMachine = require('../index')

test('get random packages', function (t) {
  var list = slotMachine()
  t.equal(list.length, 3)
  t.end()
})

test('specify count', function (t) {
  var list = slotMachine({ count: 5 })
  t.equal(list.length, 5)
  t.end()
})
