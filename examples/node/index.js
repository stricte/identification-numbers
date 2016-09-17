var ids = require('../../index');

console.log('Is PESEL `83071503434` valid?', ids.pesel('83071503434').isValid());
console.log('Is REGON `975124224` valid?', ids.regon('975124224').isValid());
