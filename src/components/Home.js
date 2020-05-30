import React from 'react';
import Navigation from './layouts/Navigation';
import Cta from './Cta';
import HaveSupplies from './HaveSupplies';
import Partners from './Partners';
import Millions from './millions/Millions';
import HowItWorks from './how/HowItWorks';
import AboutUs from './AboutUs';
import GetInvolved from './GetInvolved';
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
