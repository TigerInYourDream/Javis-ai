import React from 'react';
import { Globe, Palette, Code2, Calendar, Lightbulb } from 'lucide-react';

const PACKS = [
  {
    id: 'translator',
    title: 'Translator',
    description: 'Real-time translation with context awareness. Understands idioms, preserves tone, explains cultural nuances.',
    icon: Globe,
    colorClass: 'text-cyan-400',
    bgClass: 'bg-cyan-400/10',
    borderHover: 'group-hover:border-cyan-400/50',
    shadowHover: 'group-hover:shadow-[0_0_30px_-5px_rgba(34,211,238,0.3)]',
    delay: 'delay-0'
  },
  {
    id: 'design',
    title: 'Design Advisor',
    description: 'Analyzes design trends, suggests color palettes, extracts inspiration from any visual you\'re viewing.',
    icon: Palette,
    colorClass: 'text-pink-400',
    bgClass: 'bg-pink-400/10',
    borderHover: 'group-hover:border-pink-400/50',
    shadowHover: 'group-hover:shadow-[0_0_30px_-5px_rgba(244,114,182,0.3)]',
    delay: 'delay-100'
  },
  {
    id: 'code',
    title: 'Code Expert',
    description: 'Reviews your code, spots bugs, suggests optimizations. Speaks Rust, Python, TypeScript, and 20+ languages.',
    icon: Code2,
    colorClass: 'text-purple-400',
    bgClass: 'bg-purple-400/10',
    borderHover: 'group-hover:border-purple-400/50',
    shadowHover: 'group-hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.3)]',
    delay: 'delay-200'
  },
  {
    id: 'planner',
    title: 'Trip Planner',
    description: 'Manages your schedule, plans routes, avoids conflicts. Syncs with your calendar automatically.',
    icon: Calendar,
    colorClass: 'text-yellow-400',
    bgClass: 'bg-yellow-400/10',
    borderHover: 'group-hover:border-yellow-400/50',
    shadowHover: 'group-hover:shadow-[0_0_30px_-5px_rgba(250,204,21,0.3)]',
    delay: 'delay-300'
  },
  {
    id: 'ideas',
    title: 'Idea Extractor',
    description: 'Captures inspiration from anything you browse. Summarizes, tags, and connects ideas across your creative work.',
    icon: Lightbulb,
    colorClass: 'text-orange-400',
    bgClass: 'bg-orange-400/10',
    borderHover: 'group-hover:border-orange-400/50',
    shadowHover: 'group-hover:shadow-[0_0_30px_-5px_rgba(251,146,60,0.3)]',
    delay: 'delay-400'
  }
];

const PersonalityPacks: React.FC = () => {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <span className="text-brand-purple font-bold tracking-widest text-sm uppercase mb-3 block">
            Personality Packs
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6 text-white">
            Switch Contexts, <span className="text-white/50">Not Tools</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Each pack transforms Jarvis into a specialized expert, complete with custom prompts, knowledge bases, and tool integrations.
          </p>
        </div>

        {/* Grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {PACKS.map((pack) => (
            <div 
              key={pack.id}
              className={`
                w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)]
                glass-panel p-8 rounded-3xl border border-white/5 
                transition-all duration-300 group
                hover:-translate-y-2 ${pack.borderHover} ${pack.shadowHover}
                animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-backwards ${pack.delay}
              `}
            >
              {/* Icon Badge */}
              <div className={`w-14 h-14 rounded-full ${pack.bgClass} flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                <pack.icon className={`w-7 h-7 ${pack.colorClass}`} />
              </div>

              {/* Content */}
              <h3 className="font-bold text-xl text-white mb-3 group-hover:text-white transition-colors">
                {pack.title}
              </h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                {pack.description}
              </p>

              {/* Optional Decoration */}
              <div className="mt-6 flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-2 group-hover:translate-x-0">
                <span className={pack.colorClass}>Explore Pack</span>
                <span className={pack.colorClass}>→</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PersonalityPacks;
