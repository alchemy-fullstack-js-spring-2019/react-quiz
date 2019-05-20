import React from 'react';
import PropTypes from 'prop-types';

export default function ColorSelector({ change, color, backgroundColor }) {
  return (
    <>
      <p>Text Color: </p>
      <input type="color" value={color} name="color" onChange={change} />
      <p>Background Color: </p>
      <input type="color" value={backgroundColor} name="backgroundColor" onChange={change} />
    </>
  );
}

ColorSelector.propTypes = {
  change: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired
};
