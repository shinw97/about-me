import React from 'react';

class CreditBar extends React.Component {
  render() {
    return (
        <footer className={'page-footer'}>
          <div className={'container text-center'}
               style={{'padding': '20px 15px'}}>
            <p>This webpage is:</p>
            <p>> Powered by W3.CSS, Bootstrap 4 and</p>
            <p>> Developed using React JS.</p>

          </div>
          <div className="footer-copyright text-center py-3">© 2019 Copyright:
            <span> shinw97</span>
          </div>
        </footer>
    );
  }
}

export default CreditBar;