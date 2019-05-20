import React from 'react';
import { shallow } from 'enzyme';
import NameTag from './NameTag';

describe('NameTag Component', ()=>{
  it('renders stuff', ()=>{
    const wrapper =  shallow(<NameTag/>);
    expect(wrapper).toMatchSnapshot();
  });
})
;
