
import React from 'react';
import { shallow } from 'enzyme';
import ColorSelector from './ColorSelector';

describe('Color Input Component', () => {
  it('renders Color selector', () => {
    const wrapper = shallow(<ColorSelector selectColorHandler={jest.fn()} color={'blue'} backgroundColor={'green'}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
