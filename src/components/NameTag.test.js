import React from 'react';
import { shallow } from 'enzyme';
import NameTag from './NameTag';

describe('nameTag component', () => {
  it('renders the name tag', () => {
    const wrapper = shallow(<NameTag />);
    expect(wrapper).toMatchSnapshot();
  });
});
