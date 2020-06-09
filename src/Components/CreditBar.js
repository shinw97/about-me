import React from 'react';

class CreditBar extends React.Component {
  render() {
    return (
        <footer className={'page-footer'}>
          <div className={'container text-center'}
               style={{'padding': '20px 15px'}}>
            <p>This webpage is:</p>
            <p><i className="fa fa-bullseye"/> Developed using React JS Framework, and </p>
            <p><i className="fa fa-bullseye"/> Powered by W3.CSS, Bootstrap 4.</p>

          </div>
          <div className="footer-copyright text-center py-3">© 2020  <i className="fa fa-github"/>
            <span> <a
                href={'https://github.com/shinw97'}>https://github.com/shinw97</a></span>
          </div>
        </footer>
    );
  }
}

export default CreditBar;