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

const assertArraysEqual = function(array1, array2) {
  const result = eqArrays(array1, array2);
  if (result) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
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
}), [false, false, true, false, true, true]);