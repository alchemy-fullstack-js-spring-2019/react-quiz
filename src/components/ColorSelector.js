import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class ColorSelector extends PureComponent {
  static propTypes = {
    addColors: PropTypes.func.isRequired
  }

  state = {
    color: '#000000',
    backgroundColor: '#000000'
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
    const { color, backgroundColor } = this.state;
    this.props.addColors({ color: color, backgroundColor: backgroundColor });
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
