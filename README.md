Identification Numbers
======================

Provides utility methods to validate and generate various identification numbers such as VAT, IBAN, PESEL, etc.

## Installation

```shell
npm install identification-numbers --save
```

## Usage

```js
var iNumbers = require('identification-numbers');

console.log('random NIP', iNumbers.randomNip());
console.log('random REGON', iNumbers.randomRegon());
```

## Release History

* 0.0.1 Initial release