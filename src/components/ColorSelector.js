import React from 'react';
import PropTypes from 'prop-types';

function ColorSelector({ color, background, handleChange }) {
  return (
    <>
      <div>
        <label>
          Text Color:{ ' ' }
          <input
            type="color"
            name="color"
            value={ color }
            onChange={ handleChange }
          />
        </label>
      </div>
      <div>
        <label>
          Background Color:{ ' ' }
          <input
            type="color"
            name="background"
            value={ background }
            onChange={ handleChange }
          />
        </label>
      </div>
    </>
  );
}

ColorSelector.propTypes = {
  color: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default ColorSelector;
