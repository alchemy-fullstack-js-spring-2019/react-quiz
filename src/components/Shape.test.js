import React from 'react';
import { shallow } from 'enzyme';
import Shape from './Shape';

describe('Shape component', () => {
  it('renders a Shape', () => {
    const props = {
      text: 'hello',
      fontColor: '#000000',
      backgroundColor: '#000000'
    };
    const wrapper = shallow(<Shape {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
