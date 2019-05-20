import React from 'react';
import PropTypes from 'prop-types';

function TextSelector({ selectTextHandler, text }) {
  return (
    <div>
      <input id="text" name="text" value={text} onChange={() => selectTextHandler} type="text" />
    </div>

  );
}

TextSelector.propTypes = {
  selectTextHandler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};

export default TextSelector;

