
import React, { PureComponent } from 'react';
import Shape from '../components/Shape';
import TextSelector from '../components/TextSelector';
import ColorSelector from '../components/ColorSelector';

export default class NameTag extends PureComponent {
  state = {
    color: '',
    backgroundColor: '',
    text: 'default text'
  }

  selectColor = color => {
    this.setState({ color });
  }
  selectBackgroundColor = backgroundColor => {
    this.setState({ backgroundColor });
  }
  selectText = text => {
    this.setState({ text });
  }

  render() {
    const { color, backgroundColor, text } = this.state;

    return (
      <>
      <TextSelector selectTextHandler={this.selectText}/>
      <ColorSelector selectColorHandler={this.selectColor}/>
      <Shape color={color} text={text} backgroundColor={backgroundColor}/>
      </>
    );
  }
}
