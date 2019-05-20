import React, { PureComponent } from 'react';
import TextSelector from './TextSelector';
import ColorSelector from './ColorSelector';
import Shape from './Shape';

class App extends PureComponent {
  state = {
    text: '',
    fontColor: '',
    backgroundColor: ''
  }

  onChange = ({ target }) => {
    this.setState({ [target.name]: target.value })
  }
  render() {
    const { text, fontColor, backgroundColor } = this.state;
    return (
      <>
        <h1>Font, Color, Shape</h1>
        <TextSelector text={text} onChange={this.onChange} />
        <ColorSelector color={color} backgroundColor={backgroundColor} onChange={this.onChange} />
        <Shape text={text} fontColor={fontColor} onChange={this.onChange} />
      </>
    );
  }
}

export default App;
