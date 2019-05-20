import React, { PureComponent } from 'react';
import Shape from '../components/Shape';
import TextSelector from '../components/TextSelector';
import ColorSelector from '../components/ColorSelector';

export default class NameTag extends PureComponent {
  state = {
    text: '',
    color: 'black',
    backgroundColor: ''
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name] : target.value });
  }

  render() {
    const { text, color, backgroundColor } = this.state;

    return (
      <>
        <ColorSelector color={color} backgroundColor={backgroundColor}/>
        <TextSelector text={text} style={color}/>
        <Shape text={text} />
        <div>{text}</div>
      </>
    );
  }
}
