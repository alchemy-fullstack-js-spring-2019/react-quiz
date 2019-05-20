import React, { PureComponent } from 'react';
import TextSelector from '../components/TextSelector';
import ColorSelector from '../components/ColorSelector';
import Shape from '../components/Shape';

export default class NameTag extends PureComponent {
  state = {
    fontColor: '#000000',
    backgroundColor: '#0433ff',
    text: 'hi'
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { fontColor, backgroundColor, text } = this.state;

    const textSelectorProps = { text, handleChange: this.handleChange };
    const colorSelectorProps = { fontColor, backgroundColor, handleChange: this.handleChange };
    const shapeProps = { text, fontColor, backgroundColor };
    return (
      <>
        <TextSelector {...textSelectorProps} />
        <ColorSelector {...colorSelectorProps} />
        <Shape {...shapeProps} />
      </>
    );
  }

}
