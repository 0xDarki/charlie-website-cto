import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import TokenInfo from './components/TokenInfo';
import JupiterSwap from './components/JupiterSwap';
import PFPGenerator from './components/PFPGenerator';
import Community from './components/Community';
import Footer from './components/Footer';
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Analytics />
      <Hero />
      <About />
      <TokenInfo />
      <JupiterSwap />
      <PFPGenerator />
      <Community />
      <Footer />
    </div>
  );
}

export default App;
