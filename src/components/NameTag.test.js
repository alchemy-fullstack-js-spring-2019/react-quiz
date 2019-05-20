import React from 'react';
import { shallow } from 'enzyme';
import NameTag from './NameTag';

describe('TextSelector component', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<NameTag />);
    expect(wrapper).toMatchSnapshot();
  });
});
