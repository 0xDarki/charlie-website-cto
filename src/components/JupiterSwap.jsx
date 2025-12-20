import React, { useEffect } from 'react';

const JupiterSwap = () => {
    useEffect(() => {
        const initJupiter = () => {
            if (window.Jupiter) {
                console.log('Initializing Jupiter Terminal (Method 1)...');
                try {
                    window.Jupiter.init({
                        displayMode: "integrated",
                        integratedTargetId: "integrated-terminal",
                        endpoint: "https://api.mainnet-beta.solana.com",
                        formProps: {
                            fixedOutputMint: true,
                            initialInputMint: "So11111111111111111111111111111111111111112",
                            initialOutputMint: "pcVsWqy6iZGjXku2wmWx71GwkkbMLgfLrzj63Pppump",
                        },
                        branding: {
                            name: "Charlie Swap",
                        }
                    });
                    console.log('Jupiter Terminal initialized successfully.');
                } catch (error) {
                    console.error('Error during Jupiter initialization:', error);
                }
            } else {
                console.log('window.Jupiter not found during init attempt.');
            }
        };

        if (window.Jupiter && window.Jupiter.init) {
            initJupiter();
        } else {
            document.addEventListener('jupiterTerminalReady', initJupiter);
        }

        return () => {
            document.removeEventListener('jupiterTerminalReady', initJupiter);
        };
    }, []);

    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-black text-black mb-6 drop-shadow-sm font-['Baloo_2']">
                        Swap for $CHARLIE
                    </h2>
                    <p className="text-xl text-black opacity-90 leading-relaxed font-bold">
                        "Good Grief! Don't miss the moon!"
                    </p>
                </div>

                <div className="flex justify-center">
                    <div className="relative group">
                        <div className="absolute inset-0 bg-black rounded-3xl transform translate-x-3 translate-y-3 transition-transform group-hover:translate-x-4 group-hover:translate-y-4"></div>
                        <div
                            id="integrated-terminal"
                            className="w-full max-w-[420px] rounded-3xl overflow-hidden border-8 border-black bg-white relative z-10"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JupiterSwap;
