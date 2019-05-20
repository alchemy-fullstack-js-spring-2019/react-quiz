import React from 'react';
import PropTypes from 'prop-types';

function Shape({ text, color, backgroundColor }) {
  return(
    <section>
      <p style={{ color:{color} }}>{text}</p>
      <div style={{ width: '100px', height: '100px', backgroundColor:{backgroundColor}}}></div>
    </section>
  )
}

Shape.proptypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired
}
export default Shape;
