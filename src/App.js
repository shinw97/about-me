import React from 'react';
import './App.css';
import Page1 from './Components/scroll-pages/Page1';
import NavBar from './Components/NavBar';
import Page2 from './Components/scroll-pages/Page2';
import CreditBar from './Components/CreditBar';

function App() {
  return (
    <div>
      <NavBar/>
      <div className={'App'}>
        <Page1/>
        <Page2/>
        <Page1/>
      </div>
      <CreditBar/>
    </div>

  );
}

export default App;
