describe('util', function () {

    var util = require('../../lib/identification-numbers/util.js');

    it('isString', function () {
        expect(util.isString('ABC')).toBeTruthy();
        expect(util.isString('')).toBeTruthy();
        expect(util.isString(null)).toBeFalsy();
        expect(util.isString(28)).toBeFalsy();
        expect(util.isString(undefined)).toBeFalsy();
    });

});