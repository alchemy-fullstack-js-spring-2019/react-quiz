import React, { PureComponent } from 'react';
import ColorSelector from '../components/ColorSelector';
import Shape from '../components/Shape';
import TextSelector from '../components/TextSelector';

export default class NameTage extends PureComponent {
    state = {
      text: '',
      color: '#ff0000',
      backgroundColor: '#ff0000'
    }



    render() {
      return (
            <>
                <TextSelector />
                <ColorSelector />
                <Shape />
            </>
          
      );
    }
}
