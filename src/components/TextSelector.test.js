import React from 'react';
import { shallow } from 'enzyme';
import TextSelector from './TextSelector';

describe('TextSelector component', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<TextSelector change={jest.fn()} text="" />);
    expect(wrapper).toMatchSnapshot();
  });
});
