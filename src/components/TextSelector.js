import React, { PureComponent } from 'react';

export default class TextSelector extends PureComponent {
  state = {
    text: '',
    formattedText: ''
  };

  formatText = () => {
    const { text } = this.state;
    (err, result) => {
      this.setState({ formattedText: result });
    }
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value }, () => {
      this.formatText();
    });
  }

  render() {
    const { text, formattedText } = this.state;
  }

  return (
    <>
      <input name="text" value={text} onChange={this.handleChange} />
    </>
  );
}
