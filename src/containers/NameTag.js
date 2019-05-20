import React, { PureComponent } from 'react';
import TextSelector from '../components/TextSelector';
import ColorSelector from '../components/ColorSelector';
import Shape from '../components/Shape';

export default class NameTage extends PureComponent {
  state = {
    text: '',
    color: '#FFF',
    background: '#000'
  }

  handleChange = ({ target }) => ({ [target.value]: target.value })

  render() {
    return (
      <>
        <TextSelector handleChange={ this.handleChange }/>
        <ColorSelector handleChange={ this.handleChange } />
        <Shape { ...this.state } />
        </>
    );
  }
}
