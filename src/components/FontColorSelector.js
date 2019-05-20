import React from 'react';
import PropTypes from 'prop-types';

export default function FontColorOptions({ handleFontColorChange }){
  return (
    <>
    <h2>Select color for box/text below</h2>
    <select onChange={handleFontColorChange}>
      <option value='green'>green</option>
      <option value='blue'>blue</option>
    </select>
    </>
  );
}

FontColorOptions.propTypes = {
  handleColorChange: PropTypes.func.isRequired
}
;
