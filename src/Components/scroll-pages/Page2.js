import React from 'react';
import '../Sections.css';

class Page2 extends React.Component {

  render() {
    return (
        <div className="w3-container" style={{"padding":"100px 16px"}} id="about">
          <h3 className="w3-center">ABOUT THE COMPANY</h3>
          <p className="w3-center w3-large">Key features of our company</p>
          <div className="w3-row-padding w3-center" style={{"margin-top":"64px"}}>
            <div className="w3-quarter">
              <i className="fa fa-desktop w3-margin-bottom w3-jumbo w3-center"/>
              <p className="w3-large">Responsive</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.</p>
            </div>
            <div className="w3-quarter">
              <i className="fa fa-heart w3-margin-bottom w3-jumbo"/>
              <p className="w3-large">Passion</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.</p>
            </div>
            <div className="w3-quarter">
              <i className="fa fa-diamond w3-margin-bottom w3-jumbo"/>
              <p className="w3-large">Design</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.</p>
            </div>
            <div className="w3-quarter">
              <i className="fa fa-cog w3-margin-bottom w3-jumbo"/>
              <p className="w3-large">Support</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.</p>
            </div>
          </div>
        </div>
    );
  }
}

export default Page2;