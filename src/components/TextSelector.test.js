import React from 'react';
import { shallow } from 'enzyme';
import TextSelector from './TextSelector';

describe('TextSelector component', () => {
  it('renders a TextSelector', () => {
    const mockHandleChange = jest.fn(x => 42 + x);
    const props = {
      text: 'hello',
      handleChange: mockHandleChange
    };
    const wrapper = shallow(<TextSelector {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
