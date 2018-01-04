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
            <div className='examCard'>
             <p>{skill}</p>
            </div>
         )

      });
    return (

        <div className="experienceWrapper">
        <h1 className="linethru linethru--rev">
          &#x0003C;SKILLS&#x0002F;&#x0003E;</h1>
          {skillCards}

        </div>
    );
  }
}

export default Skills;
