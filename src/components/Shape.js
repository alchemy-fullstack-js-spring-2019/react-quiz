import React from 'react';
import PropTypes from 'prop-types';
import ColorSelector from './ColorSelector';
import TextSelector from './TextSelector';

function Shape({ text, color, backgroundColor }) {
  return (
    <div style={{ width: '100px', height: '100px' }}>
      <ColorSelector />
      <TextSelector />
    </div>
  );
}

Shape.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired
};

export default Shape;
