const tail = require('../tail');
const assert = require('chai').assert;

describe("#head", () => {
  it("returns [3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });

  it("returns ['c'] for ['a', 'b', 'c']", () => {
    assert.deepEqual(tail(['a', 'b', 'c']), ['b', 'c']); 
  });

});

