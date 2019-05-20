import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class ColorSelector extends PureComponent {
  static propTypes = {
    addColor: PropTypes.func.isRequired
  }

  state = {
    color: '#000000',
    backgroundColor: '#000000'
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
    this.props.addColor({ hex: color });
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
