import React from 'react';
import PropTypes from 'prop-types';

export default function TextSelector({ change, text }) {
  return (
    <input type="text" value={text} name="text" onChange={change} />
  );
}

TextSelector.propTypes = {
  change: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};
