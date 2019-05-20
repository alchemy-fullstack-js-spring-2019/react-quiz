import React from 'react';
import PropTypes from 'prop-types';

function Shape({ text, textColor, backgroundColor }) {
  return (
    <div style={{
      height: '200px',
      width: '600px',
      backgroundColor: backgroundColor,
      color: textColor
    }}>
      <pre style={{ color: textColor }}>Input text: {text}</pre>
    </div>
  );
}

Shape.propTypes = {
  text: PropTypes.string,
  textColor: PropTypes.string,
  backgroundColor: PropTypes.string,
};

export default Shape;
