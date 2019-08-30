import React from 'react';
import './App.css';
import Page1 from './Components/scroll-pages/Page1';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div>
      <NavBar/>
      <div className={'App'}>
        <Page1/>
        <Page1/>
        <Page1/>
      </div>
    </div>

  );
}

export default App;
