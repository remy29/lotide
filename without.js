//const assertArraysEqual = require('./assertArraysEqual');

const without = function(array, removed) {
  let clone = [...array];
  for (let i = clone.length - 1; i >= 0; i--) {
    for (let z = 0; z < removed.length; z++) {
      if (array[i] === removed[z]) {
        clone.splice(i, 1);
      }
    }
  }
  return clone;
};

module.exports = without;

// TEST CODE
/* const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"]));
assertArraysEqual(words, ["hello", "world", "lighthouse"]); */
