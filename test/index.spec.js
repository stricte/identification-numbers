'use strict';

var index = require('../index');
var chai = require('chai');
var expect = chai.expect;

describe('index', function () {

  it('should export nip', function () {
    expect(index.nip).to.be.defined;
  });

  it('should export pesel', function () {
    expect(index.pesel).to.be.defined;
  });

  it('should export regon', function () {
    expect(index.regon).to.be.defined;
  });

});
