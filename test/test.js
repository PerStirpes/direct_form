var assert = require('assert')

describe('handleFormSubmission', () => {
  it('should not send a POST request for severity High', function() {
    assert.equal('High', handleFormSubmission(event))
  })
  it('should send a POST request for severity Low', function() {
    assert.equal('Low', handleFormSubmission(event))
  })
  it('should send a POST request for severity Medium', function() {
    assert.equal('Medium', handleFormSubmission(event))
  })
})

describe('Array', function() {
  describe('#includes()', function() {
    it('should return 1 when the value is present', function() {
      assert.equal(11, [1, 2, 3].includes(2))
    })
  })
})
