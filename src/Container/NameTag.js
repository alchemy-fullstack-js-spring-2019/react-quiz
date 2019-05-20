import React, { PureComponent } from 'react';
import ColorSelector from '../components/ColorSelector';
import TextSelector from '../components/TextSelector';
import Shape from '../components/Shape';

export default class TextFormatter extends PureComponent {
  state = {
    text: 'yoyoy',
    textColor: '#000000',
    blockColor: '#000000'
  };

  render() {
    const { text, textColor, blockColor } = this.setState;

    return ( 
      <>
        <ColorSelector />,
        <TextSelector />
        <Shape text={text} textColor={textColor} blockColor={blockColor} />
      </>
    );
  }
}
