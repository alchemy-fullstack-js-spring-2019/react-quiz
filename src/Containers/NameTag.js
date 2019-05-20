import React, { PureComponent } from 'react';
import ColorSelector from '../Components/ColorSelector';

export default class NameTag extends PureComponent {
    state = {
      thing: 1,
    }

    render() {
      const {
        thing
      } = this.state;

      return (
        <ColorSelector />
      );
    }
}
