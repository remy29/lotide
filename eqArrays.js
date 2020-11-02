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

module.exports = eqArrays;

