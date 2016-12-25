# npm-slot-machine

Project inspiration! Make a project with these random npm packages.

[![npm][npm-image]][npm-url]
[![standard][standard-image]][standard-url]
[![conduct][conduct]][conduct-url]

[npm-image]: https://img.shields.io/npm/v/npm-slot-machine.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/npm-slot-machine
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: http://npm.im/standard
[conduct]: https://img.shields.io/badge/code%20of%20conduct-contributor%20covenant-green.svg?style=flat-square
[conduct-url]: CONDUCT.md

## About

Need inspiration for a weekend hacking project? Want to see some random npm package names?

Run the npm slot machine and get a prompt of 3 random package names you can use as inspiration for your next project.

Or you can just marvel at all the packages you've never seen before.

You may need to try it a few times before something interesting comes up 🙃.

## Install

```sh
npm install -g npm-slot-machine
```

## Usage

```sh
npm-slot-machine

# returns something like:

Create a new project with:

  - colourlovers (https://npmjs.com/colourlovers)
  - bong-raf (https://npmjs.com/bong-raf)
  - js-github (https://npmjs.com/js-github)
```

You can specify the number of packages you want the command-line tool to return:

```sh
npm-slot-machine 5
```

### JS API:

```js
var slotMachine = require('npm-slot-machine')

var list = slotMachine() // returns an array of package names
```

Specify number of packages to return:

```js
var slotMachine = require('npm-slot-machine')

var list = slotMachine({ count: 5 }) // returns an array of package names
```

## How about something useful?

I'm imagining a tool inspired by this that uses some criteria to choose the modules:

- made by certain people
- number of dependents on npm
- passing travis build
- within 6 degrees of dependency
- etc.

## See also

- [all-the-package-names](https://npmjs.com/all-the-package-names) – the package i'm using as the source of npm package names

## License

[ISC](LICENSE.md)
