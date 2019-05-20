import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Shape extends PureComponent({ name, color, backgroundColor }) {
  state = {
    backgroundColor,
    name,
    color
  }
  addColors(color, backgroundColor) {
    this.setState(state => {
      return {
        color: color,
        backgroundColor: backgroundColor
      };
    });
  }
  render() {
    const {
      color,
      backgroundColor,
      name
    } = this.state;

    const textStyle = {
      color: color,
      width: '100px',
      height: '100px',
      backgroundColor: backgroundColor
    };
    return (
      <div style={textStyle}>
        <h1>{name}</h1>
      </div>
    );
  }
}

Shape.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired
};


