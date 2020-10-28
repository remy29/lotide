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

const without = function (array, removed) {
  const cloner = function (array) {
    let clone = [];
    for (const data of array) {
      clone.push(data);
    }
    return clone;
  };
  let clone = cloner(array);
  for (let i = clone.length - 1; i >= 0; i--) {
    for (let z = 0; z < removed.length; z++) {
      if (array[i] === removed[z]) {
        clone.splice(i, 1);
      }
    }
  }
  return clone;
};


