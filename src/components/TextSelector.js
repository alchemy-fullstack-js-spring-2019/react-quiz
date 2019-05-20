import React from 'react';
import PropTypes from 'prop-types';

export default function TextSelector({ textHandler }) {
  return (
    <>
      <input type="text" name="text" value="Input Text" onChange={() => textHandler("")} />
    </>
  );
}

TextSelector.propTypes = {
  textHandler: PropTypes.func
};

// export default class TextSelector extends PureComponent {
//   state = {
//     text: 'Input text',
//     color: '#FF0000'
//   }

//   handleChange = ({ target }) => {
//     this.setState({ [target.name]: target.value });
//   }

//   render() {
//     const {
//       text,
//       // color
//     } = this.state;

//     return (
//       <>
//         <input type="text" name="text" value={text} onChange={this.handleChange} />
//       </>
//     );
//   }
// }
