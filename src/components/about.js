import React, { Component } from 'react';
import '../App.css';

class About extends Component {

  componentDidMount(){
    console.log("COMPONENT MOUNTED:Experience");
}


  render() {
    return (

        <div className="experienceWrapper">

          <section className="one">
            <div className="wrapper">
              <h1 className="linethru">
                &#x0003C;ABOUT&#x0002F;&#x0003E;</h1>
            </div>
          </section>

          <section className="two">
            <div className="wrapper">
              <h1 className="linethru">
                &#x0003C;ABOUT&#x0002F;&#x0003E;</h1>
            </div>
          </section>

          <section className="three">
            <div className="wrapper">
              <h1 className="linethru">
                &#x0003C;ABOUT&#x0002F;&#x0003E;</h1>
            </div>
          </section>

      </div>
    );
  }
}

export default About;
