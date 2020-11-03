// const assertEqual = require('./assertEqual')

const findKey = function(object, callback) {
  let key;
  for (const twinkles in object) {
    if (callback(object[twinkles])) {
      key = twinkles;
      break;
    }
  }
  return key;
};

module.exports = findKey;

// TEST CODE
/* assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), 'noma');

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 6), undefined); */