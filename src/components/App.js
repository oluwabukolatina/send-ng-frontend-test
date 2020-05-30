import React from 'react';
// import './App.css';
import '../styles/App.css';
import Navigation from './Navigation';
import Cta from './Cta';
import HaveSupplies from './HaveSupplies';
import Partners from './Partners';

function App() {
  return (
    <div className="body">
      <Navigation />
      <Cta />
      <HaveSupplies />
      <Partners/>
    </div>
  );
}

export default App;
