import React from 'react';

class Page3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {mounted: false};
    this.myRef = React.createRef();
  }

  componentDidMount() {
    const textHeight = this.myRef.current.clientHeight
    const imgHeight = this.myRef.current.clientHeight * 1.5

    const height = imgHeight - textHeight > 100 ? '' : imgHeight

    this.setState({...this.state,
      mounted: true,
      height: height,
      width: this.myRef.current.clientWidth
    });
    console.log(this.myRef.current.clientHeight);
  }

  render() {
    const isOnWeb = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent);
    return (
        <div className="w3-container w3-light-grey"
             style={{'padding': '60px 16px', 'max-height': '100%'}}>
          {/*style={!isOnWeb ? {'padding': '60px 16px', 'max-height': '100%'} : {'padding': '100px 16px'}} >*/}
          <h3 className={'text-left'} style={{'padding': '0px 16px'}}>Let's begin with my basic biography</h3>
          <div className="w3-row-padding">
            <div className="w3-col m6 text-left" ref={this.myRef}>

              <p><br/>I am <b>Lim Shin Wei</b>, 22, a Malaysian boy from <b>Butterworth, Penang</b>,
                a small town located at the opposite bank of the lovely
                UNESCO historical heritage city Georgetown.<br/><br/>
                I am a <b>Computer Science graduate</b> from <b>University of Malaya</b>, and
                had been living in the metropolitan city of Kuala Lumpur during
                my studies in the university.</p>
              <br/>
              {/*<br/>*/}
              {/*<p>*/}
              {/*  <a href="#work" className="w3-button w3-black"><i*/}
              {/*      className="fa fa-th"> </i> View Our Works</a>*/}
              {/*</p>*/}
            </div>
            <div className="w3-col m6"

            style={this.state.mounted ? {'height' : this.state.height, } : {}}
                 // style={{'padding': '15px 10px'}}
            >
              <img className="w3-image w3-round-large"
                   src="https://leannetan97.github.io/test.jpg"
                   alt="Buildings"
                   style={{
                     'max-width': '100%',//this.state.width,
                     'max-height' : '100%',
                   }}
              />
            </div>
          </div>
        </div>
    );

  }
}

export default Page3;