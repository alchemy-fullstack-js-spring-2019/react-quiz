import React from 'react';
import PropTypes from 'prop-types';

export default function Shape({ color, text, backgroundColor }) {
  return (
    <span>
      <div style={{ color: color }}>{text}</div>
      <div style={{ backgroundColor: backgroundColor, width: '100px', height: '100px'  }}></div>
    </span>
  );
}

Shape.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired
};
