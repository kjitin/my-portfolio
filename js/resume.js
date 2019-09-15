import React from 'react';


class Resume extends React.Component {

 render(){

 let experience = this.props.myExperience;
   return(

    <div class="w3-twothird">
         <div className="w3-container w3-card w3-white w3-margin-bottom">
           <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Work Experience</h2>
           <div className="w3-container">
             { experience.map((exp,idx) => { return (
               <ResumeExperience exp ={exp} key={idx}/>
             )
           })}
           <h5 class="w3-opacity"><b>Education</b></h5>
                     <p>Bachelor of Engineering</p>

           </div>
         </div>

     </div>

   )
 }

}

class ResumeExperience extends React.Component {

render(){
let exp = this.props.exp;
  return (
    <div>
      <h5 className="w3-opacity"><b>{exp.designation}</b></h5>
      <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i><span dangerouslySetInnerHTML={{__html: exp.duration}} /></h6>
      <p dangerouslySetInnerHTML = {{__html:exp.description}} />
      <hr></hr>
    </div>

  )
}

}

export default Resume;
