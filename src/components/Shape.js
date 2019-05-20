import React from 'react';
import PropTypes from 'prop-types';
import styles from './Shape.css';

function Shape({ text, color, backgroundColor }) {
  return (
    <div className={styles.Shape} style={{ backgroundColor: backgroundColor }}>
      <h1 style={{ color }}>{text}</h1>
    </div>
  );
}

Shape.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired
};

export default Shape;
