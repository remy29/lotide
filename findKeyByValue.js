//const assertEqual = require('./assertEqual')

const findKeyByValue = function(object, value) {
  for (const genres in object) {
    let shows = object[genres].toLowerCase();
    if (shows === value.toLowerCase()) {
      return genres;
    }
  }
};

module.exports = findKeyByValue;

// TEST CODE
/* const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const aListOfFood = {
  burgers: "Fatty",
  salad: "Healthy",
  ramen: "Delicious"
};

console.log(findKeyByValue(bestTVShowsByGenre, "The Expanse"));
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(aListOfFood, "delicious"), "ramen"); */