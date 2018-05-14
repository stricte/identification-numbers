'use strict';

const index = require('../index');
const expect = require('chai').expect;

describe('index', function () {

  it('should export NIP', function () {
    expect(index.NIP).to.exist;
  });

  it('should export PESEL', function () {
    expect(index.PESEL).to.exist;
  });

  it('should export REGON', function () {
    expect(index.REGON).to.exist;
  });

});
