import React from 'react';
import './App.css';
import Page1 from './Components/scroll-pages/Page1';
import NavBar from './Components/NavBar';
import Page2 from './Components/scroll-pages/Page2';
import CreditBar from './Components/CreditBar';
import Page3 from './Components/scroll-pages/Page3';
import InfoBar from './Components/scroll-pages/InfoBar';
import ScrollableAnchor from 'react-scrollable-anchor';
import ContactMe from './Components/scroll-pages/ContactMe';
import ComingSoon from './Components/scroll-pages/ComingSoon';

function App() {
  return (
      <div>
        <NavBar/>
        <div className={'App'}>
          <ScrollableAnchor id={'hello'}>
            <div/>
          </ScrollableAnchor>
          <Page1/>

          <ScrollableAnchor id={'overview'}>
            <div/>
          </ScrollableAnchor>
          <Page2/>

          <ScrollableAnchor id={'biography'}>
            <div/>
          </ScrollableAnchor>
          <Page3/>
          <InfoBar/>
          <ComingSoon/>

          <ScrollableAnchor id={'contact-me'}>
            <div/>
          </ScrollableAnchor>
          <ContactMe/>

        </div>
        <CreditBar/>
      </div>

  );
}

export default App;
