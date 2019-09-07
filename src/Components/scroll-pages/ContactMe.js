import React from 'react';
import {ReCaptcha} from 'react-recaptcha-google';
import '../Sections.css';
import $ from 'jquery';

class ContactMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {verified: false, clickedOnSend: false};
  }

  componentDidMount() {
    if (this.captchaDemo) {
      console.log('started, just a second...');
      this.captchaDemo.reset();
    }
  }

  copyToClipBoard = () => {
    const dummy = document.createElement('textarea');
    document.body.appendChild(dummy);
    dummy.value = 'shinw97@hotmail.com';
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
    $('#copiedEmail').fadeIn(300).delay(3000).fadeOut(400);
    // alert('Copied email to clipboard!\nshinw97@hotmail.com');

  };

  onLoadRecaptcha = () => {
    if (this.captchaDemo) {
      this.captchaDemo.reset();
    }
  };
  verifyCallback = (recaptchaToken) => {
    // Here you will get the final recaptchaToken!!!
    // console.log(recaptchaToken, '<= your recaptcha token');
    const formEl = document.forms.messageForm;

    let formData = new FormData();
    const keys = ['Name', 'Email', 'Subject', 'Message', 'g-recaptcha-response'];

    for (let i = 0; i < keys.length; i++) {
      formData.append(keys[i], formEl.elements[keys[i]].value);
      // console.log(formEl.elements[keys[i]].value)
    }
    // console.log(formData.entries())

    const SEND_MAIL_API = 'https://fierce-refuge-39123.herokuapp.com/send-message/';

    fetch(SEND_MAIL_API, {
      method: 'post',
      body: formData,
    }).then(res => res.json())
        .then(resp => {
          if (resp.verified) {
            $('#thanksMessage').fadeIn(300).delay(3000).fadeOut(400);
          } else {
            $('#sendFailed').fadeIn(300).delay(3000).fadeOut(400);
          }
        });
    this.setState({...this.state, clickedOnSend: false, verified: false});
    document.forms.messageForm.reset();
  };

  onExpired = () => {
    this.setState({...this.state, verified: false});
  };

  clickOnSend = (e) => {
    e.preventDefault();
    if (!document.forms.messageForm.checkValidity()) {
      document.forms.messageForm.reportValidity();
      return;
    }
    // console.log('hey')
    if (!this.state.clickedOnSend) {
      this.setState({...this.state, clickedOnSend: true});
    }
  };

  render() {
    const isMobile = window.matchMedia(
        'only screen and (max-width: 1024px)').matches;
    // alert(isMobile);

    const email = isMobile ?
        <div>
          <a href={'mailto:shinw97@hotmail.com'}
             style={{'textDecoration': 'none'}}>
            <button className="btn rounded-circle shadow"
                    style={{
                      'width': '70px',
                      'height': '70px',
                      'margin': 'auto',
                    }}>
              <i className="fa fa-envelope fa-fw w3-xxlarge"/>
            </button>
          </a>
        </div>
        :
        <div className="card mb-3 shadow w3-hover-light-grey"
             style={{
               'width': '30%',
               'margin': 'auto',
               'cursor': 'pointer',
             }}
        >
          <div className="row no-gutters" data-toggle="tooltip"
               data-placement="right" title="Click to copy"
               onClick={this.copyToClipBoard}
              // style={{'minWidth': '100%'}}
          >
            <div className="col-md-4" style={{'margin': 'auto'}}>
              <i className="fa fa-envelope fa-fw w3-xxlarge"/>
            </div>
            <div className="col-md-8">
              <div className="card-body text-left">
                <h5 className="card-title">Email</h5>
                <p className="card-text">shinw97@hotmail.com</p>
              </div>
            </div>
          </div>
        </div>;

    return (
        <div className="w3-container w3-light-grey"
             style={{'padding': '100px 16px'}}
             id="contact">
          <h3 className="w3-center">CONTACT</h3>
          <p className="w3-center w3-large">Feel free to contact me at:</p>
          <div style={{'padding': '10px'}}>
            {email}
            <br/>
            <p className="w3-center w3-large">... or drop a message here!</p>
            <form action=""
                  method={'post'}
                  target="invisible" id={'messageForm'}
                  style={{
                    'width': isMobile ? '100%' : '60%',
                    'margin': 'auto',
                  }}>
              <p><input className="w3-input w3-border rounded" type="text"
                        placeholder="Name" required name="Name"/></p>
              <p><input className="w3-input w3-border rounded" type="text"
                        placeholder="Email" required name="Email"/></p>
              <p><input className="w3-input w3-border rounded" type="text"
                        placeholder="Subject" required name="Subject"/></p>
              <p>
                <textarea className="w3-input w3-border rounded" rows="4"
                          cols="50"
                          placeholder={'Message'} required name="Message"
                          form="messageForm"/>
              </p>

              <p>
                <button className="w3-left w3-button w3-black rounded"
                        type="button"
                        id={'send'}
                        disabled={this.state.clickedOnSend}
                        onClick={
                          this.clickOnSend.bind(this)
                        }
                >
                  <i className="fa fa-paper-plane"/> SEND MESSAGE
                </button>
              </p>

              {this.state.clickedOnSend ?
                  <div>
                    <ReCaptcha
                        ref={(el) => {
                          this.captchaDemo = el;
                        }}
                        size="normal"
                        data-theme="dark"
                        render="explicit"
                        sitekey="6Ld_OrYUAAAAAIldteNy4tK3MEMaV9vfiARyV8_W"
                        onloadCallback={this.onLoadRecaptcha.bind(this)}
                        verifyCallback={this.verifyCallback.bind(this)}
                        expiredCallback={this.onExpired.bind(this)}
                    />
                  </div>
                  : null
              }
            </form>
            <iframe id={'invisible'} name="invisible"
                    style={{'display': 'none'}}/>
          </div>

        </div>
    );
  }
}

export default ContactMe;

// {/*<ul className={'w3-ul w3-card-4'}>*/}
// {/*  /!*<li className={'w3-col w3-padding-16 w3-hover-light-grey'}>*!/*/}
// {/*  /!*  <p>*!/*/}
// {/*  /!*    <i className="fa fa-envelope fa-fw w3-xxlarge"/> Email:*!/*/}
// {/*  /!*    shinw97@gmail.com*!/*/}
// {/*  /!*  </p>*!/*/}
// {/*  /!*</li>*!/*/}
// {/*  <li className="w3-padding-16 w3-hover-light-grey">*/}
// {/*    <i className="fa fa-envelope fa-fw w3-xxlarge w3-left w3-margin-right"*/}
// {/*         style={{'width': '50px'}}/>*/}
// {/*    <div className={'text-left'}>*/}
// {/*      <span className="w3-large">Mike</span><br/>*/}
// {/*      <span>Web Designer</span>*/}
// {/*    </div>*/}
// {/*  </li>*/}
// {/*</ul>*/}
