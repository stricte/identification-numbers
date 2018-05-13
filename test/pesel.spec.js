'use strict';

var pesel = require('../lib/pesel');
var expect = require('chai').expect;

describe('PESEL', function () {

  describe('#random', function () {
    it('random PESEL is not implemented yet', function () {
      expect(pesel().random()).to.equal('ABC');
    });
  });

  describe('#isValid', function () {
    it('should return true for valid PESEL', function () {
      expect(pesel('83071503434').isValid()).to.be.true;
    });

    it('should return false for too long PESEL', function () {
      expect(pesel('83071503434' + '00').isValid()).to.be.false;
    });
  });

  describe('#decode', function () {
    it('should return decoded properties', function () {
      var decoded = pesel('83071503434').decode();
      expect(decoded.ordinal).to.equal(343);
      expect(decoded.checksum).to.equal(4);
      expect(decoded.sex).to.equal('M');
      expect(decoded.year).to.equal(1983);
      expect(decoded.month).to.equal(7);
      expect(decoded.day).to.equal(15);
    });
  });

});
