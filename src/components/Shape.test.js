import React from 'react';
import { shallow } from 'enzyme';
import Shape from './Shape';

describe('TextSelector component', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Shape color="" backgroundColor="" text="" />);
    expect(wrapper).toMatchSnapshot();
  });
});
