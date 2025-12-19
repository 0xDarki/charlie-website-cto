import React from 'react';
import { Bitcoin } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 px-6 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 bg-charlie-yellow border-2 border-black px-4 py-1 rounded-full text-sm font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Bitcoin className="w-4 h-4" />
              <span>Origins Story</span>
            </div>
            
            <h2 className="text-5xl font-black text-black leading-tight">
              Bitcoins, You Blockhead!
            </h2>
            
            <div className="prose prose-lg text-black font-medium leading-relaxed bg-gray-50 p-6 rounded-2xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <p className="mb-4">
                In 2013, a comic strip titled <strong>"Bitcoins, you blockhead"</strong> was posted. The strip involved Charlie Brown asking what Lucy wanted for Christmas.
              </p>
              <p>
                Her reply? <span className="text-charlie-red font-black text-xl">"BITCOINS"</span>.
              </p>
              <p className="mt-4">
                This moment makes Charlie Brown the first widely known character to be associated with Bitcoin, setting the foundation for the entirety of Crypto history! We are here to reclaim that history.
              </p>
            </div>
          </div>

          <div className="flex-1 relative">
             <div className="absolute inset-0 bg-charlie-blue rounded-3xl transform translate-x-4 translate-y-4 border-4 border-black"></div>
             <div className="bg-white border-4 border-black rounded-3xl p-8 relative z-10 flex flex-col items-center text-center">
                <div className="w-full h-64 bg-gray-100 rounded-xl border-2 border-black mb-4 flex items-center justify-center overflow-hidden">
                    <img 
                      src="/comic-strip.jpeg" 
                      alt="Bitcoins, you blockhead comic strip" 
                      className="w-full h-full object-contain"
                    />
                </div>
                <p className="font-bold text-lg">"What do you want for Christmas?"</p>
                <p className="font-black text-2xl text-charlie-red">"BITCOINS!"</p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
