import React from 'react';
import PropTypes from 'prop-types';
//import styles?

function TextSelector({ inputTextHandler }) {
  return(
    <>
      <input name='text' onChange={() => inputTextHandler()} />
    </>
  )
}

TextSelector.propTypes = {
  inputTextHandler: PropTypes.func.isRequired
}

export default TextSelector;