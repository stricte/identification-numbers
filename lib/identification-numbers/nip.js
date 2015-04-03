exports.nip = function (value) {

    var NIP_WEIGHTS = [6, 5, 7, 2, 3, 4, 5, 6, 7],
        NIP_MODULO = 11;

    var Nip = function (value) {
        this.value = value;
    };

    Nip.prototype.isValid = function () {
        if (typeof this.value === 'string' && this.value.length === 10) {
            var i, sum = 0, checksum, digits = [];
            for (i = 0; i < NIP_WEIGHTS.length; i++) {
                digits.push(+this.value[i]);
                sum += digits[i] * NIP_WEIGHTS[i];
            }
            checksum = sum % NIP_MODULO;
            return checksum === (+this.value[9]);
        }
        return false;
    };

    Nip.prototype.random = function () {
        var i, sum = 0, checksum, digits = [];

        for (i = 0; i < NIP_WEIGHTS.length; i++) {
            digits.push(_randomInt(1, 9));
            sum += digits[i] * NIP_WEIGHTS[i];
        }

        checksum = sum % NIP_MODULO;
        if (checksum === 10 || checksum === 0) {
            return this.random();
        }

        return digits.join('') + checksum;
    };

    // TODO Move to util.js
    function _randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return new Nip(value);

};