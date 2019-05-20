import React from 'react';
import PropTypes from 'prop-types';

function Shape({ text, color, backgroundColor }) {
  const shapeStyle = {
    width: '100px',
    height: '100px',
    backgroundColor: backgroundColor,
    color: color
  };

  return (
    <div style={shapeStyle}>
      {text}
    </div>
  );
}

Shape.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired
};

export default Shape;
