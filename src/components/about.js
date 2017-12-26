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

                <div className="content">
                <h1 className="linethru">
                  &#x0003C;ABOUT&#x0002F;&#x0003E;</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque vitae dictum erat.</p>
                </div>
            </div>

          </section>

          <section className="two">
            <div className="wrapper">

                <div className="content">
                <h1 className="linethru">
                  &#x0003C;ABOUT&#x0002F;&#x0003E;</h1>
                  <p>Suspendisse ac posuere dolor.
                 Duis sit amet euismod lacus. Ut sodales mi arcu, at pulvinar sapien gravida eleifend.
                 In semper cursus fringilla. </p>
                </div>
            </div>

          </section>

          <section className="three">
            <div className="wrapper">
              <div className="content">
              <h1 className="linethru">
                &#x0003C;ABOUT&#x0002F;&#x0003E;</h1>
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

export default About;
