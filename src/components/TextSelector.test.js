import React from 'react';
import { shallow } from 'enzyme';
import TextSelector from './TextSelector';

describe('TextSelector Component', () => {
  it('renders the text selector', () => {
    const wrapper = shallow(<TextSelector />);
    expect(wrapper).toMatchSnapshot();
  });
});
