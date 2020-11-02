const middle = function(array) {
  const newArr = [];
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 0) {
    let i = array.length / 2;
    let z = (array.length / 2) - 1;
    newArr.push(array[z], array[i]);
  } else {
    let y = Math.floor(array.length / 2);
    newArr.push(array[y]);
  }
  return newArr;
};

module.exports = middle;