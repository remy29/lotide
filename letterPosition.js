

//const assertArraysEqual = require('./assertArraysEqual');

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

module.exports = letterPosition;

//TEST CODE
/* console.log(letterPosition('this is a string'));
assertArraysEqual(letterPosition("hello")['e'], [1]); */