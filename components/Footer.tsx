import React from 'react';
import { Github, Twitter, MessageSquare, Star, Sparkles, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative border-t border-white/5 bg-[#0a0a0c]/80 backdrop-blur-xl pt-20 pb-10 overflow-hidden">
      {/* Gradient Line Top */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-purple/50 to-transparent" />
      
      {/* Ambient Glow */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-brand-purple/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 mb-16">
          
          {/* Column 1 - Brand */}
          <div className="col-span-2 md:col-span-1 pr-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-brand-pink blur-sm opacity-20" />
                <div className="relative bg-gradient-to-br from-brand-purple to-brand-pink p-1.5 rounded-lg">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">Jarvis</span>
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              AI that adapts to you. The intelligent assistant that understands your context and streamlines your creative workflow.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all group" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all group" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all group" aria-label="Discord">
                <MessageSquare className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2 - Product */}
          <div>
            <h4 className="font-bold text-white mb-6">Product</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#features" className="hover:text-brand-pink transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-brand-pink transition-colors">Personality Packs</a></li>
              <li><a href="#pricing" className="hover:text-brand-pink transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-brand-pink transition-colors flex items-center gap-2">
                Changelog 
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-brand-purple/20 text-brand-purple font-medium uppercase">New</span>
              </a></li>
            </ul>
          </div>

          {/* Column 3 - Resources */}
          <div>
            <h4 className="font-bold text-white mb-6">Resources</h4>
             <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-brand-cyan transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-brand-cyan transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-brand-cyan transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-brand-cyan transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Column 4 - Company */}
          <div>
            <h4 className="font-bold text-white mb-6">Company</h4>
             <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-brand-orange transition-colors">About</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Open Source</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 flex items-center gap-1.5">
            © 2025 Jarvis. Open source with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
          </p>
          
          <a href="#" className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 transition-all">
            <Star className="w-4 h-4 text-yellow-500 group-hover:fill-yellow-500 transition-colors" />
            <span className="text-sm font-medium text-gray-300 group-hover:text-white">Star us on GitHub</span>
            <span className="text-xs text-gray-500 border-l border-gray-700 pl-2 ml-1">12k</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;