import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PainPointSolution from './components/PainPointSolution';
import PersonalityPacks from './components/PersonalityPacks';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import UseCases from './components/UseCases';
import Comparison from './components/Comparison';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0f0f13] text-white selection:bg-brand-purple/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <PainPointSolution />
        <PersonalityPacks />
        <HowItWorks />
        <Features />
        <UseCases />
        <Comparison />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;