import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Download, Sparkles, X, Palette, Shuffle, User, Briefcase, Sun, Layers } from 'lucide-react';

const PFPGenerator = () => {
  // Asset Definitions
  const BASES = [
    { id: 'classic', name: 'Classic Charlie', url: '/models/600x600__1_-removebg-preview.png' },
    { id: 'walking', name: 'Walking Charlie', url: '/models/Charlie_Brown_ 28Peanuts_2014 29.png' },
    { id: 'smiling', name: 'Smiling Charlie', url: '/models/Charlie_Brown_smiling.png' },
  ];

  const BG_COLORS = [
    { name: 'Charlie Yellow', value: '#FFD54F' },
    { name: 'Sky Blue', value: '#81D4FA' },
    { name: 'Peppermint Green', value: '#A5D6A7' },
    { name: 'Snoopy White', value: '#F5F5F5' },
    { name: 'Charlie Red', value: '#EF5350' },
    { name: 'Woodstock Yellow', value: '#FFF176' },
  ];

  // Precision Offset Matrix
  const OFFSETS = {
    classic: { scale: 0.8 },
    walking: { scale: 0.82 },
    smiling: { scale: 0.85 },
  };

  // State
  const [activeTab, setActiveTab] = useState('base');
  const [selections, setSelections] = useState({
    base: BASES[0],
    bgColor: BG_COLORS[0].value,
  });
  const [processedImage, setProcessedImage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [borderWidth, setBorderWidth] = useState(16);

  const canvasRef = useRef(null);

  const generatePFP = useCallback(async () => {
    setIsProcessing(true);
    const canvas = canvasRef.current;
    if (!canvas) return;

    const size = 2048;
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    const loadImage = (url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = `${url}?cache=${Math.random()}`;
      });
    };

    try {
      // 1. BG
      ctx.fillStyle = selections.bgColor;
      ctx.fillRect(0, 0, size, size);

      ctx.save();
      ctx.beginPath();
      ctx.arc(size / 2, size / 2, size / 2 - borderWidth, 0, Math.PI * 2);
      ctx.clip();

      const config = OFFSETS[selections.base.id];

      // 2. Base Character
      const baseImg = await loadImage(selections.base.url);
      const bScale = (size * config.scale) / Math.max(baseImg.width, baseImg.height);
      const bw = baseImg.width * bScale;
      const bh = baseImg.height * bScale;
      const charY = (size - bh) / 2 + (size * 0.05);
      ctx.drawImage(baseImg, (size - bw) / 2, charY, bw, bh);

      ctx.restore();

      // 3. Border
      ctx.strokeStyle = '#000000';
      ctx.lineWidth = borderWidth * 2;
      ctx.beginPath();
      ctx.arc(size / 2, size / 2, size / 2 - borderWidth, 0, Math.PI * 2);
      ctx.stroke();

      setProcessedImage(canvas.toDataURL('image/png', 1.0));
      setIsProcessing(false);
    } catch (e) {
      console.error(e);
      setIsProcessing(false);
    }
  }, [selections, borderWidth]);

  useEffect(() => {
    const t = setTimeout(generatePFP, 400);
    return () => clearTimeout(t);
  }, [generatePFP]);

  const handleDownload = () => {
    if (!processedImage) return;
    const l = document.createElement('a');
    l.download = `charlie-pfp-${Date.now()}.png`;
    l.href = processedImage;
    l.click();
  };

  const randomize = () => {
    setSelections({
      base: BASES[Math.floor(Math.random() * BASES.length)],
      bgColor: BG_COLORS[Math.floor(Math.random() * BG_COLORS.length)].value,
    });
  };

  return (
    <section className="py-20 px-6 bg-white overflow-hidden font-sans text-black">
      <canvas ref={canvasRef} className="hidden" />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-charlie-yellow border-2 border-black px-4 py-1 rounded-full text-sm font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <Sparkles className="w-4 h-4" />
            <span>PFP Generator v1.0</span>
          </div>
          <h1 className="text-7xl md:text-9xl font-black text-black tracking-tighter uppercase italic">CUSTOMIZE</h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="relative">
            <div className="absolute inset-0 bg-black rounded-3xl translate-x-4 translate-y-4" />
            <div className="relative bg-white border-4 border-black rounded-3xl overflow-hidden flex flex-col h-[500px] shadow-2xl">
              <div className="flex bg-white border-b-4 border-black sticky top-0 z-20">
                <button onClick={() => setActiveTab('base')} className={`flex-1 p-6 font-black uppercase tracking-tighter transition-colors border-r-4 border-black ${activeTab === 'base' ? 'bg-charlie-yellow' : 'hover:bg-gray-50'}`}>Base</button>
                <button onClick={() => setActiveTab('bg')} className={`flex-1 p-6 font-black uppercase tracking-tighter transition-colors ${activeTab === 'bg' ? 'bg-charlie-yellow' : 'hover:bg-gray-50'}`}>BG</button>
              </div>

              <div className="flex-1 overflow-y-auto p-8 bg-gray-50">
                {activeTab === 'base' && <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">{BASES.map(b => (
                  <button key={b.id} onClick={() => setSelections({ ...selections, base: b })} className={`aspect-square p-4 border-4 rounded-3xl bg-white shadow-xl transition-transform hover:scale-105 active:scale-95 ${selections.base.id === b.id ? 'border-charlie-red' : 'border-black'}`}><img src={b.url} className="w-full h-full object-contain" /></button>
                ))}</div>}

                {activeTab === 'bg' && <div className="grid grid-cols-3 gap-6">{BG_COLORS.map(c => (
                  <button key={c.value} onClick={() => setSelections({ ...selections, bgColor: c.value })} className={`aspect-square border-4 rounded-3xl shadow-xl transition-transform hover:scale-105 active:scale-95 ${selections.bgColor === c.value ? 'border-charlie-red' : 'border-black'}`} style={{ backgroundColor: c.value }} />
                ))}</div>}

                <div className="mt-12 space-y-4">
                  <label className="text-xl font-black uppercase italic tracking-tighter">Border Width</label>
                  <input type="range" min="0" max="80" value={borderWidth} onChange={e => setBorderWidth(Number(e.target.value))} className="w-full h-6 bg-gray-200 rounded-full appearance-none cursor-pointer border-4 border-black accent-charlie-red" />
                </div>
              </div>
              <div className="p-6 bg-white border-t-4 border-black"><button onClick={randomize} className="w-full flex items-center justify-center gap-3 bg-black text-white py-6 rounded-3xl font-black uppercase text-xl shadow-[6px_6px_0px_0px_rgba(255,213,79,1)] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all"><Shuffle className="w-6 h-6" /> Randomize traits</button></div>
            </div>
          </div>

          <div className="lg:sticky lg:top-8">
            <div className="relative">
              <div className="absolute inset-0 bg-black rounded-[60px] translate-x-4 translate-y-4" />
              <div className="relative bg-charlie-yellow border-8 border-black rounded-[60px] p-12 md:p-16 text-center shadow-2xl">
                <div className="mb-12"><h3 className="text-3xl font-black bg-white inline-block px-8 py-2 border-4 border-black -skew-x-12 shadow-lg">PREVIEW</h3></div>
                <div className="flex justify-center mb-12">
                  <div className="relative">
                    <div className="bg-white p-3 rounded-full border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                      {isProcessing && <div className="absolute inset-0 z-30 bg-white/60 backdrop-blur-sm flex items-center justify-center rounded-full"><div className="animate-spin h-16 w-16 border-8 border-black border-t-transparent rounded-full" /></div>}
                      <img src={processedImage} className="w-80 h-80 md:w-[450px] md:h-[450px] rounded-full object-cover" />
                    </div>
                  </div>
                </div>
                <button onClick={handleDownload} disabled={isProcessing} className="w-full bg-charlie-red text-white py-8 rounded-3xl border-4 border-black font-black text-4xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:bg-red-600 active:translate-x-1 active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-4"><Download className="w-10 h-10" /> COLLECT PFP</button>
                <div className="mt-8 text-sm font-black text-black/40 uppercase tracking-widest">High Resolution PNG (2K)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PFPGenerator;
