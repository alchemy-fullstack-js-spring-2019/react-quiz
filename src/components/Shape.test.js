import React from 'react';
import { shallow } from 'enzyme';
import Shape from './Shape';

describe('Shape component', () => {
  it('renders a Shape', () => {
    const wrapper = shallow(<Shape text='hi' textColor='#000000' blockColor='#000000'/>);
    expect(wrapper).toMatchSnapshot();
  });
});
