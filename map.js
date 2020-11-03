//const assertArraysEqual = require('./assertArraysEqual');

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

// TEST CODE
/* const words = ["ground", "control", "to", "major", "tom"];
const numbers = [1, 2, 3, 4, 5, 6];
const booleans = [true, true, false, true, false, false];

assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(map(numbers, number => number * 2), [2, 4, 6, 8, 10, 12]);
assertArraysEqual(map(booleans, (boolean) => {
  if (boolean) {
    return false;
  } else {
    return true;
  }
}), [false, false, true, false, true, true]); */