import React from 'react';
import './App.css';
import Page1 from './Components/scroll-pages/Page1';
import NavBar from './Components/NavBar';
import Page2 from './Components/scroll-pages/Page2';
import CreditBar from './Components/CreditBar';
import Page3 from './Components/scroll-pages/Page3';
import InfoBar from './Components/scroll-pages/InfoBar';

function App() {
  return (
    <div>
      <NavBar/>
      <div className={'App'}>
        <Page1/>
        <Page2/>
        <Page3/>
        <InfoBar/>
        <Page1/>

      </div>
      <CreditBar/>
    </div>

  );
}

export default App;
