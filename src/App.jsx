import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import TokenInfo from './components/TokenInfo';
import Community from './components/Community';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <TokenInfo />
      <Community />
      <Footer />
    </div>
  );
}

export default App;
