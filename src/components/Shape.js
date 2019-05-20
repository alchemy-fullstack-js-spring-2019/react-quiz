import React from 'react';
import PropTypes from 'prop-types';

function Shape({ text, fontColor, backgroundColor }) {
  const divStyle = {
    width: '100px',
    height: '100px',
    backgroundColor
  };

  const pStyle = {
    color: fontColor
  };
  
  return (
    <>
      <p style={pStyle}>{text}</p>
      <div style={divStyle}></div>
    </>
  );
}

Shape.propTypes = {
  text: PropTypes.string.isRequired,
  fontColor: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired
};

export default Shape;
