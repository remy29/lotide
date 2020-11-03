const eqArrays = require('./eqArrays');

// const assertEqual = require('./assertEqual')

const eqObjects = function(object1, object2) {
  const object1Keys = Object.keys(object1);

  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (const keys of object1Keys) {
    if (Array.isArray(object1[keys]) && Array.isArray(object2[keys]) && !eqArrays(object1[keys], object2[keys])) {
      return false;
    } else if (object1[keys] !== object2[keys] && !eqArrays(object1[keys], object2[keys])) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;

// TEST CODE
/* const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);
const abc = { a: "1", b: "3"};
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);
 */
