'use strict';

var util = require('./util');

module.exports = function (value) {

  var WEIGHTS = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
  var LENGTH = 11;
  var MODULO = 10;

  var Pesel = function (value) {
    this.value = value;
  };

  var decodeBirthday = function (pesel) {
    var digits = pesel.split('').map(function (char) {
      return parseInt(char);
    });
    var year = 1900 + digits[0] * 10 + digits[1];

    if (digits[2] >= 2 && digits[2] < 8) {
      year += Math.floor(digits[2] / 2) * 100;
    }

    if (digits[2] >= 8) {
      year -= 100;
    }

    var month = (digits[2] % 2) * 10 + digits[3];
    var day = digits[4] * 10 + digits[5];

    return {
      year: year,
      month: month,
      day: day
    }
  };

  Pesel.prototype.decode = function () {
    var birthday = decodeBirthday(this.value);

    return {
      ordinal: +this.value.substring(6, 10),
      checksum: +this.value[10],
      sex: (this.value[9] % 2 === 0 ? 'F' : 'M'),
      year: birthday.year,
      month: birthday.month,
      day: birthday.day
    };
  };

  Pesel.prototype.isValid = function () {
    if (util.isString(this.value) && this.value.length === LENGTH) {
      var i, sum = 0, checksum, digits = [];
      for (i = 0; i < WEIGHTS.length; i++) {
        digits.push(+this.value[i]);
        sum += digits[i] * WEIGHTS[i];
      }
      checksum = (10 - sum % MODULO) % 10;
      return checksum === (+this.value[LENGTH - 1]);
    }
    return false;
  };

  Pesel.prototype.random = function () {
    // FIXME Implement this guy
    return 'ABC';
  };

  return new Pesel(value);

};
