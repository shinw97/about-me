import React from 'react';

class NavBar extends React.Component {
  componentDidMount() {
    window.onscroll = () => {
      this.scrollBarProgress()
    };
  }

  scrollBarProgress = () => {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100 + 2;
    document.getElementById("progress").style.width = scrolled + "%";
  }

  render() {
    return (
        <div className={'sticky-top'}>
          <nav
              className="navbar navbar-expand-lg bg-light navbar-light shadow">
            <a className="navbar-brand" href="#hello"
               style={{'padding': '0px 30px'}}>A Webpage About Me</a>
            <button className="navbar-toggler" type="button"
                    data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false"
                    aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"/>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav"
                 style={{'padding': '0px 50px'}}>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#overview">Overview</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#biography">Biography</a>
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
          <div className="progress" style={{'height': '5px'}}>
            <div className="progress-bar" role="progressbar" id={'progress'}
                 aria-valuenow="75" aria-valuemin="0" aria-valuemax="95" style={{'width':'2%'}}/>
          </div>
        </div>
    );
  }
}

export default NavBar;