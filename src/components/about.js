import React, { Component } from 'react';
import '../App.css';

class About extends Component {

  componentDidMount(){
    console.log("COMPONENT MOUNTED:Experience");
}


  render() {
    return (

        <div className="experienceWrapper">
        <h1 className="linethru linethru--rev">
          &#x0003C;ABOUT&#x0002F;&#x0003E;</h1>

        </div>
    );
  }
}

export default About;
