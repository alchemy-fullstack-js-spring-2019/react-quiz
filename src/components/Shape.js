import React from 'react';
import PropTypes from 'prop-types';

function Shape({ text, fontColor, backgroundColor }) {
  const shapeStyle = {
    width: '100px',
    height: '100px',
    backgroundColor: backgroundColor,
    fontColor: color
  };

  return (
    <div style={shapeStyle}>
      {text}
    </div>
  );
}

Shape.propTypes = {
  text: PropTypes.string.isRequired,
  fontColor: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired
};

export default Shape;
