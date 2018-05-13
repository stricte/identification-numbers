'use strict';

var index = require('../index');
var expect = require('chai').expect;

describe('index', function () {

  it('should export nip', function () {
    expect(index.nip).to.exist;
  });

  it('should export pesel', function () {
    expect(index.pesel).to.exist;
  });

  it('should export regon', function () {
    expect(index.regon).to.exist;
  });

});
