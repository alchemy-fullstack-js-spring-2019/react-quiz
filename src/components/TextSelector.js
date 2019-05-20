import React from 'react';
import PropTypes from 'prop-types';

function TextSelector({ text, handleChange }) {
  return (
    <section>
      <span>Text Input: </span>
      <input type="text" name="text" value={text} onChange={handleChange} />
    </section>
  );
}

TextSelector.propTypes = {
  text: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default TextSelector;
