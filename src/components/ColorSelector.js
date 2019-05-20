import React from 'react';
import PropTypes from 'prop-types';

function ColorSelector({ fontColor, backgroundColor, handleChange }) {
  return (
    <>
      <section>
        <span>Font Color: </span>
        <input type="color" name="fontColor" value={fontColor} onChange={handleChange} />
      </section>
      <section>
        <span> Background Color</span>
        <input type="color" name="backgroundColor" value={backgroundColor} onChange={handleChange} />
      </section>
    </>
  );
}

ColorSelector.propTypes = {
  fontColor: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default ColorSelector;
