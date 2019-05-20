
import React from 'react';
import PropTypes from 'prop-types';

function Shape({ text, color, backgroundColor }) {
  const divStyle = {
    width: '100px', 
    height: '100px'
  };

  return (
  <div style={divStyle}>
    <p style={{ color: color, backgroundColor: backgroundColor }}>{text}</p>
  </div>
  );
}

Shape.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired
};

export default Shape;

