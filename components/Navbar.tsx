import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`glass-panel rounded-2xl px-6 py-4 flex items-center justify-between transition-all duration-300 ${
            isScrolled ? 'bg-black/40 shadow-lg shadow-purple-500/5' : 'bg-white/5'
          }`}
        >
          {/* Logo */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-brand-pink blur-md opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-gradient-to-br from-brand-purple to-brand-pink p-2 rounded-xl">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
            </div>
            <span className="font-display font-bold text-xl tracking-tight">Jarvis</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#how-it-works" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">How it Works</a>
            <a href="#pricing" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Pricing</a>
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Sign In
            </button>
            <button className="group relative px-6 py-2.5 rounded-xl font-semibold text-white overflow-hidden transition-all hover:scale-105 active:scale-95">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-purple via-brand-pink to-brand-orange opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative">Get Early Access</span>
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 p-4 md:hidden">
          <div className="glass-panel rounded-2xl p-6 flex flex-col gap-4 animate-in slide-in-from-top-4 fade-in">
            <a href="#features" className="text-lg font-medium text-gray-300">Features</a>
            <a href="#how-it-works" className="text-lg font-medium text-gray-300">How it Works</a>
            <a href="#pricing" className="text-lg font-medium text-gray-300">Pricing</a>
            <hr className="border-white/10 my-2" />
            <button className="w-full py-3 rounded-xl bg-gradient-to-r from-brand-purple to-brand-pink font-bold text-white">
              Get Early Access
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
