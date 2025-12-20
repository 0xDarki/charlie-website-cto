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
    <section className="py-12 px-6 bg-white overflow-hidden font-sans text-black">
      <canvas ref={canvasRef} className="hidden" />
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 bg-charlie-yellow border-2 border-black px-3 py-1 rounded-full text-xs font-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            <Sparkles className="w-3 h-3" />
            <span>PFP Generator v1.0</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-black tracking-tighter uppercase italic">CUSTOMIZE</h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="relative">
            <div className="absolute inset-0 bg-black rounded-3xl translate-x-3 translate-y-3" />
            <div className="relative bg-white border-4 border-black rounded-3xl overflow-hidden flex flex-col h-[420px] shadow-xl">
              <div className="flex bg-white border-b-4 border-black sticky top-0 z-20">
                <button onClick={() => setActiveTab('base')} className={`flex-1 p-4 font-black uppercase tracking-tighter transition-colors border-r-4 border-black text-sm ${activeTab === 'base' ? 'bg-charlie-yellow' : 'hover:bg-gray-50'}`}>Base</button>
                <button onClick={() => setActiveTab('bg')} className={`flex-1 p-4 font-black uppercase tracking-tighter transition-colors text-sm ${activeTab === 'bg' ? 'bg-charlie-yellow' : 'hover:bg-gray-50'}`}>BG</button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
                {activeTab === 'base' && <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">{BASES.map(b => (
                  <button key={b.id} onClick={() => setSelections({ ...selections, base: b })} className={`aspect-square p-2 border-4 rounded-2xl bg-white shadow-lg transition-transform hover:scale-105 active:scale-95 ${selections.base.id === b.id ? 'border-charlie-red' : 'border-black'}`}><img src={b.url} className="w-full h-full object-contain" /></button>
                ))}</div>}

                {activeTab === 'bg' && <div className="grid grid-cols-3 gap-4">{BG_COLORS.map(c => (
                  <button key={c.value} onClick={() => setSelections({ ...selections, bgColor: c.value })} className={`aspect-square border-4 rounded-2xl shadow-lg transition-transform hover:scale-105 active:scale-95 ${selections.bgColor === c.value ? 'border-charlie-red' : 'border-black'}`} style={{ backgroundColor: c.value }} />
                ))}</div>}

                <div className="mt-8 space-y-2">
                  <label className="text-lg font-black uppercase italic tracking-tighter">Border Width</label>
                  <input type="range" min="0" max="80" value={borderWidth} onChange={e => setBorderWidth(Number(e.target.value))} className="w-full h-4 bg-gray-200 rounded-full appearance-none cursor-pointer border-2 border-black accent-charlie-red" />
                </div>
              </div>
              <div className="p-4 bg-white border-t-4 border-black"><button onClick={randomize} className="w-full flex items-center justify-center gap-2 bg-black text-white py-4 rounded-2xl font-black uppercase text-lg shadow-[4px_4px_0px_0px_rgba(255,213,79,1)] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all"><Shuffle className="w-5 h-5" /> Randomize</button></div>
            </div>
          </div>

          <div className="lg:sticky lg:top-8">
            <div className="relative">
              <div className="absolute inset-0 bg-black rounded-[40px] translate-x-3 translate-y-3" />
              <div className="relative bg-charlie-yellow border-4 border-black rounded-[40px] p-8 md:p-10 text-center shadow-xl">
                <div className="mb-8"><h3 className="text-2xl font-black bg-white inline-block px-6 py-1 border-4 border-black -skew-x-12 shadow-md uppercase">Preview</h3></div>
                <div className="flex justify-center mb-8">
                  <div className="relative">
                    <div className="bg-white p-2 rounded-full border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                      {isProcessing && <div className="absolute inset-0 z-30 bg-white/60 backdrop-blur-sm flex items-center justify-center rounded-full"><div className="animate-spin h-10 w-10 border-4 border-black border-t-transparent rounded-full" /></div>}
                      <img src={processedImage} className="w-56 h-56 md:w-[320px] md:h-[320px] rounded-full object-cover" />
                    </div>
                  </div>
                </div>
                <button onClick={handleDownload} disabled={isProcessing} className="w-full bg-charlie-red text-white py-5 rounded-2xl border-4 border-black font-black text-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:bg-red-600 active:translate-x-1 active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-3"><Download className="w-8 h-8" /> DOWNLOAD PFP</button>
                <div className="mt-6 text-[10px] font-black text-black/40 uppercase tracking-widest">High Resolution PNG (2K)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PFPGenerator;
