import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-charlie-yellow min-h-screen flex flex-col items-center justify-center p-6 text-center border-b-8 border-black">
      {/* Decorative Zig Zag pattern at the bottom inside the container if needed, 
          but border-black is good for comic style */}
      
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-8 relative z-10">
        <div className="relative">
          <div className="absolute inset-0 bg-black rounded-full transform translate-x-2 translate-y-2"></div>
          <img 
            src="https://preview.redd.it/is-charlie-brown-the-genxiest-v0-gll3maho447e1.jpeg?auto=webp&s=7a2edeb8b30c58615d94ad200ec6ebf9ef74930d" 
            alt="Charlie Brown Token" 
            className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-black object-cover relative z-10"
          />
        </div>

        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-black text-black drop-shadow-sm tracking-tight">
            Charlie Brown
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-black bg-white inline-block px-4 py-2 border-4 border-black rounded-xl transform -rotate-2">
            $CHARLIE
          </h2>
          <p className="text-xl md:text-2xl font-bold text-black max-w-2xl mx-auto mt-4">
            "Good Grief! The First Bitcoin Blockhead!"
          </p>
        </div>

        <a 
          href="https://pump.fun/coin/pcVsWqy6iZGjXku2wmWx71GwkkbMLgfLrzj63Pppump"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-3 bg-charlie-red text-white text-2xl font-bold px-8 py-4 rounded-full border-4 border-black hover:transform hover:-translate-y-1 hover:shadow-xl transition-all"
        >
          <span className="relative z-10 flex items-center gap-2">
            Buy Now <ArrowRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
          </span>
          <div className="absolute inset-0 bg-black rounded-full transform translate-x-2 translate-y-2 -z-10 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform"></div>
        </a>
      </div>
      
      {/* Zig Zag Stripe Pattern to mimic the shirt */}
      <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
         <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1200 120">
            <path d="M0,120 L0,60 L60,0 L120,60 L180,0 L240,60 L300,0 L360,60 L420,0 L480,60 L540,0 L600,60 L660,0 L720,60 L780,0 L840,60 L900,0 L960,60 L1020,0 L1080,60 L1140,0 L1200,60 L1200,120 Z" fill="black" />
         </svg>
      </div>
    </div>
  );
};

export default Hero;
