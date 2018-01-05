import React, { Component } from 'react';
import '../App.css';

class Experience extends Component {

  componentDidMount(){
    console.log("COMPONENT MOUNTED:Experience");
}


  render() {
    let experience = [{name:'The Iron Yard',title:'Developer',location:'Orlando, FL',description:'Learn the methods and languages used in Web/ Application development used today by completing complicated projects.',period:'2017',details:['Developed several Web applications with Front and Backend',
      'Problem solving through application errors to find solutions','Adapt to a fast paced learning enviorment']},
      {name:'Bluemotion Productions', title:'Production Manager', location:'Orlando, Fl/Los Angeles, CA', description:'Oversaw the completion of projects by organizing production and editing crews while meeting client deadlines.',period:'2012-2015',details:['Managed a camera crew of six at the 2013 Academy Awards and NBA All-Star game',
        'Hired and interviewed employees',
        'Edited promotional material for Marcus and Jeffery Jordan (Heir Jordan)']},
      {name:'Snap & Play', title:'Production Account Manager', location:'Orlando, Fl', description:'Contributed to the Google business tours project in the Orlando area by coordinating production schedules with clients.',period:'2008-2012',details:['Added new data to Googles business tour project',
        'Managed business relations with clients','Delegated and created shooting schedule withcamera team']},
    ];

      let expCards = experience.map(function(skill){
         return (
             <div className="flip">
               <div className="front">{skill.name}</div>
               <div className="back">{skill.description}</div>
             </div>
         )
      });
    return (

        <div className="wrapper">
          <div className="contentHeader">
          <h1 className="linethru">
            &#x0003C;EXPERIENCE&#x0002F;&#x0003E;</h1>
            <div className='container'>
              {expCards}
            </div>
          </div>
        </div>
    );
  }
}

export default Experience;
