'use strict';

var idNumbers = require('../../lib/identification-numbers/index.js');

describe('pesel', function () {

    var pesel;

    beforeEach(function () {
        pesel = idNumbers.pesel();
    });

    describe('random', function () {
        it('random PESEL is not implemented yet', function () {
            expect(function () {
                pesel.random();
            }).toThrow(new Error('I\'m not implemented yet :('));
        });
    });

    describe('isValid', function () {
        it('should return true for valid PESEL', function () {
            expect(pesel.isValid('83071503434')).toBeTruthy();
        });

        it('should return false for too long PESEL', function () {
            expect(pesel.isValid('83071503434' + '00')).toBeFalsy();
        });
    });

    describe('decode', function () {
        it('should return decoded properties', function () {
            var decoded = pesel.decode('83071503434');
            expect(decoded.ordinal).toEqual(343);
            expect(decoded.checksum).toEqual(4);
            expect(decoded.sex).toEqual('M');
        });
    });

});