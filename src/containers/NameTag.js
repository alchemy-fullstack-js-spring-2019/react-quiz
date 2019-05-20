import React, { PureComponent } from 'react';
import TextSelector from '../components/TextSelector';
import ColorSelector from '../components/ColorSelector';
import Shape from '../components/Shape';

export default class NameTag extends PureComponent {
  state = {
    text: '',
    color: 'black',
    backgroundColor: 'white'
  }

  inputTextHandler = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }
  
  textColorHandler = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  bgColorHandler = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }


  render() {
    const { text, color, backgroundColor } = this.state;

    return (
      <>
        <TextSelector inputTextHandler={this.inputTextHandler}/>
        <ColorSelector textColorHandler={this.textColorHandler} bgColorHandler={this.bgColorHandler}/>
        <Shape text={text} color={color} backgroundColor={backgroundColor} />
      </>
    );
  }
}
