import React from 'react';
import { Figma, FileText, Code2, Calendar, Sparkles, AlertCircle, X, Check } from 'lucide-react';

const PainPointSolution: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Problem Card */}
          <div className="glass-panel p-8 md:p-12 rounded-[20px] relative group hover:border-red-500/20 transition-all duration-500 overflow-hidden animate-in slide-in-from-left duration-700">
             {/* Abstract Chaos Background */}
             <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none overflow-hidden">
                <div className="absolute top-[-20%] right-[-10%] transform rotate-12"><X className="w-64 h-64 text-red-500" /></div>
             </div>

             <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-red-500/10 rounded-lg">
                    <AlertCircle className="w-5 h-5 text-red-400" />
                  </div>
                  <span className="text-sm font-bold tracking-widest text-red-400 uppercase">The Problem</span>
                </div>

                <h3 className="font-display font-bold text-3xl md:text-4xl mb-6 leading-tight">
                  Creatives Lose <span className="text-red-400">2+ Hours</span> Daily to Context Switching
                </h3>

                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  You're designing in Figma, then translating docs, then planning your week, then coding a prototype. Each task needs a different tool. Each switch breaks your flow.
                </p>

                {/* Chaos Visual */}
                <div className="h-48 relative bg-black/20 rounded-2xl border border-white/5 overflow-hidden group-hover:bg-black/30 transition-colors group-hover:animate-pulse">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                     {/* Scattered Icons */}
                     <div className="absolute top-8 left-8 animate-float animation-delay-0">
                        <div className="p-3 bg-[#1e1e1e] rounded-xl border border-white/10 shadow-xl transform -rotate-12 opacity-80">
                           <Figma className="w-8 h-8 text-pink-500" />
                        </div>
                     </div>
                     <div className="absolute top-10 right-12 animate-float animation-delay-1000">
                        <div className="p-3 bg-[#1e1e1e] rounded-xl border border-white/10 shadow-xl transform rotate-12 opacity-80">
                           <FileText className="w-8 h-8 text-blue-400" />
                        </div>
                     </div>
                     <div className="absolute bottom-6 left-20 animate-float animation-delay-2000">
                        <div className="p-3 bg-[#1e1e1e] rounded-xl border border-white/10 shadow-xl transform -rotate-6 opacity-80">
                           <Code2 className="w-8 h-8 text-yellow-400" />
                        </div>
                     </div>
                     <div className="absolute bottom-8 right-16 animate-float animation-delay-500">
                        <div className="p-3 bg-[#1e1e1e] rounded-xl border border-white/10 shadow-xl transform rotate-6 opacity-80">
                           <Calendar className="w-8 h-8 text-green-400" />
                        </div>
                     </div>
                  </div>
                </div>
             </div>
          </div>

          {/* Solution Card */}
          <div className="glass-panel p-8 md:p-12 rounded-[20px] relative group hover:-translate-y-2 hover:shadow-[0_0_40px_-10px_rgba(139,92,246,0.3)] hover:border-brand-purple/30 transition-all duration-500 animate-in slide-in-from-right duration-700">
             {/* Calm Background */}
             <div className="absolute top-0 right-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-brand-purple/5 to-brand-cyan/5 rounded-[20px]" />

             <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                   <div className="p-2 bg-brand-cyan/10 rounded-lg">
                    <Sparkles className="w-5 h-5 text-brand-cyan" />
                  </div>
                  <span className="text-sm font-bold tracking-widest text-brand-cyan uppercase">The Solution</span>
                </div>

                <h3 className="font-display font-bold text-3xl md:text-4xl mb-6 leading-tight">
                  One AI That <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">Transforms</span> With You
                </h3>

                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  Jarvis watches what you're doing and becomes the perfect assistant. Open Figma? Design advisor. Reading English? Translator. Writing code? Programming expert. No switching. No setup. Just flow.
                </p>

                {/* Order/Flow Visual */}
                <div className="h-48 relative bg-black/20 rounded-2xl border border-white/5 overflow-hidden flex items-center justify-center group-hover:bg-black/30 transition-colors">
                  
                  {/* Background Aura */}
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/20 via-brand-pink/20 to-brand-cyan/20 opacity-30 blur-3xl animate-pulse" />
                  
                  {/* Central Orb */}
                  <div className="relative z-10 w-24 h-24 rounded-full bg-gradient-to-br from-brand-purple to-brand-pink p-[2px] shadow-[0_0_30px_rgba(236,72,153,0.3)] animate-float">
                     <div className="w-full h-full rounded-full bg-black/80 backdrop-blur-sm flex items-center justify-center">
                        <Sparkles className="w-10 h-10 text-white" />
                     </div>
                  </div>

                  {/* Orbiting Elements */}
                  <div className="absolute inset-0 animate-spin-slow opacity-20">
                     <div className="absolute top-[20%] left-[20%] w-2 h-2 rounded-full bg-brand-cyan shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
                     <div className="absolute bottom-[20%] right-[20%] w-2 h-2 rounded-full bg-brand-purple shadow-[0_0_10px_rgba(139,92,246,0.8)]" />
                  </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PainPointSolution;