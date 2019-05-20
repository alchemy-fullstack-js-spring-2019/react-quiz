import React from 'react';
import { shallow } from 'enzyme';
import ColorSelector from '../../src/components/ColorSelector';

describe('ColorSelector component', () => {
  it('renders the ColorSelector', () => {
    const wrapper = shallow(<ColorSelector color="#000000" background="#FFFFFF" handleChange={ jest.fn } />);
    expect(wrapper).toMatchSnapshot();
  });
});
