import React, { useState } from 'react';
import { Copy, Check, ExternalLink } from 'lucide-react';

const TokenInfo = () => {
  const [copied, setCopied] = useState(false);
  const address = "pcVsWqy6iZGjXku2wmWx71GwkkbMLgfLrzj63Pppump";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 bg-black text-white px-6">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-black text-charlie-yellow">
          Token Contract
        </h2>
        
        <div className="relative group">
          <div className="absolute inset-0 bg-charlie-yellow rounded-2xl transform translate-x-2 translate-y-2 transition-transform group-hover:translate-x-3 group-hover:translate-y-3"></div>
          <div className="relative bg-white text-black p-4 md:p-8 rounded-2xl border-4 border-charlie-yellow flex flex-col md:flex-row items-center justify-between gap-4">
            
            <div className="flex-1 overflow-hidden w-full">
              <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Contract Address</p>
              <p className="font-mono text-lg md:text-2xl font-bold truncate">
                {address}
              </p>
            </div>

            <button 
              onClick={copyToClipboard}
              className="bg-black text-white p-3 rounded-xl hover:bg-gray-800 transition-colors flex items-center gap-2 font-bold min-w-[140px] justify-center"
            >
              {copied ? (
                <>
                  <Check className="w-5 h-5 text-green-400" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-5 h-5" />
                  <span>Copy Address</span>
                </>
              )}
            </button>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <a 
            href={`https://solscan.io/token/${address}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-xl font-bold transition-colors border-2 border-gray-600"
          >
            View on Solscan <ExternalLink className="w-4 h-4" />
          </a>
          <a 
            href="https://pump.fun/coin/pcVsWqy6iZGjXku2wmWx71GwkkbMLgfLrzj63Pppump"
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-charlie-blue text-white hover:bg-blue-600 px-6 py-3 rounded-xl font-bold transition-colors border-2 border-black"
          >
            View on Pump.fun <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TokenInfo;
