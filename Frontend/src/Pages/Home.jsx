import React from 'react';

// Import components
import Hero from '../Components/Hero';
import Services from '../Components/Services';
import About from '../Components/About';
import Stats from '../Components/Stats';
import Testimonials from '../Components/Testimonials';
import CallToAction from '../Components/CallToAction';
import AutoDismissPopup from '../Components/AutoDismissPopup.jsx';
const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Stats />
      <Testimonials />
      <CallToAction />
      <AutoDismissPopup />
    </>
  );
};

export default Home;
