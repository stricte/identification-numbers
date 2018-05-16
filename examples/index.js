const PESEL = require('../index').PESEL;
const REGON = require('../index').REGON;

console.log('Is PESEL `83071503434` valid?', PESEL.isValid('83071503434'));
console.log('Is REGON `975124224` valid?', REGON.isValid('975124224'));
