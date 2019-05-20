import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class ColorSelector extends PureComponent {
  static propTypes = {
    addColors: PropTypes.func.isRequired
  };

  state = {
    color: '#000000',
    backgroundColor: '#FFFFFF'
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
    console.log(this.state);
    this.props.addColors(this.state);
  }

  render() {
    return (
      <>
        <p>
          text color
          <input type='color' name='color' value={this.state.color} onChange={this.handleChange} />
        </p>
        <p>
          background color 
          <input type='color' name='backgroundColor' value={this.state.backgroundColor} onChange={this.handleChange} />
        </p>
      </>
    );
  }

}
