import React from 'react';
import PropTypes from 'prop-types';

function ColorSelector({ color, backgroundColor }) {
  
  return (
    <>
      <input name="color" type="color" value={color}></input>
      <input name="color" type="color" value={backgroundColor}></input>
    </>
  );
}

ColorSelector.propTypes = {
  color: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired
};

export default ColorSelector;
