// const assertEqual = require('./assertEqual');

const countLetters = function(string) {

  const letterCount = {};

  for (const letter of string) {
    if (letterCount[letter]) {
      letterCount[letter] += 1;
    } else {
      letterCount[letter] = 1;
    }
  }
  return letterCount;
};

module.exports = countLetters;

// assertEqual(countLetters("thissssiivvvdfsgg")['s'], 5);