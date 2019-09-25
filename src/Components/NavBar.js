import React from 'react';
import $ from 'jquery';
import './Sections.css';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {openedMenu: false};
  }

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   if(this.state.openedMenu !== prevState.openedMenu){
  //
  //   }
  // }

  componentDidMount() {
    window.onscroll = () => {
      this.scrollBarProgress();
    };
    $(window).scroll(function() {

      /* Check the location of each desired element */
      $('.hideme').each(function(i) {

        let bottom_of_object = $(this).position().top + $(this).outerHeight()/2;
        let bottom_of_window = $(window).scrollTop() + $(window).height();

        /* If the object is completely visible in the window, fade it it */
        if (bottom_of_window > bottom_of_object) {

          // $(this).animate({'opacity': '1'}, 1000);
          $(this).addClass('animated animatedFadeInUp fadeInUp')

        }

      });

    });
  }

  clickOnItems = (e) => {
    if (this.state.openedMenu) {
      // console.log(this.state.openedMenu);
      e.preventDefault();
      const href = e.target.getAttribute('href');
      // console.log(href);
      document.getElementById('navButton').click();

      setTimeout(() => {
        window.location = href;
      }, 500);
      //   $('body').bind(
      //       'transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd',
      //           () => {
      //                   window.location = href;
      //                 });
    }
  };

  changeStateWhileClickOnButton = () => {
    const openedMenu = this.state.openedMenu;
    this.setState({...this.state, openedMenu: !openedMenu}, () => {
      // console.log(this.state.openedMenu);
    });
  };

  scrollBarProgress = () => {
    let winScroll = document.body.scrollTop ||
        document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100 + 2;
    if (document.getElementById('progress')) {
      document.getElementById('progress').style.width = scrolled + '%';
    }
  };

  render() {
    return (
        <div className={'sticky-top'}>
          <nav
              className="navbar navbar-expand-lg bg-light navbar-light shadow">
            <a className="navbar-brand" href="#hello"
               style={{'padding': '0px 30px'}}
               onClick={(e) => this.clickOnItems.bind(this)(e)}
            >
              A Webpage About Me
            </a>
            <button className="navbar-toggler" type="button"
                    data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false"
                    aria-label="Toggle navigation" id={'navButton'}
                    onClick={this.changeStateWhileClickOnButton.bind(this)}
            >
              <span className="navbar-toggler-icon"/>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav"
                 style={{'padding': '0px 50px'}}>
              <ul className="navbar-nav ml-auto"
                  onClick={(e) => this.clickOnItems.bind(this)(e)}>
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
                  <a className="nav-link" href="#contact-me">Contact</a>
                </li>
              </ul>
            </div>
          </nav>
          <div className="progress" style={{'height': '5px'}}>
            <div className="progress-bar bg-success progress-bar-striped" role="progressbar" id={'progress'}
                 aria-valuenow="75" aria-valuemin="0" aria-valuemax="95"
                 style={{'width': '2%'}}/>
          </div>
          <div className="success" id='thanksMessage'>Thanks for your message!
            Will get back to you as soon as possible.
          </div>
          <div className="success" id='copiedEmail'>Email shinw97@hotmail.com
            copied to clipboard!
          </div>
          <div className="warning" id='sendingMessage'>I'm receiving your
            message, hold on...
          </div>
          <div className="failure" id='sendFailed'>Sorry, something has went
            wrong with the server, please try again later or contact me in
            other ways stated.
          </div>
        </div>
    );
  }
}

export default NavBar;