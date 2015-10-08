var chai = require("chai");
var expect = require('chai').expect;
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

var race = require("../dist/race");

global.fetch = function(time) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve({ url: time });
        }, time);
    });
};

describe('race', function() {
  it('should respond with the fastest endpoint', function() {
    return expect(race([10, 20, 30])).to.eventually.equal(10);
  });
});
