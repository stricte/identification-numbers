'use strict';

var chai = require('chai');
var expect = chai.expect;

describe('util', function () {

  var util = require('../lib/util');

  it('isString', function () {
    expect(util.isString('ABC')).to.be.true;
    expect(util.isString('')).to.be.true;
    expect(util.isString(null)).to.be.false;
    expect(util.isString(28)).to.be.false;
    expect(util.isString(undefined)).to.be.false;
  });

});
