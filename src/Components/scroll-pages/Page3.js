import React from 'react';
import profilePic from '../../resources/profile.jpg';

class Page3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {mounted: false};
    this.myRef = React.createRef();
  }

  componentDidMount() {
    const textHeight = this.myRef.current.clientHeight;
    const imgHeight = this.myRef.current.clientHeight * 1;

    const height = imgHeight;//imgHeight - textHeight > 100 ? '' : imgHeight;

    this.setState({
      ...this.state,
      mounted: true,
      height: height,
      width: this.myRef.current.clientWidth,
    });
    // console.log(this.myRef.current.clientHeight);
  }

  onclickImage = (modalIsOpened) => {
    // console.log(document.getElementsByTagName('body'))
    document.getElementById('img01').style.display = modalIsOpened ?
        'none' :
        'block';
    // document.getElementsByTagName('body')[0].style.position = modalIsOpened ? 'fixed' : ''
    // document.getElementsByTagName('body')[0].style.overflowY = modalIsOpened ? 'hidden' : 'scroll'
  };

  render() {
    return (
        <div className="w3-container w3-light-grey"
             style={{'padding': '60px 16px', 'maxHeight': '100%'}}>
          {/*style={!isOnWeb ? {'padding': '60px 16px', 'max-height': '100%'} : {'padding': '100px 16px'}} >*/}
          <div className="w3-row-padding">
            <div className="w3-col m6 text-left" ref={this.myRef}>
              <h3 className={'hideme text-left'}
                  style={{
                    'padding': '10px 0px 10px 0px',
                    // 'width': this.state.mounted? this.state.width:''
                  }}
              >
                Let's begin with some basic biography</h3>

              <p className={'hideme'}><br/>I am <b>Lim Shin Wei</b>, 22, a
                Malaysian boy from <b>Butterworth,
                  Penang</b>,
                a small town located at the opposite bank of the lovely
                UNESCO historical heritage city Georgetown.<br/><br/>
                I am a <b>Computer Science graduate</b> from <b>University of
                  Malaya</b>, and
                had been living in the metropolitan city of Kuala Lumpur during
                my studies in the university. <br/><br/> I am a computer
                scientist, programmer, AI developer, software engineer, and also a web
                developer as well in both front-end and backend.
              </p>
              <br/>
              {/*<br/>*/}
              {/*<p>*/}
              {/*  <a href="#work" className="w3-button w3-black"><i*/}
              {/*      className="fa fa-th"> </i> View Our Works</a>*/}
              {/*</p>*/}
            </div>
            <div className="w3-col m6"

                 style={this.state.mounted ?
                     {'height': this.state.height} :
                     {}}
                // style={{'padding': '15px 10px'}}
            >
              <img
                  className="hideme w3-image w3-round-large w3-hover-opacity modimgresp"
                  src={profilePic}
                  alt="ProfilePic"
                  style={{
                    'maxWidth': '100%',//this.state.width,
                    'maxHeight': '100%',
                    'cursor': 'pointer',
                  }}
                  onClick={() => this.onclickImage(false)}
              />
            </div>

          </div>
          <div id="img01" className="w3-modal"
               onClick={() => this.onclickImage(true)}
               style={{
                 'display': 'none',
                 'zIndex': '9990',
               }}>

            <div
                className="w3-modal-content w3-card-4 w3-animate-zoom w3-display-center"
                style={{'width': '50%'}}>
              <img src={profilePic}
                   alt="ProfilePic"
                   style={{'width': '100%', 'cursor': 'pointer'}}/>
            </div>
            {/*<span*/}
            {/*  className="w3-button w3-hover-red w3-xlarge w3-display-topright"*/}
            {/*  style={{"top":"43px"}}>×</span>*/}
          </div>

        </div>
    );

  }
}

export default Page3;