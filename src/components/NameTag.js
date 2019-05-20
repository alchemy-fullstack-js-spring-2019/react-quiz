import React, { PureComponent } from 'react';
import ColorSelector from './ColorSelector';
import TextSelector from './TextSelector';
import Shape from './Shape';

export default class NameTag extends PureComponent {
  state = {
    text: '',
    color: '',
    backgroundColor: ''
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    return (
      <>
        <TextSelector change={this.handleChange} text={this.state.text} />
        <ColorSelector change={this.handleChange} color={this.state.color} backgroundColor={this.state.backgroundColor} />
        <hr />
        <Shape text={this.state.text} color={this.state.color} backgroundColor={this.state.backgroundColor}/>
      </>
    );
  }
}
