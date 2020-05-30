import React from 'react';
// import './App.css';
import '../styles/App.css';
import Navigation from './Navigation';
import Cta from './Cta';
import HaveSupplies from './HaveSupplies';
import Partners from './Partners';
import Millions from './millions/Millions';

function App() {
  return (
    <div className="body">
      <Navigation />
      <Cta />
      <HaveSupplies />
      <Partners />
      <Millions/>
    </div>
  );
}

export default App;
