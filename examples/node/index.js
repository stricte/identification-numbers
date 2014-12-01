var identification_numbers = require('identification-numbers');

var pesel = identification_numbers.pesel();
var regon = identification_numbers.regon();

console.log('Is PESEL `83071503434` valid?', pesel.isValid('83071503434'));
console.log('Is REGON `975124224` valid?', regon.isValid('975124224'));