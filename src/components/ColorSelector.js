import React, { PureComponent } from 'react';

export default class ColorSelector extends PureComponent {
  state = {
    color: '',
    backgroundColor: ''
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  } 

  render() {
    const {
      color,
      backgroundColor
    } = this.state;

    return (
      <section>
        <input name="color" type="color" value={color} onChange={this.handleChange} />
        <input name="backgroundColor" type="color" value={backgroundColor} onChange={this.handleChange} />
      </section>
    );
  }
}
