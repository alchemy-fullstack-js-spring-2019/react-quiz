import React from 'react';
import PropTypes from 'prop-types';

export default function ColorSelector({ fontColor, handleChange }) {
  return (
    <input name="fontColor" type="color" value={fontColor} onChange={handleChange} />
  );
}

ColorSelector.propTypes = {
  fontColor: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};
