import React from 'react';
import Resume from './resume';

class Skills extends React.Component {
  render() {

    let profileInfo = this.props.work;
    return(
    <div className="w3-content w3-margin-top" style={{maxWidth:'1400px'}}>
      <div className="w3-row-padding">
        <div className="w3-third">
          <div className="w3-white w3-text-grey w3-card-4">
            <div className="w3-display-container">
              <img src="/images/jkp.jpg" style={{width:'100%'}} alt="Avatar"></img>
              <div className="w3-display-bottomleft w3-container w3-text-white">
                <h2>{profileInfo.name}</h2>
              </div>
            </div>
            <div className="w3-container">
              <p><i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>{profileInfo.currentDesigntion}</p>
              <p><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>{profileInfo.currentLocation}</p>
              <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>{profileInfo.email}</p>
              <hr/>

              <p className="w3-large"><b><i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Skills</b></p>
              { profileInfo.mySkills.map((skill,idx) => {
                return (
                  <SkillBubble skill ={skill} key={idx}/>
                )
              })}

              <br/>
            </div>
          </div>
        </div>
      <Resume myExperience ={profileInfo.myExperience}/>
      </div>
      </div>


    )
  }
}

class SkillBubble extends React.Component {
  render() {
    let skill = this.props.skill;
    return (
      <div>
        <p>{skill.name}</p>
        <div className="w3-light-grey w3-round-xlarge w3-small">
          <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width:skill.widthText}}>{skill.widthText}</div>
        </div>
      </div>
    )
  }
}
export default Skills;
