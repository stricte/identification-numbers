'use strict';

var regonModule = require('../../lib/identification-numbers/regon.js');

describe('regon', function () {

    var regon;

    beforeEach(function () {
        regon = regonModule.regon;
    });

    describe('random', function () {
        it('should return random REGON', function () {
            var regon1 = regon().random(),
                regon2 = regon().random();

            expect(regon1).not.toEqual(regon2);
            expect(regon(regon1).isValid()).toBeTruthy();
            expect(regon(regon2).isValid()).toBeTruthy();
        });
    });

    describe('isValid', function () {
        it('should return true for valid REGON', function () {
            expect(regon('550440322').isValid()).toBeTruthy();
        });

        it('should return false for too long REGON', function () {
            expect(regon('550440322' + '00').isValid()).toBeFalsy();
        });

        it('should return false for too short REGON', function () {
            expect(regon('3423').isValid()).toBeFalsy();
        });
    });

});