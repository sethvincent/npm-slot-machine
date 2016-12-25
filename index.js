var packages = require('all-the-package-names')
var random = require('pick-random')

module.exports = function npmRoulette (options) {
  options = options || {}
  options.count = options.count || 3
  return random(packages, options)
}
