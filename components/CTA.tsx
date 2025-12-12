import React from 'react';
import { Download, ArrowRight, Github, Star } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="relative py-32 overflow-hidden flex items-center justify-center">
      
      {/* Intense Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/40 via-brand-pink/40 to-brand-orange/40 z-0">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 mix-blend-overlay"></div>
      </div>
      
      {/* Animated Mesh/Aurora */}
      <div className="absolute top-[-50%] left-[-20%] w-[80%] h-[80%] bg-brand-purple/30 rounded-full blur-[120px] animate-blob mix-blend-screen" />
      <div className="absolute bottom-[-50%] right-[-20%] w-[80%] h-[80%] bg-brand-orange/30 rounded-full blur-[120px] animate-blob animation-delay-2000 mix-blend-screen" />

      {/* Floating Glass Shapes */}
      <div className="absolute top-20 left-10 w-24 h-24 glass-panel rounded-2xl rotate-12 animate-float opacity-50 hidden md:block" />
      <div className="absolute bottom-20 right-10 w-32 h-32 glass-panel rounded-full animate-float animation-delay-1000 opacity-50 hidden md:block" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        
        {/* Headline */}
        <h2 className="font-display font-bold text-5xl md:text-7xl text-white mb-6 tracking-tight drop-shadow-xl animate-in fade-in slide-in-from-bottom-8 duration-700">
          Ready to Meet Your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">AI Companion?</span>
        </h2>
        
        <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
          Join thousands of creatives who've already transformed their workflow.
        </p>

        {/* Buttons */}
        <div className="flex flex-col items-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          <button className="group relative px-10 py-5 rounded-full bg-white text-black font-bold text-xl shadow-[0_0_50px_-10px_rgba(255,255,255,0.4)] hover:shadow-[0_0_80px_-10px_rgba(255,255,255,0.6)] hover:scale-105 transition-all duration-300 border-2 border-transparent hover:bg-transparent hover:border-white hover:text-white overflow-hidden">
             <span className="relative z-10 flex items-center gap-2">
               <Download className="w-6 h-6" />
               Download Jarvis Free
             </span>
          </button>
          <span className="text-sm text-white/50 font-medium">Available for macOS, Windows, and Linux</span>
        </div>

        {/* Email Signup */}
        <div className="mt-12 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
           <p className="text-white/70 mb-4 text-sm">Or get notified about updates</p>
           <form className="max-w-sm mx-auto flex p-1.5 glass-panel rounded-full bg-black/20 focus-within:bg-black/40 transition-colors">
             <input 
               type="email" 
               placeholder="Enter your email" 
               className="flex-1 bg-transparent border-none text-white placeholder-white/40 focus:ring-0 px-4 text-sm outline-none"
             />
             <button type="button" className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors">
               <ArrowRight className="w-4 h-4" />
             </button>
           </form>
        </div>

        {/* Social Proof */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-center gap-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-400">
           
           {/* Github Badge */}
           <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer group">
             <Github className="w-5 h-5 text-white/80 group-hover:text-white" />
             <span className="text-sm font-medium text-white/80 group-hover:text-white">Star on GitHub</span>
             <div className="flex items-center gap-1 pl-2 border-l border-white/10 ml-1 text-xs text-white/60">
                <Star className="w-3 h-3 fill-white/60" />
                <span>12.4k</span>
             </div>
           </div>

           {/* Community */}
           <div className="flex items-center gap-3">
             <div className="flex -space-x-3">
               {[1,2,3,4].map((i) => (
                 <div key={i} className={`w-8 h-8 rounded-full border-2 border-[#0f0f13] bg-gradient-to-br from-gray-700 to-gray-600 flex items-center justify-center text-[10px] font-bold text-white overflow-hidden`}>
                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i*135}`} alt="User" />
                 </div>
               ))}
             </div>
             <span className="text-sm text-white/60">Backed by open source community</span>
           </div>
        </div>

      </div>
    </section>
  );
};

export default CTA;