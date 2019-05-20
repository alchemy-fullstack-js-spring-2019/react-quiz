import React, { PureComponent } from 'react';
import TextSelector from '../components/TextSelector';
import ColorSelector from '../components/ColorSelector';
import Shape from '../components/Shape';

export default class NameTag extends PureComponent {
  sate = {
    text: '',
    backgroundColor: '',
    textColor: ''
  }

  selectText = text => {
    this.setState({ text });
  }
  selectBackgroundColor = backgroundColor => {
    this.setState({ backgroundColor });
  }
  selectTextColor = textColor => {
    this.setState({ textColor });
  }

  render() {
    const {
      text,
      backgroundColor,
      // textColor
    } = this.sate;

    return (
      <>
        <TextSelector handleChange={this.selectText} />
        <ColorSelector handleChange={this.selectBackgroundColor} />
        <Shape text={text} backgroundColor={backgroundColor} />
      </>
    );
  }

}
