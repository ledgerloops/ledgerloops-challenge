var randomstring = require('randomstring');
var hasha = require('hasha');

function hash(secret) {
  return hasha(secret, { algorithm: 'sha256' });
}

function Challenge() {
  this._secret = randomstring.generate(40);
  this._hash = hash(this._secret);
}

Challenge.prototype.getDescription = function() {
  return {
    name: 'sha256',
    hash: this._hash,
  };
};

Challenge.prototype.getSolution = function() {
  return this._secret;
};

Challenge.check = function(description, solution) {
  var correctHash = hash(solution);
  return (description.name === 'sha256' && description.hash === correctHash);
};

module.exports = Challenge;
