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
              <h1>ADRIANWRITENOW;</h1>
            </div>
            <div className="footer">
              <h4>&#x0007B;JUNIOR DEVELOPER&#x0007D;</h4>
          </div>
          </div>
          <div className='splashButtons'>
            <a href="#" className="linethru linethru--rev">
              &#x0003C;ABOUT&#x0002F;&#x0003E;</a>
            <a href="#" className="linethru linethru--rev">
              &#x0003C;SKILLS&#x0002F;&#x0003E;</a>
            <a href="#" className="linethru linethru--rev">
              &#x0003C;EXPERIENCE&#x0002F;&#x0003E;</a>
            <a href="#" className="linethru linethru--rev">
              &#x0003C;CONTACT&#x0002F;&#x0003E;</a>
          </div>
        </div>
    );
  }
}

export default Splash;
