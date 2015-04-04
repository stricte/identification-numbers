var identification_numbers = require('identification-numbers'),
    pesel = identification_numbers.pesel(),
    regon = identification_numbers.regon();

console.log('Is PESEL `83071503434` valid?', pesel('83071503434').isValid());
console.log('Is REGON `975124224` valid?', regon('975124224').isValid());