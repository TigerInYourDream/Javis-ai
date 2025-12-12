import React from 'react';
import { Quote, TrendingUp } from 'lucide-react';

const CASES = [
  {
    badge: "Designer",
    user: "Anna, UI Designer",
    story: "I browse Dribbble for inspiration and Jarvis automatically captures color palettes and layout patterns. When I switch to Figma, it becomes my design critic.",
    metric: "3x faster mood boarding",
    accent: "from-pink-500 to-rose-500",
    textAccent: "text-pink-400",
    bgAccent: "bg-pink-500/10",
    delay: "delay-0"
  },
  {
    badge: "Content Creator",
    user: "Mike, Freelance Writer",
    story: "Reading research in English used to slow me down. Now Jarvis translates inline and summarizes key points. My article turnaround dropped from 2 days to 6 hours.",
    metric: "70% faster research",
    accent: "from-cyan-500 to-blue-500",
    textAccent: "text-cyan-400",
    bgAccent: "bg-cyan-500/10",
    delay: "delay-100"
  },
  {
    badge: "Developer",
    user: "Tom, Indie Hacker",
    story: "Jarvis reviews my Rust code as I write it. Catches bugs before they happen. It's like pair programming with a senior dev who never gets tired.",
    metric: "50% fewer bugs shipped",
    accent: "from-purple-500 to-indigo-500",
    textAccent: "text-purple-400",
    bgAccent: "bg-purple-500/10",
    delay: "delay-200"
  },
  {
    badge: "Digital Nomad",
    user: "Lisa, Remote PM",
    story: "Managing a distributed team across timezones was chaos. Jarvis now handles my calendar, suggests meeting times, and even drafts my standup updates.",
    metric: "2 hours saved daily",
    accent: "from-yellow-400 to-orange-500",
    textAccent: "text-yellow-400",
    bgAccent: "bg-yellow-500/10",
    delay: "delay-300"
  }
];

const UseCases: React.FC = () => {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <span className="text-brand-orange font-bold tracking-widest text-sm uppercase mb-3 block">
            Real Workflows
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6 text-white">
            See Jarvis in <span className="text-white/50">Action</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {CASES.map((item, idx) => (
            <div 
              key={idx}
              className={`group relative rounded-3xl p-[1px] overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-backwards ${item.delay}`}
            >
              {/* Gradient Border Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-20 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Card Content */}
              <div className="relative h-full bg-[#0f0f13] bg-opacity-90 backdrop-blur-xl rounded-[23px] p-8 md:p-10 flex flex-col transition-transform duration-500 group-hover:-translate-y-1">
                
                {/* Badge & Quote Icon */}
                <div className="flex justify-between items-start mb-6">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${item.bgAccent} ${item.textAccent} border border-white/5`}>
                    {item.badge}
                  </span>
                  <Quote className={`w-8 h-8 ${item.textAccent} opacity-20 group-hover:opacity-100 transition-opacity`} />
                </div>

                {/* Story */}
                <p className="text-lg text-gray-300 leading-relaxed mb-8 flex-grow">
                  "{item.story}"
                </p>

                {/* Footer: User & Metric */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pt-6 border-t border-white/5">
                  
                  {/* User */}
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${item.accent} p-[1px]`}>
                      <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center text-xs font-bold text-white/50 uppercase">
                        {item.user.charAt(0)}
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm">{item.user.split(',')[0]}</div>
                      <div className="text-xs text-gray-500">{item.user.split(',')[1]}</div>
                    </div>
                  </div>

                  {/* Metric */}
                  <div className="flex items-center gap-2">
                    <TrendingUp className={`w-4 h-4 ${item.textAccent}`} />
                    <span className={`font-bold ${item.textAccent}`}>
                      {item.metric}
                    </span>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default UseCases;