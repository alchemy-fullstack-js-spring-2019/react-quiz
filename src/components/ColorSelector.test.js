import React from 'react';
import { shallow } from 'enzyme';
import ColorSelector from './ColorSelector';

describe('ColorSelector component', () => {
  it('renders ColorSelector', () => {
    const wrapper = shallow(<ColorSelector />);
    expect(wrapper).toMatchSnapshot();
  });

  it('changes div className based on selected color', done => {
    const wrapper =shallow(<ColorPicker />);

    wrapper.setState({ color: 'blue' }, () => {
      expect(wrapper.find('div').at(0).hasClass('blue')).toBeTruthy();
      done();
    });
  });
});
