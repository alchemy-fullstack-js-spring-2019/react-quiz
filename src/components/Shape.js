import React from 'react';
import PropTypes from 'prop-types';

function Shape({ text, color, backgroundColor }) {


  const divStyles = {
    backgroundColor: backgroundColor,
    width: '100px',
    height: '100px'
  };

  const textStyles = {
    color: color
  };

  return (
    <div style={divStyles}>
      <p style={textStyles}>{text}</p>
    </div>
  );

}

Shape.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired
};

export default Shape;
