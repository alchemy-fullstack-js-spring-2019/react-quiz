import React, { PureComponent } from 'react';

export default class ColorSelector extends PureComponent {
  state = {
    textColor: '#FF0000',
    backgroundColor: '#000000'
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const {
      textColor,
      backgroundColor
    } = this.state;

    return (
      <form>
        <p>
          Text Color: <input type="color" name="textColor" value={textColor} onChange={this.handleChange} />
        </p>
        <p>
          BG Color: <input type="color" name="backgroundColor" value={backgroundColor} onChange={this.handleChange} />
        </p>
      </form>
    );
  }
}
