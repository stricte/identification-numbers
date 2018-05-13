'use strict';

var nip = require('../lib/nip');
var chai = require('chai');
var expect = chai.expect;

describe('NIP', function () {

  describe('#random', function () {
    it('should return random NIP', function () {
      var nip1 = nip().random();
      var nip2 = nip().random();

      expect(nip1).not.to.equal(nip2);
      expect(nip(nip1).isValid()).to.be.true;
      expect(nip(nip2).isValid()).to.be.true;
    });
  });

  describe('#isValid', function () {
    it('should return true for valid NIP', function () {
      expect(nip('2372636037').isValid()).to.be.true;
    });

    it('should return false for too long NIP', function () {
      expect(nip('2372636037' + '00').isValid()).to.be.false;
    });

    it('should return true for too short NIP', function () {
      expect(nip('23726').isValid()).to.be.false;
    });

    it('should return false for NIP with checksum 10', function () {
      expect(nip('1234567890').isValid()).to.be.false;
    });
  });

});
