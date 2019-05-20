import React from 'react';
import { shallow } from 'enzyme';
import ColorSelector from './ColorSelector';

describe('textSelector component', () => {
  it('renders a snapshot', () => {
    const color = 'blue';
    const backgroundColor = 'green';
    const wrapper = shallow(<ColorSelector color={color} backgroundColor={backgroundColor} />);
    expect(wrapper).toMatchSnapshot();
  });
});
