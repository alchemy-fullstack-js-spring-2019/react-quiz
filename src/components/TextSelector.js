import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

function TextSelector({ text, onChange }) {
  return (
    <>
      <h2>Text</h2>
      <input name="text" text={text} type="text" onChange={onChange} />
    </>
  );
}

TextSelector.propTypes = {
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default TextSelector;
