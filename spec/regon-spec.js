var idNumbers = require('../lib/identification-numbers/index.js');

describe('regon', function () {

    var regon;

    beforeEach(function () {
        regon = idNumbers.regon();
    });

    describe("random", function () {
        it('should return random REGON', function () {
            var randomRegon1 = regon.random();
            var randomRegon2 = regon.random();

            expect(randomRegon1).not.toEqual(randomRegon2);
            expect(regon.isValid(randomRegon1)).toBeTruthy();
            expect(regon.isValid(randomRegon2)).toBeTruthy();
        });
    });

    describe("isValid", function () {
        it('should return true for valid REGON', function () {
            expect(regon.isValid('550440322')).toBeTruthy();
        });

        it('should return false for too long REGON', function () {
            expect(regon.isValid('550440322' + '00')).toBeFalsy();
        });

        it('should return false for too short REGON', function () {
            expect(regon.isValid('3423')).toBeFalsy();
        });
    });

});