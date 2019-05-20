import React from 'react';
import PropTypes from 'prop-types';

function Shape({ text, color, background }) {
  const styles = {
    color,
    background,
    'box-sizing': 'border-box',
    display: 'inline-block',
    margin: '1em',
    padding: '1em 2em',
    'max-width': '90vw',
    'font-size': '2rem',
    'overflow-wrap': 'break-word',
    'font-family': 'Verdana, sans-serif',
    'text-align': 'center'
  };
  return (
    <div style={ styles }>
      <strong>{ text }</strong>
    </div>
  );
}

Shape.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired
};

export default Shape;
