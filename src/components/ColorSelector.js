import { Component } from 'react';

export default class ColorSelector extends Component {
  state = {
    color: 'black',
    backgroundColor: 'white'
  }

  colorHandler = color => {
    this.setState(color);
  }

  backgroundColorHandler = backgroundColor => {
    this.setState(backgroundColor);
  }
}
