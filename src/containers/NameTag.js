import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ColorSelector from '../components/ColorSelector';
import TextSelector from '../components/TextSelector';
import Shape from '../components/Shape';

export default class NameTag extends PureComponent {

  state = {
    text: 'hello',
    color: 'red',
    backgroundColor: 'black'
  }

  addText = text => {
    this.setState({ text });
  }

  render() {
    const { text, color, backgroundColor } = this.state;
    return (
      <>
        <TextSelector addText={this.addText}/>
        {/* <ColorSelector addColors={this.addColors}/> */}
        <Shape text={text} color={color} backgroundColor={backgroundColor} />
      </>
    );
  }
}

