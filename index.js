const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const assertObjectEqual = require('./assertObjectEqual');
const countLetters = require('./countLetters');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const findKey = require('./findKey');
const flatten = require('./flatten');
const letterPosition = require('./letterPosition');
const map = require('./map');
const countOnly = require('./countOnly');
const findKeyByValue = require('./findKeyByValue');
const takeUntil = require('./takeUntil');
const without = require('./without');

module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  assertArraysEqual: assertArraysEqual,
  assertEqual: assertEqual,
  assertObjectEqual: assertObjectEqual,
  countLetters: countLetters,
  eqArrays: eqArrays,
  eqObjects: eqObjects,
  findKey: findKey,
  flatten: flatten,
  letterPosition: letterPosition,
  map: map,
  countOnly: countOnly,
  findKeyByValue: findKeyByValue,
  takeUntil: takeUntil,
  without: without
};