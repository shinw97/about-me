import React from 'react';
import '../Sections.css';
import $ from 'jquery';

class Page1 extends React.Component {

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

  render() {
    return (
        <div className={'full-height'}>
          <span className="w3-xxxlarge w3-wide">Hi, welcome to my personal profiling page.</span><br/><br/>
          <span className="w3-xlarge">I am Shin Wei, keep scrolling to know more about me!</span>
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