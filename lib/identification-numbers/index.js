module.exports = {

    nip: function () {
        var NIP_WEIGHTS = [6, 5, 7, 2, 3, 4, 5, 6, 7];
        var NIP_MODULO = 11;

        return {
            isValid: function (nip) {
                if (typeof nip === 'string' && nip.length == 10) {
                    var i, sum = 0, checksum, digits = new Array();
                    for (i = 0; i < NIP_WEIGHTS.length; i++) {
                        digits.push(+nip[i]);
                        sum += digits[i] * NIP_WEIGHTS[i];
                    }
                    checksum = sum % NIP_MODULO;
                    return checksum === (+nip[9])
                }
                return false;
            },

            random: function () {
                var i, sum = 0, checksum, digits = new Array();

                for (i = 0; i < NIP_WEIGHTS.length; i++) {
                    digits.push(_randomInt(1, 9));
                    sum += digits[i] * NIP_WEIGHTS[i];
                }

                checksum = sum % 11;
                if (checksum == 10 || checksum == 0) {
                    return this.random();
                }

                return digits.join('') + checksum;
            }
        }
    },

    regon: function () {
        var REGON_WEIGHTS = [8, 9, 2, 3, 4, 5, 6, 7];
        var REGON_MODULO = 11;

        return {
            isValid: function (regon) {
                if (typeof regon === 'string' && regon.length == 9) {
                    var i, sum = 0, checksum, digits = new Array();
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
                var i, sum = 0, checksum, digits = new Array();

                for (i = 0; i < REGON_WEIGHTS.length; i++) {
                    digits.push(_randomInt(1, 9));
                    sum += digits[i] * REGON_WEIGHTS[i];
                }

                checksum = sum % 11;
                if (checksum == 10) {
                    checksum = 0;
                }
                return digits.join('') + checksum;
            }
        }
    },

    pesel: function () {
        return {
            isValid: function (pesel) {
                return true;
            },

            random: function () {
                return '83071503434';
            }
        }
    }

};

// TODO Make sure that this function is not exported.
var _randomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
