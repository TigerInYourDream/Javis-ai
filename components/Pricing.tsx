import React from 'react';
import { Check, Sparkles, ArrowRight } from 'lucide-react';

const TIERS = [
  {
    name: "Open Source",
    price: "Free",
    period: "forever",
    features: [
      "Core Jarvis functionality",
      "5 Basic Personality Packs",
      "Local LLM support (Ollama)",
      "Community support",
      "Mac, Windows, Linux"
    ],
    cta: "Get Started",
    highlight: false,
    delay: "delay-0"
  },
  {
    name: "Pro",
    price: "$9.9",
    period: "per month",
    features: [
      "Everything in Free",
      "50+ Premium Packs",
      "Cloud config sync",
      "Priority support",
      "Early access to new features"
    ],
    cta: "Upgrade to Pro",
    highlight: true,
    badge: "MOST POPULAR",
    delay: "delay-100"
  },
  {
    name: "Team",
    price: "Custom",
    period: "let's talk",
    features: [
      "Everything in Pro",
      "Team Pack sharing",
      "Private deployment",
      "Custom integrations",
      "Dedicated support + SLA"
    ],
    cta: "Contact Sales",
    highlight: false,
    delay: "delay-200"
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <span className="text-brand-purple font-bold tracking-widest text-sm uppercase mb-3 block">
            Simple Pricing
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6 text-white">
            Start Free. <span className="text-white/50">Scale When Ready.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Open source at heart. Premium when you need more.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-start max-w-6xl mx-auto">
          {TIERS.map((tier, idx) => (
            <div
              key={idx}
              className={`
                relative rounded-3xl p-8 backdrop-blur-xl transition-all duration-300 flex flex-col
                ${tier.highlight
                  ? 'bg-gradient-to-b from-white/10 to-white/5 border border-brand-purple/50 shadow-[0_0_40px_-10px_rgba(139,92,246,0.3)] md:-translate-y-8 z-10'
                  : 'bg-white/5 border border-white/10 hover:border-white/20'
                }
                animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-backwards ${tier.delay}
              `}
            >
              {/* Pro Badge */}
              {tier.highlight && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-brand-purple to-brand-pink text-xs font-bold uppercase tracking-wider text-white shadow-lg flex items-center gap-1.5 whitespace-nowrap animate-float">
                  <Sparkles className="w-3 h-3 fill-white" />
                  {tier.badge}
                </div>
              )}

              {/* Card Content */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4">{tier.name}</h3>
                <div className="flex items-end gap-2">
                   <span className={`text-5xl font-bold font-display tracking-tight ${tier.highlight ? 'text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-pink' : 'text-white'}`}>
                     {tier.price}
                   </span>
                   <span className="text-gray-400 mb-2 font-medium">{tier.period}</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8 flex-grow">
                {tier.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-3">
                    <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${tier.highlight ? 'bg-brand-purple/20' : 'bg-white/10'}`}>
                      <Check className={`w-3 h-3 ${tier.highlight ? 'text-brand-purple' : 'text-gray-400'}`} />
                    </div>
                    <span className="text-gray-300 text-sm leading-relaxed font-medium">{feature}</span>
                  </div>
                ))}
              </ul>

              {/* CTA Button */}
              <button className={`
                w-full py-4 rounded-xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 group
                ${tier.highlight
                  ? 'bg-gradient-to-r from-brand-purple to-brand-pink text-white shadow-lg hover:shadow-brand-purple/25 hover:scale-[1.02]'
                  : 'border border-white/10 hover:bg-white/5 text-white hover:border-white/20'
                }
              `}>
                {tier.cta}
                {tier.highlight && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Pricing;
