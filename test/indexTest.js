const _ = require('../index');
const assert = require('chai').assert;

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(_.head([1, 2, 3]), 1);
  });

  it("returns [] for [1]", () => {
    assert.deepEqual(_.middle([1]), []);
  });

});