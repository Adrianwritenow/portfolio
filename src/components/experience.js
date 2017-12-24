import React, { Component } from 'react';
import '../App.css';

class Experience extends Component {

  componentDidMount(){
    console.log("COMPONENT MOUNTED:Experience");
}


  render() {
    return (

        <div className="experienceWrapper">
        <h1 className="linethru linethru--rev">
          &#x0003C;EXPERIENCE&#x0002F;&#x0003E;</h1>

        </div>
    );
  }
}

export default Experience;
