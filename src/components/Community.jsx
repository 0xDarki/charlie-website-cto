import React from 'react';
import { Twitter, MessageCircle } from 'lucide-react';

const Community = () => {
  return (
    <section className="py-20 px-6 bg-charlie-yellow relative border-t-8 border-black">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <h2 className="text-5xl md:text-7xl font-black text-black drop-shadow-sm">
          Join the Gang!
        </h2>
        <p className="text-xl font-bold max-w-2xl mx-auto">
          Don't be a blockhead! Join our community to get the latest updates and memes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <a 
            href="https://x.com/i/communities/2001437609638400327"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <div className="absolute inset-0 bg-black rounded-2xl transform translate-x-3 translate-y-3 transition-transform group-hover:translate-x-4 group-hover:translate-y-4"></div>
            <div className="relative bg-black text-white p-8 rounded-2xl border-4 border-black hover:bg-gray-900 transition-colors flex flex-col items-center gap-4">
              <Twitter className="w-12 h-12" />
              <span className="text-2xl font-black">Twitter Community</span>
            </div>
          </a>

          <a 
            href="https://pump.fun/coin/pcVsWqy6iZGjXku2wmWx71GwkkbMLgfLrzj63Pppump"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <div className="absolute inset-0 bg-black rounded-2xl transform translate-x-3 translate-y-3 transition-transform group-hover:translate-x-4 group-hover:translate-y-4"></div>
            <div className="relative bg-charlie-blue text-white p-8 rounded-2xl border-4 border-black hover:bg-blue-600 transition-colors flex flex-col items-center gap-4">
              <MessageCircle className="w-12 h-12" />
              <span className="text-2xl font-black">Pump.fun</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Community;
