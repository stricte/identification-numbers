'use strict';

var util = require('./util');

module.exports = function (value) {

  var WEIGHTS_9 = [8, 9, 2, 3, 4, 5, 6, 7];
  var WEIGHTS_14 = [2, 4, 8, 5, 0, 9, 7, 3, 6, 1, 2, 4, 8];
  var DIVISOR = 11;

  var Regon = function (value) {
    this.value = value;
  };

  Regon.prototype.random9 = function () {
    return generateRandomNumber(WEIGHTS_9, DIVISOR);
  };

  Regon.prototype.random14 = function () {
    return generateRandomNumber(WEIGHTS_14, DIVISOR)
  };

  Regon.prototype.isValid = function () {
    var value = this.value;
    var checksum;
    if (util.isString(value) && value.length === 9) {
      checksum = calculateChecksum(value, WEIGHTS_9, DIVISOR);
      return checksum === (+value[8]);
    }
    if (util.isString(value) && value.length === 14) {
      checksum = calculateChecksum(value, WEIGHTS_14, DIVISOR);
      return checksum === (+value[13]);
    }
    return false;
  };

  return new Regon(value);

};

function calculateChecksum(numberAsString, weights, divisor) {
  var i, sum = 0, digits = [];
  for (i = 0; i < weights.length; i++) {
    digits.push(+numberAsString[i]);
    sum += digits[i] * weights[i];
  }
  return (sum % divisor) % 10;
}

function generateRandomNumber(weights, divisor) {
  var i, sum = 0, checksum, digits = [];

  for (i = 0; i < weights.length; i++) {
    digits.push(util.randomInt(1, 9));
    sum += digits[i] * weights[i];
  }

  checksum = (sum % divisor) % 10;
  return digits.join('') + checksum;
}
