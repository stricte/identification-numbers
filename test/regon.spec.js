'use strict';

var regon = require('../lib/regon');
var chai = require('chai');
var expect = chai.expect;

describe('regon', function () {

  describe('#random9', function () {
    it('should return random 9 digit REGON', function () {
      var regon1 = regon().random9();
      var regon2 = regon().random9();

      expect(regon1).not.to.equal(regon2);
      expect(regon(regon1).isValid()).to.be.true;
      expect(regon(regon2).isValid()).to.be.true;
    });
  });

  describe('#random14', function () {
    it('should return random 14 digit REGON', function () {
      var regon1 = regon().random14();
      var regon2 = regon().random14();

      expect(regon1).not.to.equal(regon2);
      expect(regon(regon1).isValid()).to.be.true;
      expect(regon(regon2).isValid()).to.be.true;
    });
  });

  describe('#isValid', function () {
    it('should return true for valid 9 digit REGON', function () {
      expect(regon('550440322').isValid()).to.be.true;
    });

    it('should return true for valid 9 digit REGON with checksum equal 10', function () {
      expect(regon('386685250').isValid()).to.be.true;
    });

    it('should return true for valid 14 digit REGON', function () {
      expect(regon('12345678512347').isValid()).to.be.true;
    });

    it('should return false for 14 digit REGON with invalid checksum', function () {
      expect(regon('12345678512346').isValid()).to.be.false;
    });

    it('should return false for too long REGON', function () {
      expect(regon('550440322' + '00').isValid()).to.be.false;
    });

    it('should return false for too short REGON', function () {
      expect(regon('3423').isValid()).to.be.false;
    });
  });

});
