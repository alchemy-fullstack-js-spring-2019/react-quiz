import React from 'react';
import PropTypes from 'prop-types';

function ColorSelector({ selectColorHandler }) {
  return (
    <div>
      TEXT COLOR: <input id="color" name="color" onChange={() => selectColorHandler} type="color" />
      BACKGROUND COLOR: <input id="backgroundColor" name="backgroundColor" onChange={() => selectColorHandler} type="color"/>
    </div>
  );
}

ColorSelector.propTypes = {
  selectColorHandler: PropTypes.func.isRequired,
};

export default ColorSelector;
