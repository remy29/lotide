const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

assertEqual(eqArrays([1,2,3], [1,2,3]), true);
assertEqual(eqArrays([1,2,3], [1,2,4]), false);
assertEqual(eqArrays(['a', 'b', 'c'], ['a', 'b', 'c']), true);
assertEqual(eqArrays(['a', 'b', 'c'], ['a', 'b', 'd']), false);