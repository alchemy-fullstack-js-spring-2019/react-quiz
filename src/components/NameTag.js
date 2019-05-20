//container component
//contains state
//uses the other components
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ColorSelector from './ColorSelector';
import TextSelector from './TextSelector';
import Shape from './Shape';

export default class NameTag extends PureComponent {
  //this is where I get confused with modularization. How do I grab the text that's written in the text selector and store it in this state in order to pass it to shape? 
  //can do if all in the same component but getting confused when separating them
  state = {
    text: '',
    color: '',
    backgroundColor: ''
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  }

  render() {
    return (
      <>
        <TextSelector />
        <ColorSelector />
        <Shape color={this.state.color} backgroundColor={this.state.backgroundColor} text={this.state.text} />
      </>
    );
  }
}

