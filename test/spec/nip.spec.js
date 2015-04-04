'use strict';

var nipModule = require('../../lib/identification-numbers/nip.js');

describe('nip', function () {

    var nip;

    beforeEach(function () {
        nip = nipModule.nip;
    });

    describe('random', function () {
        it('should return random NIP', function () {
            var nip1 = nip().random(),
                nip2 = nip().random();

            expect(nip1).not.toEqual(nip2);
            expect(nip(nip1).isValid()).toBeTruthy();
            expect(nip(nip2).isValid()).toBeTruthy();
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
