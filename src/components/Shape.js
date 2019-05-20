import React from 'react';
import PropTypes from 'prop-types';
import styles from 'Shape.css';
import TextSelector from './TextSelector';

function Shape({ text, color, backgroundColor }) {
  return (
    <div className={styles.Shape} style={{ backgroundColor: backgroundColor }}>
      <TextSelector text={text} style={color}/>
    </div>
  );
}

Shape.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired
};

export default Shape;
