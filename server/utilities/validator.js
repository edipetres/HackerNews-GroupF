/**
 * Validates incomingPayload properties against expectedPayload properties.
 * Checks that property names in requiredFields are present in incomingPayload.
 * Checks if fields can be left blank or not.
 *
 * @param {Object}       expectedPayload         Defines the expected type of parameters.
 * @param {Object}       incomingPayload         Object to be validated.
 * @param {string[]}     requiredFields           Array of required property names.
 * @param {boolean}      blank                   Whether fields can be blank or not.
 * 
 * @return {type}        result                  Object with success boolean and payload or errorMessage.
 */

module.exports = (expectedPayload = {}, incomingPayload = {}, requiredFields = [], blank = true) => {
  
  // check that required properties exist
  for (let i = 0; i < requiredFields.length; i++) {
    const requiredProperty = requiredFields[i];
    
    if (!incomingPayload.hasOwnProperty(requiredProperty)) {
      return {
        success: false,
        errorMessage: `Required property "${requiredProperty}" is missing.`
      }
    }
  }
  
  // check that properties have the expected types
  const expectedPayloadProps = Object.getOwnPropertyNames(expectedPayload)
  for (let i = 0; i < expectedPayloadProps.length; i++) {
    const expectedPropertyName = expectedPayloadProps[i];
    const expectedPropertyValue = expectedPayload[expectedPropertyName]
    // const incomingPropertyName = 
    const incomingPropertyValue = incomingPayload[expectedPropertyName]
    
    if (typeof incomingPropertyValue !== typeof expectedPropertyValue) {
      return {
        success: false,
        errorMessage: `Expecting type of "${expectedPropertyName}" to be ${typeof expectedPropertyValue} but got ${typeof incomingPropertyValue}.`
      }
    }
  }

  // check for blank properties
  if (!blank) {
    for (let i = 0; i < requiredFields.length; i++) {
      const incomingPropertyName = requiredFields[i];
      
      const incomingPropertyValue = incomingPayload[incomingPropertyName]
      if (incomingPropertyValue === '' || typeof incomingPropertyValue === undefined) {
        return {
          success: false,
          errorMessage: `${incomingPropertyName} is blank.`
        }
      }
    }
  }

  return {
    success: true,
    payload: incomingPayload
  }
}