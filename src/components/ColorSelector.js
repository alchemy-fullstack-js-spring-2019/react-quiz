import React from 'react';
import PropTypes from 'prop-types';
import TextSelector from './TextSelector';

function ColorSelector({ color }) {
  return (
    <section>
      <div className={ColorSelector} style={{ backgroundColor: color }}>{color}</div>;
    </section>
  );
}
