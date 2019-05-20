import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import TextSelector from './TextSelector';

// container componenet
//contains state
//uses other componenets


export default class NameTag extends PureComponent {
  
  state = {
    text: 'starter text'
  }

  render() {
    const { text } = this.text

    return (
      <TextSelector />
    )

  }

}

