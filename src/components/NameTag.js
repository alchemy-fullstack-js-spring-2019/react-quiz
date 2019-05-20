import React, { PureComponent } from 'react';
import TextSelector from './TextSelector';
import Shape from './Shape';
import ColorSelector from './ColorSelector';
import FontColorSelector from './FontColorSelector';


export default class TextFormatter extends PureComponent {
  state = {
    text: '',
    message: '',
    color:'purple',
    fontColor:'black'
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ message: this.state.text });
    this.setState({ text: '' });

  }
  handleTextChange = ({ target }) => {
    const text = target.value;
    this.setState({ text: text });
  }
  handleColorChange = ({ target }) => {
    const color = target.value;
    this.setState({ color: color });
  }
  handleFontColorChange = ({ target }) => {
    const color = target.value;
    this.setState({ fontColor: color });
  }

  render() {
    const { 
      fontColor,
      text,
      message,
      color } = this.state;

    return (
      <>
        <TextSelector text={text} handleTextChange={this.handleTextChange} handleSubmit={this.handleSubmit} />
        <ColorSelector handleColorChange={this.handleColorChange}/>
        <FontColorSelector handleFontColorChange={this.handleFontColorChange}/>
        <Shape text={message} color={fontColor} backgroundColor={color} />

      </>
    );
  }

}
