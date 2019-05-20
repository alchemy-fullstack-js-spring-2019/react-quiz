import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

function ColorSelector({ fontColor, backgroundColor, onChange }) {
  return (
    <>
      <h1>Text Color</h1>
      <input name="fontColor" color={fontColor} type="color" onChange={onChange} />
      <h1>Background Color</h1>
      <input name="backgroundColor" backgroundColor={backgroundColor} type="color" onChange={onChange} />
    </>
  );
}

ColorSelector.propTypes = {
  fontColor: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  backgroundColor: PropTypes.string.isRequired
};

export default ColorSelector;
