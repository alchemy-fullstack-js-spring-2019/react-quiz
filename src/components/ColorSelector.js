import React from 'react';
import PropTypes from 'prop-types';

function ColorSelector({ fontColor, backgroundColor, handleChange }) {
  return (
    <>
      <input type="color" name="fontColor" value={fontColor} onChange={handleChange} />
      <input type="color" name="backgroundColor" value={backgroundColor} onChange={handleChange} />
    </>
  );
}

ColorSelector.propTypes = {
  fontColor: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default ColorSelector;
