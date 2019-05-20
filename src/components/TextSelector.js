import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class TextSelector extends PureComponent {
  static propTypes = {
    addName: PropTypes.func.isRequired
  }

  state = {
    name: ''
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
    this.props.addName({ name });
  } 

  render() {
    const {
      name
    } = this.state;

    return (
      <input name="name" type="text" value={name} onChange={this.handleChange} />
    );
  }
}
