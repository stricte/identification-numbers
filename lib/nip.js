'use strict';

const util = require('./util');

const WEIGHTS = [6, 5, 7, 2, 3, 4, 5, 6, 7];
const MODULO = 11;

function isValid(value) {
  if (util.isString(value) && value.length === 10) {
    let i, sum = 0, checksum, digits = [];
    for (i = 0; i < WEIGHTS.length; i++) {
      digits.push(+value[i]);
      sum += digits[i] * WEIGHTS[i];
    }
    checksum = sum % MODULO;
    return checksum === (+value[9]);
  }
  return false;
}

function random() {
  let i, sum = 0, checksum, digits = [];

  for (i = 0; i < WEIGHTS.length; i++) {
    digits.push(util.randomInt(1, 9));
    sum += digits[i] * WEIGHTS[i];
  }

  checksum = sum % MODULO;
  if (checksum === 10 || checksum === 0) {
    return this.random();
  }

  return digits.join('') + checksum;
}

module.exports = {
  isValid: isValid,
  random: random
};
