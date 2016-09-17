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
$ npm install identification-numbers-pl --save --save-exact
```

## Quick Start

```js
var ids = require('identification-numbers-pl');

expect(ids.pesel('83071503434').isValid()).to.be.true;
expect(ids.regon('975124224').isValid()).to.be.true;
```
