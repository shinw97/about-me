import React from 'react';

class Page3 extends React.Component {

  render() {
    const isOnWeb = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    return (
        <div className="w3-container w3-light-grey"
             style={{'padding': '60px 16px', 'max-height': '100%'}} >
          {/*style={!isOnWeb ? {'padding': '60px 16px', 'max-height': '100%'} : {'padding': '100px 16px'}} >*/}
          <div className="w3-row-padding" >
            <div className="w3-col m6 text-left" ref={this.myRef}>
              <h3>And lets begin with my basic biography</h3>
              <p><br/>I am Lim Shin Wei, 22, a Malaysian boy from Butterworth,
                Penang, a small town located at the opposite bank of the lovely
                UNESCO historical heritage city Georgetown.<br/><br/>
                I am a Computer Science graduate from University of Malaya, and
                had been staying in the metropolis city of Kuala Lumpur during
                my studies in the university.</p>
              {/*<p>*/}
              {/*  <a href="#work" className="w3-button w3-black"><i*/}
              {/*      className="fa fa-th"> </i> View Our Works</a>*/}
              {/*</p>*/}
            </div>
            <div className="w3-col m6">
              <img className="w3-image w3-round-large"
                   src="https://leannetan97.github.io/test.jpg"
                   alt="Buildings"
                   style={{'max-height': '325px'}}
                   // style={!isOnWeb ? {'max-height': '325px'} : {}}
              />
            </div>
          </div>
        </div>
    );

  }
}

export default Page3;