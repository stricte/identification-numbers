'use strict';

var regonModule = require('../../lib/identification-numbers/regon.js');

describe('regon', function () {

    var regon;

    beforeEach(function () {
        regon = regonModule.regon;
    });

    describe('random', function () {
        it('should return random REGON', function () {
            var randomRegon1 = regon().random();
            var randomRegon2 = regon().random();

            expect(randomRegon1).not.toEqual(randomRegon2);
            expect(regon(randomRegon1).isValid()).toBeTruthy();
            expect(regon(randomRegon2).isValid()).toBeTruthy();
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