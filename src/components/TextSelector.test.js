
import React from 'react';
import { shallow } from 'enzyme';
import TextSelector from './TextSelector';

describe('Shape Component', () => {
  it('renders shape', () => {
    const wrapper = shallow(<TextSelector selectTextHandler={jest.fn()} text={'text'}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
