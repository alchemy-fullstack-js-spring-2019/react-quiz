import React from 'react';
import PropTypes from 'prop-types';

function ColorSelector({ textColorHandler, bgColorHandler }) {
  return (
    <>
      <input name="textColor" type="color" onChange={() => textColorHandler()} />
      <input name="textColor" type="color" onChange={() => bgColorHandler()} />
    </>
  );
}

ColorSelector.propTypes = {
  textColorHandler: PropTypes.func.isRequired,
  blockColorHandler: PropTypes.func.isRequired
}

export default ColorSelector;
