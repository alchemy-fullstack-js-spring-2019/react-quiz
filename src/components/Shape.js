import React from 'react';
import PropTypes from 'prop-types';

function Shape({ name, color, backgroundColor }) {
  const textStyle = {
    color: color,
    width: '100px',
    height: '100px',
    backgroundColor: backgroundColor
  };

  return (
    <div style={textStyle}>
      <h1>{name}</h1>
    </div>
  );
}

Shape.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired
};

export default Shape;

