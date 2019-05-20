import React from 'react';
import { shallow } from 'enzyme';
import Shape from '../../src/components/Shape';

describe('Shape component', () => {
  it('renders the Shape', () => {
    const wrapper = shallow(<Shape text="poop" color="#AAAAAA" background="#111111" />);
    expect(wrapper).toMatchSnapshot();
  });
});
