import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

function Shape({ text, color, backgroundColor }) {
  const shapeStyle = {
    width: '100px',
    height: '100px'
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
