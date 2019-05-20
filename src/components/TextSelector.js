import React from 'react';
import PropTypes from 'prop-types';

export default function TextSelector({ text, selectText }) {
  return (
    <input name="text" value={text} onChange={selectText} />
  );
}
