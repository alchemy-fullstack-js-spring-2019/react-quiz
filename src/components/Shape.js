import React from 'react';
import PropTypes from 'prop-types';

export default function Shape({ text, color, backgroundColor }) {
  return (
    <>
    <h2>Your text: </h2>
    <div style={{ background: backgroundColor, border: '2px solid black', width: '400px', height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <p style={{ color: color, fontSize: '80px' }}>{text}</p>
    </div>
    </>
  );
}

Shape.propTypes = {
  text: PropTypes.string.isRequired,  
  color: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired
};
