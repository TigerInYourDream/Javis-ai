import React from 'react';
import { Check, X, AlertTriangle, ArrowRight, Sparkles } from 'lucide-react';

const Comparison: React.FC = () => {
  const rows = [
    {
      feature: "Context-Aware Switching",
      chatgpt: { type: 'cross', text: null },
      cursor: { type: 'cross', text: null },
      jarvis: { type: 'check', text: null }
    },
    {
      feature: "Native Performance",
      chatgpt: { type: 'cross', text: "Web-based" },
      cursor: { type: 'cross', text: "Electron" },
      jarvis: { type: 'check', text: "Rust Native" }
    },
    {
      feature: "Multi-Model Support",
      chatgpt: { type: 'cross', text: "GPT only" },
      cursor: { type: 'warning', text: "Limited" },
      jarvis: { type: 'check', text: "All models" }
    },
    {
      feature: "Personality Packs",
      chatgpt: { type: 'cross', text: null },
      cursor: { type: 'cross', text: null },
      jarvis: { type: 'check', text: null }
    },
    {
      feature: "Local Privacy",
      chatgpt: { type: 'cross', text: null },
      cursor: { type: 'cross', text: null },
      jarvis: { type: 'check', text: null }
    },
    {
      feature: "Open Source Core",
      chatgpt: { type: 'cross', text: null },
      cursor: { type: 'cross', text: null },
      jarvis: { type: 'check', text: null }
    },
  ];

  const renderIcon = (type: string) => {
    if (type === 'check') return <Check className="w-5 h-5 text-green-400 drop-shadow-[0_0_8px_rgba(74,222,128,0.5)]" />;
    if (type === 'warning') return <AlertTriangle className="w-5 h-5 text-yellow-400" />;
    return <X className="w-5 h-5 text-gray-600" />;
  };

  const renderCell = (item: { type: string, text: string | null }) => (
    <div className="flex items-center justify-center md:justify-start gap-2">
      {renderIcon(item.type)}
      {item.text && (
        <span className={`text-sm ${item.type === 'check' ? 'text-white font-medium' : 'text-gray-500'}`}>
          {item.text}
        </span>
      )}
    </div>
  );

  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <span className="text-brand-pink font-bold tracking-widest text-sm uppercase mb-3 block">
            Why Jarvis
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6 text-white">
            Built Different. <span className="text-white/50">Runs Different.</span>
          </h2>
        </div>

        {/* Table Container */}
        <div className="overflow-x-auto pb-4 -mx-6 px-6 md:mx-0 md:px-0">
          <div className="min-w-[800px] md:min-w-0">
            <div className="grid grid-cols-[1.5fr_1fr_1fr_1.2fr] gap-4 mb-4 items-end px-4">
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wider pb-4">Feature</div>
              <div className="text-center pb-4 font-bold text-gray-400 text-lg">ChatGPT</div>
              <div className="text-center pb-4 font-bold text-gray-400 text-lg">Cursor</div>
              
              {/* Jarvis Header */}
              <div className="relative">
                 <div className="absolute inset-x-0 -top-6 -bottom-4 bg-gradient-to-b from-brand-purple/20 to-brand-pink/10 rounded-t-2xl border-x border-t border-white/10 -z-10" />
                 <div className="flex items-center justify-center gap-2 pb-4 text-white font-display font-bold text-xl">
                   <Sparkles className="w-5 h-5 text-brand-pink" />
                   Jarvis
                 </div>
              </div>
            </div>

            <div className="space-y-2">
              {rows.map((row, idx) => (
                <div 
                  key={idx}
                  className="grid grid-cols-[1.5fr_1fr_1fr_1.2fr] gap-4 items-center p-4 rounded-xl hover:bg-white/5 transition-colors group"
                >
                  <div className="font-medium text-gray-300 group-hover:text-white transition-colors">
                    {row.feature}
                  </div>
                  <div className="flex justify-center md:justify-center">
                    {renderCell(row.chatgpt)}
                  </div>
                  <div className="flex justify-center md:justify-center">
                    {renderCell(row.cursor)}
                  </div>
                  
                  {/* Jarvis Cell */}
                  <div className="relative flex justify-center md:justify-center">
                    <div className="absolute inset-x-0 -top-[18px] -bottom-[18px] bg-gradient-to-b from-brand-pink/10 to-brand-purple/5 border-x border-white/5 -z-10 group-last:rounded-b-2xl group-last:border-b" />
                    {renderCell(row.jarvis)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
           <p className="text-gray-400 mb-6 text-lg">See the difference yourself</p>
           <button className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-bold text-lg hover:scale-105 transition-all duration-300 shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)]">
              Try Jarvis Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
           </button>
        </div>

      </div>
    </section>
  );
};

export default Comparison;