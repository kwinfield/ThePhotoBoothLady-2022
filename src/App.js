import React from 'react';
import Navbar from './components/navbar/navbar';
import Intro from './components/intro/intro';
import About from './components/about/about';
import OurBooths from './components/our_booths/our_booths';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <About />
      <OurBooths />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
