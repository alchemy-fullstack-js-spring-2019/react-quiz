import React from 'react';
import { shallow } from 'enzyme';
import ColorSelector from './ColorSelector';

describe('Shape', ()=>{
  it('renders stuff', ()=>{
    const wrapper =  shallow(<ColorSelector handleColorChange={()=>'work!'}/>);
    expect(wrapper).toMachSnapshot;
  });
})
;
