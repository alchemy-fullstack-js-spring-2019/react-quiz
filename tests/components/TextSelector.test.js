import React from 'react';
import { shallow } from 'enzyme';
import TextSelector from '../../src/components/TextSelector';

describe('TextSelector component', () => {
  it('renders the TextSelector', () => {
    const wrapper = shallow(<TextSelector handleChange={ jest.fn } text="test" />);
    expect(wrapper).toMatchSnapshot();
  });
});
