const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

assertArraysEqual(middle([133, 4, 10000, 17, 8, 99, 12, 18, 1888]), [8], true);
assertArraysEqual(middle([4, 10000, 17, 8, 99, 12, 18, 1888]), [8, 99], true);