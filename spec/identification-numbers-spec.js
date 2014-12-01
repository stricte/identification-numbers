var idNumbers = require('../lib/identification-numbers/index.js');

xdescribe('pesel', function () {

    var pesel;

    beforeEach(function () {
        pesel = idNumbers.pesel();
    });

    it('should return random PESEL', function () {
        var randomPesel1 = pesel.random();
        var randomPesel2 = pesel.random();
        expect(randomPesel1).not.toEqual(randomPesel2);
    });

    it('should valid PESEL', function () {
        expect(pesel.isValid('83071503434')).toBeTruthy();
    });

});

describe('nip', function () {

    var nip;

    beforeEach(function () {
        nip = idNumbers.nip();
    });

    it('should return random NIP', function () {
        var randomNip1 = nip.random();
        var randomNip2 = nip.random();
        expect(randomNip1).not.toEqual(randomNip2);
        expect(nip.isValid(randomNip1)).toBeTruthy();
        expect(nip.isValid(randomNip2)).toBeTruthy();
    });

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

describe('regon', function () {

    var regon;

    beforeEach(function () {
        regon = idNumbers.regon();
    });

    it('should return random REGON', function () {
        var randomRegon1 = regon.random();
        var randomRegon2 = regon.random();
        expect(randomRegon1).not.toEqual(randomRegon2);
        expect(regon.isValid(randomRegon1)).toBeTruthy();
        expect(regon.isValid(randomRegon2)).toBeTruthy();
    });

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