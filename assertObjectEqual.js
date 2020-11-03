const eqObjects = require('./eqObjects');

const assertObjectEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  const result = eqObjects(actual, expected);
  if (result) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectEqual;


// TEST CODE
/* const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectEqual(ab, ba) */