import React, { PureComponent } from 'react';

export default class ColorSelector extends PureComponent {
  state = {
    color: ''
  };

  selectColor = color => {
    this.setState({ color });
  }

  render() {
    const { color } = this.state;

    return (
      <section className={StyleSheet.ColorSelector}>
        <div className={styles[color]}></div>
      </section>
    );
  }
}
