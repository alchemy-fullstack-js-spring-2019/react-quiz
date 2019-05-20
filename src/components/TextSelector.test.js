import React from 'react';
import { shallow } from 'enzyme';
import TextSelector from './TextSelector';

describe('textSelector component', () => {
  it('renders a snapshot', () => {
    const text = 'hello';
    const wrapper = shallow(<TextSelector text={text} />);
    expect(wrapper).toMatchSnapshot();
  });
});
