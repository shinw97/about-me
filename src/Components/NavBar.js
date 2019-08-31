import React from 'react';

class NavBar extends React.Component {
  render() {
    return (
        <nav
            className="navbar navbar-expand-lg bg-light navbar-light sticky-top shadow">
          <a className="navbar-brand" href="#" style={{'padding': '0px 30px'}}>A Webpage About Me</a>
          <button className="navbar-toggler" type="button"
                  data-toggle="collapse" data-target="#navbarNav"
                  aria-controls="navbarNav" aria-expanded="false"
                  aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav" style={{'padding': '0px 50px'}}>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item" >
                <a className="nav-link" href="#">Link 1</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link 2</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link 3</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link 4</a>
              </li>
            </ul>
          </div>
        </nav>
    );
  }
}

export default NavBar;