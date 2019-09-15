import React from 'react';
import ReactDOM from 'react-dom';
import Skills from './skills';
import Resume from './resume';

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
     },
     {
       "designation": "Senior Developer / Mastek UK Limited",
       "duration": "Feb 2006 - May 2014",
       "description" : `Responsible for creating backend services and supporting custom software product developed by Mastek.
       Also was involved with creating a solution using a Business Process Management tool (Appian).
           Some of the clients worked when involved with Mastek were
           <ol>
             <li> BT Group </li>
             <li> FCA </li>
             <li> Lex Autolease </li>
             <li> Savi Technology</li>
          </ol>`
     },
     {
       "designation": "Senior Developer / Polaris Consulting & Services",
       "duration": "Sep 2004 - Jan 2006",
       "description" : `Was involved in creating a web interface for an Anti-Money laundering prevention software.
         The project was implemented using Struts and was also responsible for maintaining the software after its release.`
     },
     {
       "designation": "Developer / Lionbridge Technologies",
       "duration": "Jan 2003 - Sep 2004",
       "description" : `Was involved in implementing certain use cases for a Learning Management system for Pearson Digital Learning.
         Also used testing tools Jprobe/SilkPerformer for testing for memory leaks and load testing of the site.`
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
  },
  {
    'name': "JUnit/Mockito/WireMock",
    'widthText': "90%"
  },
  {
    'name': "Docker",
    'widthText': "75%"
  },
  {
    'name': "Oracle/SQL Server",
    'widthText': "60%"
  },
  {
    'name': "React",
    'widthText': "60%"
  },
  {
    'name': "AWS",
    'widthText': "60%"
  }
]
}

ReactDOM.render(<Skills work ={myProfile}/> , document.getElementById('skills'));
