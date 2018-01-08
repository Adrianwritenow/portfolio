import React, { Component } from 'react';
import '../App.css';

class Splash extends Component {

  componentDidMount(){
    console.log("COMPONENT MOUNTED:Splash");

}
//
// <div className="backgroundSplash">
// <img id="water" src={require("./logos/pool_water.jpg")}alt='WATTA'/>
//   <div className="tigerWrap">
//     <img src={require("./logos/tigercrop.png")} alt='tiger'/>
//   </div>
//     <div className="splashWrapper">
//       <div className="splashHeader">
//         <div className="header">
//           <h1>ADRIANWRITENOW;</h1>
//         </div>
//         <div className="footer">
//           <h4>&#x0007B;JUNIOR DEVELOPER&#x0007D;</h4>
//         </div>
//       </div>
//       <div className='splashButtons'>
//         <a href="/info/#about" className="linethru linethru--rev">
//           &#x0003C;ABOUT&#x0002F;&#x0003E;</a>
//         <a href="/info/#skills" className="linethru linethru--rev">
//           &#x0003C;SKILLS&#x0002F;&#x0003E;</a>
//         <a href="/info/#experience" className="linethru linethru--rev">
//           &#x0003C;EXPERIENCE&#x0002F;&#x0003E;</a>
//         <a href="/contact" className="linethru linethru--rev">
//           &#x0003C;CONTACT&#x0002F;&#x0003E;</a>
//       </div>
//     </div>
//
// </div>
  render() {
    return (
      <div className="backgroundSplash">
      <img id="water" src={require("./logos/pool_water.jpg")}alt='WATTA'/>
      <img id="tiger"src={require("./logos/tigercrop.png")} alt='tiger'/>
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
              <a href="/info/#about" className="linethru linethru--rev">
                &#x0003C;ABOUT&#x0002F;&#x0003E;</a>
              <a href="/info/#skills" className="linethru linethru--rev">
                &#x0003C;SKILLS&#x0002F;&#x0003E;</a>
              <a href="/info/#experience" className="linethru linethru--rev">
                &#x0003C;EXPERIENCE&#x0002F;&#x0003E;</a>
              <a href="/contact" className="linethru linethru--rev">
                &#x0003C;CONTACT&#x0002F;&#x0003E;</a>
            </div>
          </div>

      </div>
    );
  }
}

export default Splash;
