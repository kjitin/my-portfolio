import React from 'react';
import {shallow} from 'enzyme';
import ExampleWork from '../js/example-work';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter})
const myWork = [
  {
    'title': "Work Example",
    'image': {
      'desc': "example screenshot of a project involving code",
      'src': "images/example1.png",
      'comment': ""
    }
  },
  {
    'title': "Work Example",
    'image': {
      'desc': "example screenshot of a project involving chemistry",
      'src': "images/example2.png",
      'comment': ""
    }
  }];
describe("Example Work Component ", () => {
  let component = shallow(<ExampleWork work ={myWork}/>);

  it("Should be a section Component ", () =>{
    expect(component.type()).toEqual('section')
  })
})
