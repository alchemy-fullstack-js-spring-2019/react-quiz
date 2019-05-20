import React from 'react';
import { shallow } from 'enzyme';
import ColorSelector from './ColorSelector';

describe('ColorSelector component', () => {
  it('renders a ColorSelector', () => {
    const mockHandleChange = jest.fn(x => 42 + x);
    const props = {
      fontColor: '#000000',
      backgroundColor: '#000000',
      handleChange: mockHandleChange
    };
    const wrapper = shallow(<ColorSelector {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
