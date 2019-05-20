import React from 'react';
import PropTypes from 'prop-types';

export default function Shape({ text, color, backgroundColor }) {
  return (
    <div style={{ background: backgroundColor, border: '2px solid black', width: '400px', height: '200px' }}>
      <p style={{ color: color }}>{text}</p>
    </div>
  );
}

Shape.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired
};
