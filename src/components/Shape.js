import React from 'react';
import PropTypes from 'prop-types';

export default function Shape({ text, textColor, blockColor }) {

  const textStyle = {
    color: { textColor }
  };

  const divStyle = {
    backgroundImage: { blockColor },
    width: '100px',
    height: '100px'
  };

  return (
    <>
      <p style={textStyle}>{text}</p>,
      <div style={divStyle}></div>
    </>
  );
}

Shape.propTypes = {
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  blockColor: PropTypes.string.isRequired
};

