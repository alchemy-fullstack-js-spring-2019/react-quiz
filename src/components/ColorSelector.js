import React from 'react';
import PropTypes from 'prop-types';

function ColorSelector({ textColorHandler, bgColorHandler }) {
  return (
    <>
      <input name="color" type="color" onChange={() => textColorHandler()} />
      <input name="backgroundColor" type="color" onChange={() => bgColorHandler()} />
    </>
  );
}

ColorSelector.propTypes = {
  textColorHandler: PropTypes.func.isRequired,
  bgColorHandler: PropTypes.func.isRequired
}

export default ColorSelector;
