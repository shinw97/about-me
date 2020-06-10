import React from 'react';
import '../Sections.css';
import $ from 'jquery';

class Page1 extends React.Component {

  componentDidMount() {
    let i = 0;
    this.typeWriterEffect(i);
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

  typeWriterEffect = (i, s = true) => {
    let txt = 'I am Shin Wei, keep scrolling to know more about ';

    if (i < txt.length) {
      document.getElementById(
          'type-effect').innerHTML = document.getElementById(
          'type-effect').innerHTML.slice(0, i) + txt.charAt(i) + '|';
      i++;
      setTimeout(() => this.typeWriterEffect(i), 75);
    } else {
      if (s) {
        document.getElementById(
            'type-effect').innerHTML = document.getElementById('type-effect')
            .innerHTML
            .slice(0, i) + 'ME!|';
        setTimeout(() => this.typeWriterEffect(i, false), 256);
      } else {
        document.getElementById(
            'type-effect').innerHTML = document.getElementById(
            'type-effect').innerHTML.slice(0, i) + '|';
        setTimeout(() => this.typeWriterEffect(i, true), 256);
      }
    }
  };

  render() {

    return (
        <div className={'full-height-0'}>
          <span className="w3-xxxlarge w3-wide">Hi, welcome to my personal profile site.</span><br/><br/>
          <span className="w3-xlarge" id={'type-effect'}>_</span>
          <div
              className="w3-display-bottomleft w3-text-light-grey w3-xxlarge page1-additional"
              style={{padding: '24px 64px'}}>

            <a href={'https://www.github.com/shinw97'}
               className="fa fa-github w3-hover-opacity"
               target={'_blank'}
               style={{
                 paddingRight: '24px',
                 color: 'inherit',
                 textDecoration: 'none',
               }}/>


            <a href={'https://www.linkedin.com/in/shinw97'}
               className="fa fa-linkedin w3-hover-opacity"
               target={'_blank'}
               style={{color: 'inherit', textDecoration: 'none'}}/>
          </div>

          <div
              className="w3-display-bottomright w3-text-grey w3-large page1-additional"
              style={{padding: '24px 48px'}}>
            GIF Source: giphy.com
          </div>

        </div>
    );
  }
}

export default Page1;