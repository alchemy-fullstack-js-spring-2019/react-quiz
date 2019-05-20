import React from 'react';
import PropTypes from 'prop-types';

export default function Shape({ text, color, backgroundColor }){

  return (
  <>
  <p style={{ fontColor: color }}>text:{text}</p>
  <div style={{ width:'100px', height:'100px', backgroundColor:backgroundColor }}></div>
  </>
  );

}

Shape.propTypes = {
  text:PropTypes.string.isRequired,
  color:PropTypes.string.isRequired,
  backgroundColor:PropTypes.string.isRequired

}
;
