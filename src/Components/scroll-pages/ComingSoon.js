import React from 'react';
import '../Sections.css';

class ComingSoon extends React.Component {

  render() {
    return (
        <div className={'full-height-1'}>
          <span className={'w3-wide'}>
            More Coming Soon.
          </span>
          <div
              className="w3-text-grey w3-large page1-additional"
              style={{padding: '24px 48px', right: 0, bottom: 0}}
          >
            (GIF Source: giphy.com)
          </div>
        </div>
    );
  }
}

export default ComingSoon;