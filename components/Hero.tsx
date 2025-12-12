import React from 'react';
import { Download, Layers, Monitor, Command, Terminal } from 'lucide-react';
import ContextDemo from './ContextDemo';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden pt-32 pb-20">
      
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        {/* Animated Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#667eea] via-[#764ba2] to-[#f093fb] bg-[length:400%_400%] animate-gradient-x opacity-20" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.05]" 
             style={{
               backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
               backgroundSize: '50px 50px'
             }} 
        />
        
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-[100px] animate-blob animation-delay-2000" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center justify-center min-h-[60vh]">
        
        {/* Title */}
        <h1 className="font-display font-bold text-7xl md:text-9xl text-white mb-6 tracking-tight drop-shadow-[0_0_25px_rgba(255,255,255,0.3)] animate-in fade-in slide-in-from-bottom-8 duration-1000">
          Jarvis
        </h1>

        {/* Tagline */}
        <h2 className="text-2xl md:text-4xl font-light text-white/90 mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
          Your AI, Always Ready, Always Right
        </h2>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 leading-relaxed font-light">
          The context-aware AI companion that transforms based on what you're doing. Built for creative minds.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-6 mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          <button className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-bold text-lg shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all duration-300">
            <span className="flex items-center gap-2">
              <Download className="w-5 h-5" />
              Download Free
            </span>
          </button>
          
          <button className="px-8 py-4 rounded-full glass-panel border border-white/20 text-white font-medium text-lg hover:bg-white/10 transition-all duration-300 flex items-center gap-2">
             <Layers className="w-5 h-5" />
             Explore Packs
          </button>
        </div>

        {/* Platforms */}
        <div className="flex items-center gap-8 text-white/40 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
          <div className="group relative flex items-center justify-center" title="macOS">
            <Command className="w-8 h-8 group-hover:text-white transition-colors duration-300" />
            <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity text-xs tracking-widest uppercase">macOS</span>
          </div>
          <div className="group relative flex items-center justify-center" title="Windows">
            <Monitor className="w-8 h-8 group-hover:text-white transition-colors duration-300" />
            <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity text-xs tracking-widest uppercase">Windows</span>
          </div>
          <div className="group relative flex items-center justify-center" title="Linux">
            <Terminal className="w-8 h-8 group-hover:text-white transition-colors duration-300" />
            <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity text-xs tracking-widest uppercase">Linux</span>
          </div>
        </div>
      </div>

      {/* Product Demo */}
      <div className="w-full max-w-6xl mx-auto px-6 relative z-10 mt-12 animate-in fade-in zoom-in duration-1000 delay-700">
          <div className="text-center mb-8">
            <span className="text-sm font-medium text-white/30 uppercase tracking-widest">See it in action</span>
          </div>
          <ContextDemo />
      </div>

    </section>
  );
};

export default Hero;