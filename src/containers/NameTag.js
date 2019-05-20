import React, { PureComponent } from 'react';
import TextSelector from '../components/TextSelector';
import ColorSelector from '../components/ColorSelector';
// import Shape from '../components/Shape';

export default class NameTag extends PureComponent {
  state = {
    text: '',
    color: '#FFFFFF',
    background: '#000000'
  }

  handleChange = ({ target }) => this.setState({ [target.name]: target.value })

  render() {
    return (
      <>
        <TextSelector text={ this.state.text } handleChange={ this.handleChange }/>
        <ColorSelector color={ this.state.color } background={ this.state.background } handleChange={ this.handleChange } />
      </>
    );
  }
}

// <Shape { ...this.state } />
