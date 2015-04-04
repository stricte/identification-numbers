'use strict';

var peselModule = require('../../lib/identification-numbers/pesel.js');

describe('pesel', function () {

    var pesel;

    beforeEach(function () {
        pesel = peselModule.pesel;
    });

    describe('random', function () {
        it('random PESEL is not implemented yet', function () {
            expect(pesel().random()).toEqual('ABC');
        });
    });

    describe('isValid', function () {
        it('should return true for valid PESEL', function () {
            expect(pesel('83071503434').isValid()).toBeTruthy();
        });

        it('should return false for too long PESEL', function () {
            expect(pesel('83071503434' + '00').isValid()).toBeFalsy();
        });
    });

    describe('decode', function () {
        it('should return decoded properties', function () {
            var decoded = pesel('83071503434').decode();
            expect(decoded.ordinal).toEqual(343);
            expect(decoded.checksum).toEqual(4);
            expect(decoded.sex).toEqual('M');
        });
    });

});