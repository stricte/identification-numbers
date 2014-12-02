'use strict';

(function (exports) {

    exports.nip = function () {
        var NIP_WEIGHTS = [6, 5, 7, 2, 3, 4, 5, 6, 7];
        var NIP_MODULO = 11;

        return {
            isValid: function (nip) {
                if (typeof nip === 'string' && nip.length === 10) {
                    var i, sum = 0, checksum, digits = [];
                    for (i = 0; i < NIP_WEIGHTS.length; i++) {
                        digits.push(+nip[i]);
                        sum += digits[i] * NIP_WEIGHTS[i];
                    }
                    checksum = sum % NIP_MODULO;
                    return checksum === (+nip[9]);
                }
                return false;
            },

            random: function () {
                var i, sum = 0, checksum, digits = [];

                for (i = 0; i < NIP_WEIGHTS.length; i++) {
                    digits.push(_randomInt(1, 9));
                    sum += digits[i] * NIP_WEIGHTS[i];
                }

                checksum = sum % 11;
                if (checksum === 10 || checksum === 0) {
                    return this.random();
                }

                return digits.join('') + checksum;
            }
        };
    };

    exports.regon = function () {
        var REGON_WEIGHTS = [8, 9, 2, 3, 4, 5, 6, 7];
        var REGON_MODULO = 11;

        return {
            isValid: function (regon) {
                if (typeof regon === 'string' && regon.length === 9) {
                    var i, sum = 0, checksum, digits = [];
                    for (i = 0; i < REGON_WEIGHTS.length; i++) {
                        digits.push(+regon[i]);
                        sum += digits[i] * REGON_WEIGHTS[i];
                    }
                    checksum = sum % REGON_MODULO;
                    return checksum === (+regon[8]);
                }
                return false;
            },

            random: function () {
                var i, sum = 0, checksum, digits = [];

                for (i = 0; i < REGON_WEIGHTS.length; i++) {
                    digits.push(_randomInt(1, 9));
                    sum += digits[i] * REGON_WEIGHTS[i];
                }

                checksum = (sum % REGON_MODULO) % 10;
                return digits.join('') + checksum;
            }
        };
    };

    exports.pesel = function () {
        var PESEL_WEIGHTS = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
        var PESEL_LENGTH = 11;
        var PESEL_MODULO = 10;

        return {
            isValid: function (pesel) {
                if (typeof pesel === 'string' && pesel.length === PESEL_LENGTH) {
                    var i, sum = 0, checksum, digits = [];
                    for (i = 0; i < PESEL_WEIGHTS.length; i++) {
                        digits.push(+pesel[i]);
                        sum += digits[i] * PESEL_WEIGHTS[i];
                    }
                    checksum = (10 - sum % PESEL_MODULO) % 10;
                    return checksum === (+pesel[PESEL_LENGTH - 1]);
                }
                return false;
            },

            decode: function (pesel) {
                return {
                    ordinal: +pesel.substring(6, 10),
                    checksum: +pesel[10],
                    sex: (pesel[9] % 2 === 0 ? 'F' : 'M')
                };
            },

            random: function () {
                throw new Error('I\'m not implemented yet :(');
            }
        };
    };

    exports.iban = function (country) {
        return {
            isValid: function (iban) {
                console.log('validating iban', iban, 'for country', country);
                return true;
            }
        };
    };

    var _randomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };


})(typeof exports === 'undefined' ? this.identification_numbers = {} : exports);
