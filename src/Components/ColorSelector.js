import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import figlet from 'figlet';

export default class ColorSelector extends PureComponent {
    static propTypes = {
      addColor: PropTypes.func.isRequired
    };

    state = {
      name: '',
      color: '#000000',
      text: '',
      textColor: '',
      font: 'Banner',
    };

    formatText = () => {
      const { text, font } = this.state;
      figlet.text(text, {
        font: font
      }, (err, result) => {
        this.setState({ formatText: result });
      });
    }

    handleSubmit = event => {
      event.preventDefault();
      const { name, color } = this.state;

      this.props.addColor({ name, hex: color });
    }


    handleChange = ({ target }) => {
      this.setState({ [target.name]: target.value });
    }

    render() {
      const { color, name } = this.state;

      const fontOptions = ['Banner', 'Linux'].map(font => {
        return <option key={font} value={font}>{font}</option>;
      });
      
      return (
        <form onSubmit={this.handleSubmit}>
          <input name="name" type="text" value={name} onChange={this.handleChange} />
          <input name="color" type="color" value={color} onChange={this.handleChange} />
        </form>
      );
    }
}
