'use strict';

var nipModule = require('../../lib/identification-numbers/nip.js');

describe('nip', function () {

    var nip;

    beforeEach(function () {
        nip = nipModule.nip;
    });

    describe('random', function () {
        it('should return random NIP', function () {
            var randomNip1 = nip().random();
            var randomNip2 = nip().random();

            expect(randomNip1).not.toEqual(randomNip2);
            expect(nip(randomNip1).isValid()).toBeTruthy();
            expect(nip(randomNip2).isValid()).toBeTruthy();
        });
    });

    describe('isValid', function () {
        it('should return true for valid NIP', function () {
            expect(nip('2372636037').isValid()).toBeTruthy();
        });

        it('should return false for too long NIP', function () {
            expect(nip('2372636037' + '00').isValid()).toBeFalsy();
        });

        it('should return true for too short NIP', function () {
            expect(nip('23726').isValid()).toBeFalsy();
        });

        it('should return false for NIP with checksum 10', function () {
            expect(nip('1234567890').isValid()).toBeFalsy();
        });
    });

});
