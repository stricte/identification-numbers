# identification-numbers-pl

> Provides utility methods to validate and generate various identification numbers used in Poland such as
> [NIP](https://pl.wikipedia.org/wiki/NIP), [REGON](https://pl.wikipedia.org/wiki/REGON),
> [PESEL](https://pl.wikipedia.org/wiki/PESEL), etc.

[![Build Status](https://travis-ci.org/SOFTWARE-CLINIC/identification-numbers-pl.svg?branch=master)](https://travis-ci.org/SOFTWARE-CLINIC/identification-numbers-pl)
[![npm version](https://badge.fury.io/js/identification-numbers-pl.svg)](http://badge.fury.io/js/identification-numbers-pl)
[![Dependency Status](https://david-dm.org/SOFTWARE-CLINIC/identification-numbers-pl.svg)](https://david-dm.org/SOFTWARE-CLINIC/identification-numbers-pl)
[![Code Climate](https://codeclimate.com/github/SOFTWARE-CLINIC/identification-numbers-pl/badges/gpa.svg)](https://codeclimate.com/github/SOFTWARE-CLINIC/identification-numbers-pl)
[![Test Coverage](https://codeclimate.com/github/SOFTWARE-CLINIC/identification-numbers-pl/badges/coverage.svg)](https://codeclimate.com/github/SOFTWARE-CLINIC/identification-numbers-pl/coverage)

> **Note** that this project is still in its **incubating phase**.

## Installation

```shell
$ npm install identification-numbers --save --save-exact
```

## Quick Start

```js
var ids = require('identification-numbers-pl');

expect(ids.pesel('83071503434').isValid()).to.be.true;
expect(ids.regon('975124224').isValid()).to.be.true;
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
