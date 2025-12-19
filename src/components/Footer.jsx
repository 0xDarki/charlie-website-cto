import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-6 text-center border-t-4 border-white">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
        <h3 className="text-2xl font-black text-charlie-yellow">$CHARLIE</h3>
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Charlie Brown Memecoin. All rights reserved.
        </p>
        <p className="text-xs text-gray-500 max-w-md">
          This is a memecoin for entertainment purposes only. Not financial advice. Good grief!
        </p>
      </div>
    </footer>
  );
};

export default Footer;
