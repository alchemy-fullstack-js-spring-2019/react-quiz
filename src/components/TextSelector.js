import React from 'react';
import PropTypes from 'prop-types';

function TextSelector({ text }) {
  return (
    <div>
      <input name="text" value={text} onChange={this.handleChange}></input>
    </div>
  )
}

TextSelector.propTypes = {
  text: PropTypes.string.isRequired
};

export default TextSelector
