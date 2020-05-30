import React from 'react';
import Navigation from './layouts/Navigation';
import Cta from './home/Cta';
import HaveSupplies from './home/HaveSupplies';
import Partners from './home/Partners';
import Millions from './home/millions/Millions';
import HowItWorks from './home/how/HowItWorks';
import AboutUs from './home/AboutUs';
import GetInvolved from './home/GetInvolved';
import Footer from './layouts/Footer';
import '../styles/App.css';

const Home = () => {
  return (
    <div className="body">
      <Navigation />
      <Cta />
      <HaveSupplies />
      <Partners />
      <Millions />
      <HowItWorks />
      <AboutUs />
      <GetInvolved />
      <Footer />
    </div>
  );
};

export default Home;
