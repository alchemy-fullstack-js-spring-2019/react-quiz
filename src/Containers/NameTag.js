import React, { PureComponent } from 'react';

export default class NameTag extends PureComponent {
    state = {
      thing: 1,
    }

    render() {
      const {
        thing
      } = this.state;

      return (
        <p>Poops</p>
      );
    }
}
