import React from 'react';
import '../Sections.css';

class Page2 extends React.Component {

  render() {
    return (
        <div className="w3-container" style={{"padding":"100px 16px"}} id="about">
          <h3 className="w3-center">WHAT AM I?</h3>
          <p className="w3-center w3-large">Some overview simple facts about me.</p>
          <div className="w3-row-padding w3-center" style={{"margin-top":"64px"}}>
            <div className="w3-quarter">
              <i className="fa fa-desktop w3-margin-bottom w3-jumbo w3-center"/>
              <p className="w3-large">A Computer Scientist,</p>
              <p>Programmer, developer, software engineer,... potayto-potahto, they're not very distinct in general. I am all of these and a computer scientist would be a better summary to these terminologies.</p>
            </div>
            <div className="w3-quarter">
              <i className="material-icons w3-margin-bottom w3-jumbo">memory</i>
              <p className="w3-large">AI Developer,</p>
              <p>I am an Artificial Intelligence programme graduate. Deep Learning, Computer Vision, Face Recognition, Statistical Regressing Predictions... these terminologies aren't stranger to me, they are part of my knowledge.</p>
            </div>
            <div className="w3-quarter">
              <i className="fa fa-wpexplorer w3-margin-bottom w3-jumbo"/>
              <p className="w3-large">and Knowledge Discoverer,</p>
              <p>New technologies and knowledge, together with vast opportunities are constantly emerging in this era powered by Industry 4.0. Knowledge discovery would be my first priority in every decision made.</p>
            </div>
            <div className="w3-quarter">
              <i className="fa fa-wrench w3-margin-bottom w3-jumbo"/>
              <p className="w3-large">with some hard-skills.</p>
              <p>As an AI programme graduate, I am obsessed to all sorts of AI techniques especially Deep Learning and Data Science frameworks. I also have experience in developing front-end and back-end web application.</p>
            </div>
          </div>
        </div>
    );
  }
}

export default Page2;