//Index.js

const head = require('./head');

const tail = require('./tail');

const middle = require('./middle');

const assertArraysEqual = require('./assertArraysEqual');

const eqArrays = require('./eqArrays');

const assertEqual = require('./assertEqual');

module.exports = {
  head: head,
  tail: tail,
  middle: middle,
  eqArrays: eqArrays,
  assertArraysEqual: assertArraysEqual,
  assertEqual: assertEqual
};