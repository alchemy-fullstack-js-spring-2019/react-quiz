
import React from 'react';
import PropTypes from 'prop-types';

export default function TextInputForm({ text, handleTextChange, handleSubmit }){

  

  return (
    <form onSubmit={handleSubmit}>
      <input handleSubmit={handleSubmit} onChange={handleTextChange} value={text}></input>
      <button>submit</button> 
    </form>
  );
}

TextInputForm.propTypes = {
  text: PropTypes.string,
  handleTextChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}
;
