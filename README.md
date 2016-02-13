Identification Numbers
======================
[![Build Status](https://travis-ci.org/SOFTWARE-CLINIC/identification-numbers.svg?branch=master)](https://travis-ci.org/SOFTWARE-CLINIC/identification-numbers)
[![npm version](https://badge.fury.io/js/identification-numbers.svg)](http://badge.fury.io/js/identification-numbers)
[![Dependency Status](https://david-dm.org/danielpacak/identification-numbers.svg)](https://david-dm.org/danielpacak/identification-numbers)
[![devDependency Status](https://david-dm.org/danielpacak/identification-numbers/dev-status.svg)](https://david-dm.org/danielpacak/identification-numbers#info=devDependencies)

Provides utility methods to validate and generate various identification numbers such as NIP, REGON, PESEL, etc.

Note that this project is still in its **incubating** phase.

## Installation

```shell
npm install identification-numbers
```

## Usage

```js
var identification_numbers = require('identification-numbers'),
    pesel = identification_numbers.pesel,
    regon = identification_numbers.regon;

expect(pesel('83071503434').isValid()).toBeTruthy();
expect(regon('975124224').isValid()).toBeTruthy();
```

## Release History
* 0.0.7
  * Expermienal patch with no changes in code
* 0.0.6
  * Fixed [issue #1](https://github.com/danielpacak/identification-numbers/issues/1)
* 0.0.5
  * Decode PESEL
* 0.0.4
  * Validate PESEL
* 0.0.3
  * Added random NIP generator
  * Added NIP validator
  * Added random REGON generator
  * Added REGON validator
* 0.0.2
* 0.0.1
  * Initial release
