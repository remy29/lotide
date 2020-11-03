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

module.exports = flatten;

// console.log(flatten([1, 2, [3, 4], 5, [6], 7, 8, 9, [1, 2, 6]]));