var idNumbers = require('identification-numbers');

var nip = idNumbers.nip();
var regon = idNumbers.regon();

console.log('random NIP', nip.random());
console.log('random REGON', regon.random());

console.log(nip.isValid('2372636037')); // -> true
console.log(nip.isValid('1234567890')); // -> false