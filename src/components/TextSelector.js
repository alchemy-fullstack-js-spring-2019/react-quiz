import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class TextSelector extends PureComponent {
  static propTypes = {
    addText: PropTypes.func.isRequired
  };

  state = {
    text: ''
  };

  handleChange = ({ target }) => {
    this.props.addText(target.value);
    this.setState({ text: target.value });
  }

  render() {
    return (
      <input type='text' name='text' value={this.state.text} onChange={this.handleChange} />
    );
  }

}



