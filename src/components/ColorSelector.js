import React from 'react';
import PropTypes from 'prop-types';

function ColorSelector({ textColorHandler, blockColorHandler }) {
  return (
    <>
      <input name="textColor" type="color" onChange={() => textColorHandler()} />
      <input name="textColor" type="color" onChange={() => blockColorHandler()} />
    </>
  );
}

ColorSelector.propTypes = {
  textColorHandler: PropTypes.func.isRequired,
  blockColorHandler: PropTypes.func.isRequired
}

export default ColorSelector;
