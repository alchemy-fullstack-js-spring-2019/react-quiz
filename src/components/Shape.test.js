
import React from 'react';
import { shallow } from 'enzyme';
import Shape from './Shape';

describe('Shape Component', () => {
  it('renders shape', () => {
    const wrapper = shallow(<Shape text={'string'} color={'blue'} backgroundColor={'green'}/>);
    expect(wrapper).toMatchSnapshot();
  });
});