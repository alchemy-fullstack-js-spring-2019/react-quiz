
import React from 'react';
import { shallow } from 'enzyme';
import TextSelector from './TextSelector';

describe('Text Input Component', () => {
  it('renders text selector', () => {
    const wrapper = shallow(<TextSelector selectTextHandler={jest.fn()} text={'text'}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
