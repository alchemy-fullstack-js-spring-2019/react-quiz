import React, { PureComponent } from 'react';

export default class NameTag extends PureComponent {
  state = {
    text: '',
    color: '#000000',
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
