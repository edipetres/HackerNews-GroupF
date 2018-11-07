
exports.extractObject = ( obj, keys ) => {
  const returnObj = { };
  keys.forEach( key => { returnObj[ key ] = obj[ key ]; } );

  return returnObj;
};

exports.validateId = (id) => {
  if (!id) {
    return {
      success: false,
      errorMessage: 'Missing id parameter'
    }
  }
  
  id = parseInt(id)
  if (isNaN(id)) {
    return {
      success: false, 
      errorMessage: 'Must pass a valid integer as id. Got ' + typeof id
    }
  }

  return {
    success: true
  }
}