import React from 'react';
import { shallow } from 'enzyme';
import TextSelector from './TextSelector';

describe('TextSelector component', () => {
  it('renders a TextSelector', () => {
    const wrapper = shallow(<TextSelector text='hiya' textColor='#000000'/>);
    expect(wrapper).toMatchSnapshot();
  });
});
