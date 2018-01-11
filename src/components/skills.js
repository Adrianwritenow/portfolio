import React, { Component } from 'react';
import '../App.css';

class Skills extends Component {

  componentDidMount(){
    console.log("COMPONENT MOUNTED:Experience");
}


  render() {
    let skills = [{name:'REACT', logo:'https://cdn.auth0.com/blog/react-js/react.png'},{name:'REDUX', logo:'http://devstickers.com/assets/img/pro/h8ci.png'},{name:'JAVASCRIPT', logo:'http://ric.mclaughlin.today/assets/themes/ricify/images/javascript.png'},{name:'NODE', logo:'https://raw.githubusercontent.com/diegocsandrim/sharp-test/master/output2.png'},{name:'POSTGRESS', logo:'https://railsware.com/blog/wp-content/uploads/2012/04/PostgreSQL-most-useful-extensions.png'},
      {name:'JSX', logo:'https://raw.githubusercontent.com/jsx-ir/logo/master/jsx.png'},{name:'JAVA', logo:'http://www.cloudwareoutsourcing.com/test/java2.png'},{name:'MONGO/MONGOOSE', logo:'https://webassets.mongodb.com/_com_assets/cms/MongoDB-Logo-5c3a7405a85675366beb3a5ec4c032348c390b3f142f5e6dddf1d78e2df5cb5c.png'},{name:'CSS', logo:'https://leviadesign.com/images/logos/css3-logo.svg'}, {name:'SCSS', logo:'https://foundation.zurb.com/emails/docs/assets/img/logos/sass-logo.svg'},{name:'HTML', logo:'https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png'},{name:'NPM', logo:'https://www.npmjs.com/static/images/npm-logo.svg'},
      {name:'GIT', logo:'https://www.nicolapietroluongo.com/wp-content/uploads/2015/08/git_logo.png'},{name:'EXPRESS', logo:'https://rishabh.io/recipes/img/004-express-js.png'},{name:'JSON', logo:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/JSON_vector_logo.svg/480px-JSON_vector_logo.svg.png'},{name:'FINAL CUT PRO X', logo:'https://support.apple.com/content/dam/edam/applecare/images/en_US/proapps/finalcut/psp-mini-hero-finalcutprox_2x.png'}, {name:'PHOTOSHOP', logo:'http://4.bp.blogspot.com/-o-PlcuJMsEQ/V1YZXjSJ4SI/AAAAAAAAA2M/s5nAH9-NRAszNBn_ql73aGZ3aeZC6QTSACK4B/s1600/Photoshop%2BCS6.jpg'}];

      let skillCards = skills.map(function(skill){
         return (
          <div className="button">{skill.name}
            <img src ={skill.logo}/>

          </div>
         )
      });
    return (

        <div className="wrapper">
          <div className="contentHeader">
          <h1 className="linethru">
            &#x0003C;SKILLS&#x0002F;&#x0003E;</h1>
            <div className='container'>
              {skillCards}
            </div>
          </div>
        </div>
    );
  }
}

export default Skills;
