const eqArrays = function(array1, array2) {
  const pusher = function(array) {
    let string = "";
    for (let data of array) {
      string += data.toString();
    }
    return string;
  };
  
  let val1 = pusher(array1);
  let val2 = pusher(array2);

  if (val1 === val2) {
    return true;
  } else {
    return false;
  }
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);
const abc = { a: "1", b: "3"};
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false
//step 1: is the object long enough in the first place if yes next step
// step 2: is the value the same ? - first check data type - if primitive 1 branch - if object 1 branch
// step 3a primitive branch
// steo 3b object branch