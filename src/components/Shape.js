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
      <p>
        {text}
      </p>
    </div>
  );
}

Shape.propTypes = {
  text: PropTypes.string,
  textColor: PropTypes.string,
  backgroundColor: PropTypes.string,
};

export default Shape;
