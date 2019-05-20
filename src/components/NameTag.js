import React, { PureComponent } from 'react';
import TextSelector from './TextSelector';
import Shape from './Shape';
import ColorSelector from './ColorSelector';

export default class NameTag extends PureComponent {
  state = {
    text: '',
    color: '#000000',
    backgroundColor: '#FF0000'
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { text, color, backgroundColor } = this.state;
    return (
      <>
        <TextSelector
          text={text}
          handleChange={this.handleChange}
        />
        <ColorSelector
          color={color}
          backgroundColor={backgroundColor}
          handleChange={this.handleChange}
        />
        <Shape
          text={text}
          color={color}
          backgroundColor={backgroundColor}
        />
      </>
    );
  }
}
