import React from 'react';
import { Layers, Zap, Shield, Wand2, RefreshCw, Palette } from 'lucide-react';

const FEATURES = [
  {
    icon: RefreshCw,
    title: "Context Switching",
    description: "Jarvis detects if you're in Figma or VS Code and automatically loads the right system prompt and knowledge base.",
    color: "text-brand-pink",
    bg: "bg-brand-pink/10"
  },
  {
    icon: Zap,
    title: "Blazing Fast",
    description: "Built with Rust and Moly-ai. Jarvis uses <1% CPU in the background and responds instantly.",
    color: "text-brand-orange",
    bg: "bg-brand-orange/10"
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your context data never leaves your device. Choose to run local LLMs or connect securely to cloud APIs.",
    color: "text-brand-cyan",
    bg: "bg-brand-cyan/10"
  },
  {
    icon: Palette,
    title: "Designer Friendly",
    description: "Understand hex codes, CSS grids, and typography rules out of the box. It speaks your language.",
    color: "text-purple-400",
    bg: "bg-purple-400/10"
  },
  {
    icon: Layers,
    title: "Workflow Integration",
    description: "Drag and drop generated assets directly into your workspace. No more copy-paste fatigue.",
    color: "text-green-400",
    bg: "bg-green-400/10"
  },
  {
    icon: Wand2,
    title: "Custom Personas",
    description: "Create your own experts. Need a 'Brutal Marketing Copywriter'? Train it in seconds.",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10"
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-20 text-center">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
            Not just another <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-brand-orange">Chatbot Wrapper.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We built the tool we wanted to use. A native, high-performance assistant that respects your battery life and your privacy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, idx) => (
            <div 
              key={idx}
              className="glass-panel glass-panel-hover p-8 rounded-3xl transition-all duration-300 group"
            >
              <div className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300`}>
                <feature.icon className={`w-7 h-7 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;