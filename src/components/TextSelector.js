import React from 'react';
import PropTypes from 'prop-types';

function TextSelector({ text, handleChange }) {
  return (
    <input
      type="text"
      name="text"
      value={ text }
      onInput={ handleChange }
    />
  );
}

TextSelector.propTypes = {
  text: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default TextSelector;
