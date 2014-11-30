Identification Numbers
======================

Provides utility methods to validate and generate various identification numbers such as VAT, IBAN, PESEL, etc.

## Installation

```shell
npm install identification-numbers --save
```

## Usage

```js
var idNumbers = require('identification-numbers');

console.log('random NIP', idNumbers.randomNip());
console.log('random REGON', idNumbers.randomRegon());

console.log(idNumbers.pesel().isValid('83071603434')); // -> true
console.log('random PESEL', idNumbers.pesel().random());
```

## Release History

* 0.0.2 Validate/Generate random PESEL
* 0.0.1 Initial release