import React, { PureComponent } from 'react';

export default class textSelector extends PureComponent {
  state = {
    text: '',
    color: '#000000'
  };

  changeHandler = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { text, color } = this.state;

    return (
      <form>
        <input type="text" name="text" value={text} onChange={this.changeHandler} />
        <input name="color" type="color" value={color} onChange={this.changeHandler} />
        <p style={{ color: color }}>{text}</p>
      </form>
    );
  }
}
