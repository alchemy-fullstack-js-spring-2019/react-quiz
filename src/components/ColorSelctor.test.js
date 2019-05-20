import React from 'react';
import { shallow } from 'enzyme';
import ColorSelector from './ColorSelector';

describe('ColorSelector Component', () => {
  it('renders the color', () => {
    const wrapper = shallow(<ColorSelector />);
    expect(wrapper).toMatchSnapshot();
  });
});
