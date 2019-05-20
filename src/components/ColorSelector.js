import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class ColorSelector extends PureComponent {
  static propTypes = {
    addColor: PropTypes.func.isRequired
  };

  state = {
    textColor: '#000001',
    color: '#000000'
  }

  handleSubmit = event => {
    event.preventDefault();
    const { textColor, color } = this.state;

    this.props.addColor({ textColor, hex: color });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.textColor]: target.value });
  }

  render() {
    const { color, textColor } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="textColor" type="color" value={textColor} onChange={this.handleChange} />
        <input name="color" type="color" value={color} onChange={this.handleChange} />
      </form>
    );
  }
}
