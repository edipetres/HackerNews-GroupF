const assert = require('assert')
const validator = require('./validator')

const testHappyPath = () => {
  const expectedPayload = {
    mystring: '',
    mynumber: 1,
  }
  const incomingPayload = {
    mystring: 'dsa',
    mynumber: -1,
    // somethingExtra: 123
  }
  
  let result = validator(expectedPayload, incomingPayload, ['mystring', 'mynumber'], false)
  assert.strictEqual(result.success, true)  
}

testHappyPath()
