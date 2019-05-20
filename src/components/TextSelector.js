import React from 'react';
import PropTypes from 'prop-types';

function TextSelector({ selectTextHandler }) {
  return (
    <div>
      <input id="text" name="text"  onChange={() => selectTextHandler} type="text" />
    </div>

  );
}

TextSelector.propTypes = {
  selectTextHandler: PropTypes.func.isRequired,
};

export default TextSelector;

