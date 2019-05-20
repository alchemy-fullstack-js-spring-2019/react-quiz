import React from 'react';
import PropTypes from 'prop-types';
// import TextSelector from './TextSelector';

function ColorSelector({ color }) {
  return (
    <section>
      <div className={ColorSelector} style={{ color }}>{color}</div>;
      <div className={ColorSelector} style={{ color }}>{ color }</div>;
    </section>
  );
}

ColorSelector.propTypes = {
  color: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired
}

export default ColorSelector;
