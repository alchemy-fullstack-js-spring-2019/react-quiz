import React from 'react';
import PropTypes from 'prop-types';

export default function TextSelector({ text }) {
  const handleTextChange = ({ target }) => {
    text = target.value;
  };
  return (
        <>
            <form>
              <input type="text" onChange={handleTextChange}></input>
            </form>
        </>
  );
}
TextSelector.propTypes = {
  text: PropTypes.string.isRequired
};
