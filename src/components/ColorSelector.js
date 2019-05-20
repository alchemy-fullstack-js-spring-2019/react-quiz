import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class ColorSelector extends PureComponent {
  static propTypes = {
    addColors: PropTypes.func.isRequired
  };

  state = {
    color: '',
    backgroundColor: ''
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
    console.log(this.state);
    this.props.addColors({ color: this.state.color, backgroundColor: this.state.backgroundColor });
  }

  render() {
    return (
      <>
        <input type='color' name='color' value={this.state.color} onChange={this.handleChange} />
        <input type='color' name='backgroundColor' value={this.state.backgroundColor} onChange={this.handleChange} />
      </>
    );
  }

}
