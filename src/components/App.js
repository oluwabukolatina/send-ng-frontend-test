import React from 'react';
// import './App.css';
import '../styles/App.css';
import Navigation from './layouts/Navigation';
import Cta from './Cta';
import HaveSupplies from './HaveSupplies';
import Partners from './Partners';
import Millions from './millions/Millions';
import Footer from './layouts/Footer';

function App() {
  return (
    <div className="body">
      <Navigation />
      <Cta />
      <HaveSupplies />
      <Partners />
      <Millions />
      <Footer/>
    </div>
  );
}

export default App;
