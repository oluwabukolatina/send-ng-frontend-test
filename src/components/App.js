import React from 'react';
// import './App.css';
import '../styles/App.css';
import Navigation from './Navigation';
import Cta from './Cta';
import HaveSupplies from './HaveSupplies';

function App() {
  return (
    <div className="body">
      <Navigation />
      <Cta />
      <HaveSupplies/>
    </div>
  );
}

export default App;
