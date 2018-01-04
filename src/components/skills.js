import React, { Component } from 'react';
import '../App.css';

class Skills extends Component {

  componentDidMount(){
    console.log("COMPONENT MOUNTED:Experience");
}


  render() {
    let skills = ['REACT','REDUX','JAVASCRIPT','NODE','POSTGRESS',
      'JSX','JAVA','MONGO/MONGOOSE ','CSS', 'SCSS','SASS','HTML','NPM',
      'GIT','EXPRESS','JSON','FINAL CUT PRO X', 'PHOTOSHOP'];

      let skillCards = skills.map(function(skill){
         return (
          <div className="button">{skill}</div>
         )
      });
    return (

        <div className="experienceWrapper">
        <h1 className="linethru linethru--rev">
          &#x0003C;SKILLS&#x0002F;&#x0003E;</h1>
          <div className='container'>
            {skillCards}
          </div>

        </div>
    );
  }
}

export default Skills;
