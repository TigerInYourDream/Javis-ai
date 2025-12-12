import React, { useState, useEffect } from 'react';
import { Figma, Code2, PenTool, Calendar, Zap, Bot, Send } from 'lucide-react';
import { ContextMode } from '../types';

const MODES: ContextMode[] = [
  {
    id: 'design',
    name: 'Figma',
    appIcon: Figma,
    themeColor: '#EC4899', // Pink
    gradient: 'from-pink-500 to-rose-500',
    personaTitle: 'Design Critic',
    samplePrompt: 'Does this card layout feel balanced?',
    response: 'The vertical rhythm is slightly off. Try increasing the padding-top by 8px to match the breathing room of the header.',
  },
  {
    id: 'code',
    name: 'VS Code',
    appIcon: Code2,
    themeColor: '#06B6D4', // Cyan
    gradient: 'from-cyan-500 to-blue-500',
    personaTitle: 'Rust Expert',
    samplePrompt: 'Why is the borrow checker yelling at me?',
    response: 'You\'re trying to move `data` into the closure, but it\'s already borrowed in line 42. Try cloning it first or using a reference.',
  },
  {
    id: 'writing',
    name: 'Notion',
    appIcon: PenTool,
    themeColor: '#F97316', // Orange
    gradient: 'from-orange-500 to-amber-500',
    personaTitle: 'Editor in Chief',
    samplePrompt: 'Make this headline punchier.',
    response: 'Try "Stop Waiting. Start Creating." It uses imperative verbs and creates a sense of urgency.',
  },
];

const ContextDemo: React.FC = () => {
  const [activeMode, setActiveMode] = useState<ContextMode>(MODES[0]);
  const [isTyping, setIsTyping] = useState(false);
  const [displayedResponse, setDisplayedResponse] = useState('');

  useEffect(() => {
    // Reset typing animation when mode changes
    setIsTyping(true);
    setDisplayedResponse('');
    
    let i = 0;
    const text = activeMode.response;
    const speed = 30;

    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayedResponse((prev) => prev + text.charAt(i));
        i++;
      } else {
        setIsTyping(false);
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [activeMode]);

  return (
    <div className="w-full max-w-5xl mx-auto mt-24 lg:mt-32 relative">
      {/* Background Gradients */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r ${activeMode.gradient} opacity-20 blur-[100px] transition-all duration-1000 rounded-full`} />

      <div className="relative grid lg:grid-cols-[100px_1fr] gap-6 lg:gap-12 items-start">
        
        {/* App Selector / Dock */}
        <div className="flex lg:flex-col items-center justify-center gap-4 p-3 glass-panel rounded-2xl mx-auto lg:mx-0">
          {MODES.map((mode) => (
            <button
              key={mode.id}
              onClick={() => setActiveMode(mode)}
              className={`p-3 rounded-xl transition-all duration-300 relative group ${
                activeMode.id === mode.id ? 'bg-white/10 shadow-lg scale-110' : 'hover:bg-white/5 hover:scale-105'
              }`}
            >
              <mode.appIcon 
                className={`w-8 h-8 transition-colors duration-300 ${
                  activeMode.id === mode.id ? 'text-white' : 'text-gray-400 group-hover:text-white'
                }`} 
              />
              {activeMode.id === mode.id && (
                <div className={`absolute -right-1 -top-1 w-3 h-3 rounded-full bg-${mode.themeColor} border-2 border-[#0f0f13] animate-pulse`} style={{backgroundColor: mode.themeColor}} />
              )}
            </button>
          ))}
        </div>

        {/* Main Interface */}
        <div className="glass-panel rounded-3xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-500 ring-1 ring-white/10">
          {/* Header */}
          <div className="h-14 border-b border-white/5 flex items-center justify-between px-6 bg-black/20">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="h-4 w-[1px] bg-white/10 mx-2" />
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <activeMode.appIcon className="w-4 h-4" />
                <span>Detected: <span className="text-white font-medium">{activeMode.name}</span></span>
              </div>
            </div>
            
            <div className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${activeMode.gradient} text-white shadow-lg`}>
              {activeMode.personaTitle} Mode
            </div>
          </div>

          {/* Chat Area */}
          <div className="h-[400px] flex flex-col p-6 gap-6 overflow-y-auto relative bg-gradient-to-b from-transparent to-black/20">
            {/* User Message */}
            <div className="flex justify-end animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="glass-panel bg-white/5 text-white px-5 py-3 rounded-2xl rounded-tr-sm max-w-[80%]">
                <p className="text-base">{activeMode.samplePrompt}</p>
              </div>
            </div>

            {/* AI Response */}
            <div className="flex justify-start gap-4">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${activeMode.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div className="glass-panel bg-brand-purple/10 border-brand-purple/20 text-gray-100 px-6 py-4 rounded-2xl rounded-tl-sm max-w-[85%] shadow-xl">
                 <p className="text-base leading-relaxed">
                   {displayedResponse}
                   {isTyping && <span className="inline-block w-2 h-4 ml-1 bg-current animate-pulse align-middle" />}
                 </p>
                 
                 {/* Rust Badge */}
                 {!isTyping && (
                   <div className="mt-4 flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity cursor-help">
                     <Zap className="w-3 h-3" />
                     <span className="text-xs font-mono uppercase tracking-wider">Generated in 12ms via Rust Core</span>
                   </div>
                 )}
              </div>
            </div>
          </div>

          {/* Input Area (Visual Only) */}
          <div className="p-4 border-t border-white/5 bg-black/20">
            <div className="glass-panel bg-white/5 rounded-xl flex items-center p-3 gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-gray-400">
                <span className="text-lg">+</span>
              </div>
              <div className="h-6 w-[1px] bg-white/10" />
              <div className="flex-1 text-gray-500 text-sm font-medium">Ask Jarvis anything...</div>
              <button className={`p-2 rounded-lg bg-gradient-to-r ${activeMode.gradient} text-white transition-transform hover:scale-105 active:scale-95`}>
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContextDemo;
