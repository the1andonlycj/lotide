const tail = require('../tail');
const assertArraysEqual = require('../assertArraysEqual');

//Test some words
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertArraysEqual(["Lighthouse", "Labs"], ["Lighthouse", "Labs"]);

//Test some nums
const nums = [1, 2, 3, 4];
tail(nums);
assertArraysEqual([2, 3, 4], [2, 3, 4]);