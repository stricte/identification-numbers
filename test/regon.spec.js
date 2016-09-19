'use strict';

var regon = require('../lib/regon');
var chai = require('chai');
var expect = chai.expect;

describe('regon', function () {

  describe('#random', function () {
    it('should return random REGON', function () {
      var regon1 = regon().random();
      var regon2 = regon().random();

      expect(regon1).not.to.equal(regon2);
      expect(regon(regon1).isValid()).to.be.true;
      expect(regon(regon2).isValid()).to.be.true;
    });
  });

  describe('#isValid', function () {
    it('should return true for valid REGON', function () {
      expect(regon('550440322').isValid()).to.be.true;
    });

    it('should return true for valid REGON with checksum equal 10', function () {
      expect(regon('386685250').isValid()).to.be.true;
    });

    it('should return false for too long REGON', function () {
      expect(regon('550440322' + '00').isValid()).to.be.false;
    });

    it('should return false for too short REGON', function () {
      expect(regon('3423').isValid()).to.be.false;
    });
  });

});
