import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

function Shape({ text, color, backgroundColor }) {
  return (
    <section >
      <input name="color" type="color" value={color} onChange={this.changeHandler} />
    </section>
  );
}
