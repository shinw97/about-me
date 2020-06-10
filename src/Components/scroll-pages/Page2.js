import React from 'react';
import '../Sections.css';

class Page2 extends React.Component {

  render() {
    return (
        <div className="w3-container w3-raleway" style={{"padding":"100px 16px"}} id="about">
          <h3 className="hideme w3-center">WHO AM I?</h3>
          <p className="hideme w3-center w3-large">Overview and some simple facts about what I am doing.</p>
          <div className="w3-row-padding w3-center" style={{"marginTop":"64px"}}>
            <div className="hideme w3-quarter">
              <i className="fa fa-desktop w3-margin-bottom w3-jumbo w3-center"/>
              <p className="w3-large">A Computer Scientist,</p>
              <p>Programmer, developer, software engineer,... po-tay-to po-tah-to. I could be all of these and a <b>Computer Scientist</b> would be a better representation about me.</p>
            </div>
            <div className="hideme w3-quarter">
              <i className="material-icons w3-margin-bottom w3-jumbo">memory</i>
              <p className="w3-large">AI Developer,</p>
              <p>Specifically, I'm an <b>Artificial Intelligence</b> programme graduate. Deep Learning, Computer Vision, Fuzzy Logic... these terminologies aren't strange to me.</p>
            </div>
            <div className="hideme w3-quarter">
              <i className="fa fa-wpexplorer w3-margin-bottom w3-jumbo"/>
              <p className="w3-large">and Knowledge Discoverer,</p>
              <p>New technologies and knowledge together with vast opportunities are rapidly emerging in the fast-changing era. In any circumstances, <b>Knowledge Discovery</b> is my first priority.</p>
            </div>
            <div className="hideme w3-quarter">
              <i className="fa fa-wrench w3-margin-bottom w3-jumbo"/>
              <p className="w3-large">with some skills.</p>
              <p>Apart from my obsession to all sorts of AI techniques especially Deep Learning and AI frameworks, I also have experience in front-end and back-end web development.</p>
            </div>
          </div>
        </div>
    );
  }
}

export default Page2;