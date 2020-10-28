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

const letterPosition = function(string) {

  const result = {};

  for (let i = 0; i < string.length; i ++) {
    if (Number(string[i]) !== 0) {
      if (result[string[i]]) {
        result[string[i]].push(i);
      } else {
        result[string[i]] = [i];
      }
    }
  }
  return result;

};

console.log(letterPosition('this is a string'));
assertArraysEqual(letterPosition("hello")['e'], [1]);