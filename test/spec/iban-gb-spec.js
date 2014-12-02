'use strict';

var idNumbers = require('../../lib/identification-numbers/index.js');

describe('iban-gb', function () {

    var iban;

    beforeEach(function () {
        iban = idNumbers.iban('GB');
    });

    describe('isValid', function () {
        it('should return true for valid IBAN', function () {
            expect(iban.isValid('GB82WEST12345698765432')).toBeTruthy();
        });
    });

});