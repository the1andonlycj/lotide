const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

assertEqual(eqArrays([1, 2, 8] , [1, 2, 3]), false); 
assertEqual(eqArrays([1, 2, 3] , [1, 2, 3]), true); 
assertEqual(eqArrays([1, 'dog', 8] , [1, 'dog', 8]), true); 
assertEqual(eqArrays([1, 'dog', 8] , [1, 'dog', 000]), true); 