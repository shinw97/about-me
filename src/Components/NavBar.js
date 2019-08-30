import React from 'react';

class NavBar extends React.Component {
  render() {
    return (
        <nav
            className="navbar navbar-expand-lg bg-light navbar-light sticky-top">
          <a className="navbar-brand" href="#">Logo</a>
          <button className="navbar-toggler" type="button"
                  data-toggle="collapse" data-target="#navbarNav"
                  aria-controls="navbarNav" aria-expanded="false"
                  aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
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