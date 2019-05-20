import React from 'react';
import PropTypes from 'prop-types';

export default function ColorOptions({ handleColorChange }){
  return (
    <>
    <h2>Select color for box/text below</h2>
    <select onChange={handleColorChange}>
      <option value='green'>green</option>
      <option value='blue'>blue</option>
    </select>
    </>
  );
}

ColorOptions.propTypes = {
  handleColorChange: PropTypes.func.isRequired
}
;
