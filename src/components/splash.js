import React, { Component } from 'react';
import '../App.css';

class Splash extends Component {

  componentDidMount(){
    console.log("COMPONENT MOUNTED:Splash");
     window.onload = function() {
       document.getElementsByClassName('section').className = 'load';

  }
}


  render() {
    return (

        <div className="splashWrapper">
          <div className="splashHeader">
            <div className="header">
              <h1>ADRIANWRITENOW</h1>
            </div>
            <div className="footer">
              <h4>JUNIOR DEVELOPER</h4>
          </div>
          </div>
          <div className='splashButtons'>
            <button>ABOUT</button>
            <button>SKILLS</button>
            <button>EXPERIENCE</button>
            <button>CONTACT</button>
          </div>
        </div>
    );
  }
}

export default Splash;
