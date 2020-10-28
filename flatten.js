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

const flatten = function (array) {
  newArr = [];
  for (const data of array) {
    if (!Array.isArray(data)) {
      newArr.push(data);
    } else {
      for (const inner of data) {
        newArr.push(inner);
      }
    }
  }
  return newArr;
};

console.log(flatten([1, 2, [3, 4], 5, [6], 7, 8, 9, [1, 2, 6]]));