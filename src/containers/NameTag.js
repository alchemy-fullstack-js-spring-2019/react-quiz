import React, { Component } from 'react';
import ColorSelector from '../components/ColorSelector.js';
// import TextSelector from '../components/TextSelector.js';
// import Shape from '../components/Shape.js';

export default class NameTag extends Component {
  state = {
    fontColor: '#FFFFFF',
    backgroundColor: '#000000',
    text: ''
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value }, () => {
      this.formatText();
    });
  }

  render() {
    const { fontColor, backgroundColor, text} = this.state;
    return (<ColorSelector fontColor={fontColor} selectColor={this.handleChange} />);
  }
}
