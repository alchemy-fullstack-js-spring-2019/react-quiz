import React from 'react';
import PropTypes from 'prop-types';

function TextSelector({ text }) {
  return (
    <>
      <input name="text" value={text}></input>
    </>
  )
}

TextSelector.propTypes = {
  text: PropTypes.string.isRequired
};

export default TextSelector
