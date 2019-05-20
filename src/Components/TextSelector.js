import React from 'react';
import PropTypes from 'prop-types';

function TextSelector({ name }) {
    
  return (
    <input name="name" type="text" value={name} onChange={this.handleChange} />
  );
}
