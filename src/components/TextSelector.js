import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

//presentational
//text input


export default class TextSelector extends PureComponent {
  
  state = {
    text: 'starter text'
  };
  
  handleChange = (event) => {
    this.setState({value: event.target.value});
  }
  
  render() {
    
    return (
      <input type="text" value={text} onChange={this.handleChange}></input>
      );
    }
    
  };
  
  // function TextSelector({ text }) {
  //   const { text } = text;
  //   return (
  //     <section>
  //       <input type="text"></input>
  //     </section>
  //   );
  // }
  
  // TextSelector.propTypes = {
  //   text: PropTypes.string.isRequired
  // };
  
  // export default TextSelector;
  
  
  