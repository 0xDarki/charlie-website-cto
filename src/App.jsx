import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import TokenInfo from './components/TokenInfo';
import PFPGenerator from './components/PFPGenerator';
import Community from './components/Community';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <TokenInfo />
      <PFPGenerator />
      <Community />
      <Footer />
    </div>
  );
}

export default App;
