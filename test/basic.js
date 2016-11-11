var Challenge = require('../index.js');

var assert = require('assert');
var sinon = require('sinon');

describe('Generate a challenge', function() {
  var challenge;
  var description;
  beforeEach(function() {
    challenge = new Challenge();
    description = challenge.getDescription();
  });
  describe('Check the solution', function() {
    var solution;
    beforeEach(function() {
      solution = challenge.getSolution();
    });
    it('should check its own solution positively', function() {
      assert.equal(Challenge.check(description, solution), true);
    });
    it('should check wrong solution negatively', function() {
      assert.equal(Challenge.check(description, 'wrong'), false);
    });
    it('should check wrong description.name negatively', function() {
      assert.equal(Challenge.check({
        name: 'wrong',
        hash: description.hash,
      }, solution), false);
    });
    it('should check wrong description.hash negatively', function() {
      assert.equal(Challenge.check({
        name: description.name,
        hash: 'wrong',
      }, solution), false);
    });
  });
});
