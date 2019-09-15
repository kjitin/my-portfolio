import React from 'react';
import {shallow} from 'enzyme';
import Resume from '../js/resume';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter})

const myProfile = {
   "name" : "Jitin Kayyala",
   "currentDesigntion" : "Java Developer",
   "currentLocation": "Sheffield, UK",
   "email": "kjitin@gmail.com",
   "myExperience": [
     {
       "designation": "Java Developer / Insight UK Limited",
       "duration": "Sep 2014 - <span className=\"w3-tag w3-teal w3-round\">Current</span>",
       "description" : `Primarily Responsible for creating RESTful Webservices using Java and SpringBoot. All of the projects followed Agile methodology.
        Some of the RESTful Webservices created were for integrating the following platforms in the website
         <ol>
           <li> Gigya a customer identity management platform (https://developers.gigya.com/)</li>
           <li> GoCardless a recurring payments platform (https://gocardless.com/)</li>
           <li>Odin Automation to enable cloud services (https://www.hosted-odin.com)</li>
           <li> Loqate an address verification tool (https://www.loqate.com/)</li>
           <li> Internal Search service </li>
         </ol>`
     }
   ],
  "mySkills": [
  {
    'name': "Java",
    'widthText': "90%"
  },
  {
    'name': "Spring Boot",
    'widthText': "90%"
  }
]
}


describe("Resume Component ", () => {
  let component = shallow(<Resume myExperience ={myProfile.myExperience}/>);

  it("Should be a div with class Component ", () =>{
    expect(component.type()).toEqual('div')
  })
})
