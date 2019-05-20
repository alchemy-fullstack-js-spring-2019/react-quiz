import React from 'react';
import { shallow } from 'enzyme';
import TextSelector from './TextSelector';

describe('TextSelector', ()=>{
  it('renders stuff', ()=>{
    const wrapper =  shallow(<TextSelector text='test' handleTextChange={()=>'hi'} handleSubmit={()=>'bye'}/>);
    expect(wrapper).toMatchSnapshot();
  });
})
;
