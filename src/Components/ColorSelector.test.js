import React from 'react';
import { shallow } from 'enzyme';
import ColorSelector from './ColorSelector';

describe('ColorSelector', () => {
  it('renders', () => {
    const wrapper = shallow(<ColorSelector addColor={jest.fn()} />);
    expect(wrapper).toMatchSnapshot();
  });
})
;
