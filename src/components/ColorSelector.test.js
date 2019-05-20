import React from 'react';
import { shallow } from 'enzyme';
import ColorSelector from './ColorSelector';

describe('TextSelector component', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<ColorSelector change={jest.fn()} color="" backgroundColor="" />);
    expect(wrapper).toMatchSnapshot();
  });
});
