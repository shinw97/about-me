import React from 'react';
import '../Sections.css'

class InfoBar extends React.Component {
  render() {
    return (
        <div
            className="w3-container w3-row w3-center w3-dark-grey" style={{'padding': '30px 0px'}}>
          <div className="hideme w3-quarter w3-quarter-padding">
            Latest Education at<br/>
            <span className="w3-xlarge">University of Malaya</span>
          </div>
          <div className="hideme w3-quarter w3-quarter-padding">
            With Degree in<br/>
            <span className="w3-xlarge">Bachelor of Computer Science (Artificial Intelligence)</span>
          </div>
          <div className="hideme w3-quarter w3-quarter-padding">
            Started on<br/>
            <span className="w3-xlarge">September 2016</span>

          </div>
          <div className="hideme w3-quarter w3-quarter-padding">
            Graduated on<br/>
            <span className="w3-xlarge">February 2020</span>
          </div>
        </div>
    );
  }
}

export default InfoBar;