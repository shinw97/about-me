import React from 'react';

class InfoBar extends React.Component {
  render() {
    return (
        <div
            className="w3-container w3-row w3-center w3-dark-grey" style={{'padding': '30px 0px'}}>
          <div className="w3-quarter">
            Latest Education<br/>
            <span className="w3-xlarge">University of Malaya</span>
          </div>
          <div className="w3-quarter">
            With Degree<br/>
            <span className="w3-xlarge">Bachelor of Computer Science (Artificial Intelligence)</span>
          </div>
          <div className="w3-quarter">
            Started on<br/>
            <span className="w3-xlarge">September 2016</span>

          </div>
          <div className="w3-quarter">
            Graduated on<br/>
            <span className="w3-xlarge">February 2020</span>
          </div>
        </div>
    );
  }
}

export default InfoBar;