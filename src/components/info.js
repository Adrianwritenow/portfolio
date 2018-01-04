import React, { Component } from 'react';
import '../App.css';
import Skills from "../components/skills";

class Info extends Component {

  componentDidMount(){
    console.log("COMPONENT MOUNTED:Experience");
}


  render() {
    return (

      <div className="experienceWrapper">

        <section className="one" id="about">
          <div className="wrapper">

            <div className='contentHeader'>
              <h1 className="linethru">
                &#x0003C;ABOUT&#x0002F;&#x0003E;</h1>
            </div>
              <div className="content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Quisque vitae dictum erat.</p>
              </div>
          </div>

        </section>

        <section className="two" id="skills">
          <Skills />
        </section>

        <section className="three" id="experience">
          <div className="wrapper">
          <div className='contentHeader'>
            <h1 className="linethru">
              &#x0003C;EXPERIENCE&#x0002F;&#x0003E;</h1>
          </div>
            <div className="content">

              <p>Duis et risus id elit rutrum volutpat.
              Morbi mattis nibh ligula, sit amet consectetur ipsum eleifend id. Curabitur consequat tempor lectus a dignissim.
              Duis iaculis ante justo, lobortis interdum odio condimentum ac. Integer rhoncus dapibus nisi sed porta.
              Mauris tortor metus, consectetur quis leo a, maximus fermentum nunc. Integer maximus a felis vel tempus.
              Praesent ullamcorper congue urna venenatis mattis.</p>
            </div>

          </div>

        </section>

    </div>
    );
  }
}

export default Info;
