import React, { PureComponent } from 'react';

export default class TextSelector extends PureComponent {
  state = {
    text: ''
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { text } = this.state;
    return (
      <input name="text" type="text" value={text} onChange={this.handleChange}/>
    );
  }
}
