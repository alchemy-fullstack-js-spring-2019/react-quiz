import React from 'react';
import PropTypes from 'prop-types';

function Shape({ text, color, backgroundColor }) {
  return (
    <section>
      <input name="color" type="color" value={color}>{color}</input>
      <div type="text" name="text" value={text}>{text}</div>
      <div name="backgroundColor" type="color" value={backgroundColor}>{backgroundColor}</div>
    </section>
  );
}
Shape.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired
};
