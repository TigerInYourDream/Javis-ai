import React from 'react';
import { AppWindow, Monitor, Code2, Sparkles, Command } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-24 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <span className="text-brand-cyan font-bold tracking-widest text-sm uppercase mb-3 block">
            Seamless Experience
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6 text-white">
            Magic in Three Steps
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[180px] left-0 w-full h-1 bg-white/10">
            <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-brand-purple via-brand-pink to-brand-cyan opacity-30 animate-pulse" />
          </div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-3 gap-12 relative">
            
            {/* Step 1: Jarvis Watches */}
            <div className="flex flex-col items-center text-center group relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-0">
               {/* Connecting Line (Mobile) */}
               <div className="md:hidden absolute top-32 bottom-[-48px] w-1 bg-gradient-to-b from-brand-purple to-brand-pink/20 -z-10" />

              {/* Visual */}
              <div className="h-40 w-full flex items-center justify-center mb-8 relative">
                 <div className="relative w-32 h-24">
                    <div className="absolute inset-0 bg-gray-800 rounded-lg border border-white/10 shadow-lg transform -rotate-6 translate-x-[-10px] flex items-center justify-center animate-pulse">
                      <Code2 className="text-gray-600 w-8 h-8" />
                    </div>
                    <div className="absolute inset-0 bg-gray-700 rounded-lg border border-white/10 shadow-lg transform rotate-6 translate-x-[10px] flex items-center justify-center animate-pulse animation-delay-1000">
                      <AppWindow className="text-gray-500 w-8 h-8" />
                    </div>
                    <div className="absolute inset-0 bg-[#1e1e1e] rounded-lg border border-brand-purple/30 shadow-2xl z-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Monitor className="text-brand-purple w-10 h-10" />
                    </div>
                 </div>
              </div>

              {/* Badge */}
              <div className="w-12 h-12 rounded-full bg-[#0f0f13] border-2 border-brand-purple flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(139,92,246,0.5)] z-10">
                <span className="font-display font-bold text-brand-purple">01</span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3">Jarvis Watches</h3>
              <p className="text-gray-400 leading-relaxed max-w-xs">
                Running silently in the background, Jarvis detects which application is in focus — your browser, Figma, VS Code, Calendar, or any app.
              </p>
            </div>

            {/* Step 2: Pack Activates */}
            <div className="flex flex-col items-center text-center group relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
               {/* Connecting Line (Mobile) */}
               <div className="md:hidden absolute top-32 bottom-[-48px] w-1 bg-gradient-to-b from-brand-pink/20 to-brand-cyan/20 -z-10" />

              {/* Visual */}
              <div className="h-40 w-full flex items-center justify-center mb-8">
                 <div className="relative w-24 h-24">
                   <div className="absolute inset-0 bg-gradient-to-r from-brand-pink to-brand-orange rounded-full opacity-20 blur-xl animate-blob" />
                   <div className="absolute inset-2 bg-gradient-to-br from-brand-pink to-brand-orange rounded-full opacity-80 animate-spin-slow blur-md" />
                   <div className="absolute inset-0 flex items-center justify-center">
                     <Sparkles className="w-10 h-10 text-white drop-shadow-lg" />
                   </div>
                 </div>
              </div>

              {/* Badge */}
              <div className="w-12 h-12 rounded-full bg-[#0f0f13] border-2 border-brand-pink flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(236,72,153,0.5)] z-10">
                <span className="font-display font-bold text-brand-pink">02</span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3">Pack Activates</h3>
              <p className="text-gray-400 leading-relaxed max-w-xs">
                Based on context, the perfect Personality Pack loads automatically. No manual switching, no configuration menus.
              </p>
            </div>

            {/* Step 3: You Create */}
            <div className="flex flex-col items-center text-center group relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-400">
              
              {/* Visual */}
              <div className="h-40 w-full flex items-center justify-center mb-8">
                 <div className="flex gap-2 group-hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-b from-gray-700 to-gray-800 border-b-4 border-gray-900 shadow-lg flex items-center justify-center">
                      <Command className="w-8 h-8 text-gray-300" />
                    </div>
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-b from-brand-cyan to-blue-600 border-b-4 border-blue-800 shadow-[0_0_20px_rgba(6,182,212,0.4)] flex items-center justify-center">
                      <span className="font-display font-bold text-2xl text-white">J</span>
                    </div>
                 </div>
              </div>

              {/* Badge */}
              <div className="w-12 h-12 rounded-full bg-[#0f0f13] border-2 border-brand-cyan flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(6,182,212,0.5)] z-10">
                <span className="font-display font-bold text-brand-cyan">03</span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3">You Create</h3>
              <p className="text-gray-400 leading-relaxed max-w-xs">
                Press your hotkey anytime. Jarvis appears with exactly the expertise you need, right when you need it.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
