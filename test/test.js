var assert = require('assert');

describe('Array', function() {
  describe('#includes()', function() {
    it('should return 1 when the value is present', function() {
      assert.equal(11, [1,2,3].includes(2));
    });
  });
});