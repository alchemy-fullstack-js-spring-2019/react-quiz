import React from 'react';
import { shallow } from 'enzyme';
import Shape from './Shape';

describe('Shape', ()=>{
  it('renders stuff', ()=>{
    const wrapper =  shallow(<Shape text='test' color='green' backgroundColor='blue'/>);
    expect(wrapper).toMatchSnapshot();
  });
})
;
