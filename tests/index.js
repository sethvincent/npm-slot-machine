var test = require('tape')

var roulette = require('../index')

test('get random packages', function (t) {
  var list = roulette()
  t.equal(list.length, 3)
  t.end()
})

test('specify count', function (t) {
  var list = roulette({ count: 5 })
  t.equal(list.length, 5)
  t.end()
})
