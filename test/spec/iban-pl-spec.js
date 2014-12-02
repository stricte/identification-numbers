'use strict';

var idNumbers = require('../../lib/identification-numbers/index.js');

describe('iban-pl', function () {

    var iban;

    beforeEach(function () {
        iban = idNumbers.iban('PL');
    });

    describe('isValid', function () {
        it('should return true for valid IBAN', function () {
            expect(iban.isValid('PL61109010140000071219812874')).toBeTruthy();
        });
    });

});