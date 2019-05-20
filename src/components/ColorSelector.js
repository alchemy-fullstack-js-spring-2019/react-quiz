import React from 'react';
import PropTypes from 'prop-types';

function ColorSelector({ selectColorHandler, color, backgroundColor }) {
  return (
    <div>
      <input id="color" name="color" value={color} onChange={() => selectColorHandler} type="color">Text Color</input>
      <input id="backgroundColor" name="backgroundColor" value={backgroundColor} onChange={() => selectColorHandler} type="color">Background Color</input>
    </div>
  );
}

ColorSelector.propTypes = {
  selectColorHandler: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired
};

export default ColorSelector;
