'use strict';

var idNumbers = require('../../lib/identification-numbers/index.js');

describe('nip', function () {

    var nip;

    beforeEach(function () {
        nip = idNumbers.nip();
    });

    describe('random', function () {
        it('should return random NIP', function () {
            var randomNip1 = nip.random();
            var randomNip2 = nip.random();

            expect(randomNip1).not.toEqual(randomNip2);
            expect(nip.isValid(randomNip1)).toBeTruthy();
            expect(nip.isValid(randomNip2)).toBeTruthy();
        });
    });

    describe('isValid', function () {
        it('should return true for valid NIP', function () {
            expect(nip.isValid('2372636037')).toBeTruthy();
        });

        it('should return false for too long NIP', function () {
            expect(nip.isValid('2372636037' + '00')).toBeFalsy();
        });

        it('should return true for too short NIP', function () {
            expect(nip.isValid('23726')).toBeFalsy();
        });

        it('should return false for NIP with checksum 10', function () {
            expect(nip.isValid('1234567890')).toBeFalsy();
        });
    });

});
