import React from 'react';
import MatrixDotGrid from './components/MatrixDotGrid';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProjects from './components/FeaturedProjects';
import TechStack from './components/TechStack';
import CampusJourney from './components/CampusJourney';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0d1117] text-slate-100 overflow-x-hidden selection:bg-emerald-500 selection:text-black">
      {/* Interactive Cyber-Emerald Matrix Canvas */}
      <MatrixDotGrid />

      {/* Floating Glassmorphism Navbar */}
      <Navbar />

      {/* Opening Hero Intro Screen */}
      <main className="relative z-10">
        <Hero />

        {/* Featured Projects Showcase directly below the Intro */}
        <FeaturedProjects />

        {/* Interactive Tech Stack & Skills directly below Projects */}
        <TechStack />

        {/* Education & Campus Journey directly below Skills */}
        <CampusJourney />

        {/* Placeholder anchor sections to support navigation */}
        <section id="about" className="py-24 px-6 border-t border-carbon-800/80 max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-emerald-400 font-mono text-xl font-bold">01.</span>
            <h2 className="text-2xl font-bold text-white tracking-tight">About Me</h2>
            <div className="h-[1px] flex-grow bg-carbon-700/80 ml-4 max-w-xs" />
          </div>
          <p className="text-slate-400 leading-relaxed max-w-2xl text-sm md:text-base">
            Hello! I'm Aditya, an Electronics and Communication Engineering (ECE) student at KSIT with a deep fascination for full-stack engineering, interactive web applications, and autonomous intelligent systems. When I'm not prototyping modern frontend interfaces, I explore machine learning models and hardware-software intersections.
          </p>
        </section>







        <section id="contact" className="py-24 px-6 border-t border-carbon-800/80 max-w-5xl mx-auto mb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-emerald-400 font-mono text-xl font-bold">05.</span>
            <h2 className="text-2xl font-bold text-white tracking-tight">Get In Touch</h2>
            <div className="h-[1px] flex-grow bg-carbon-700/80 ml-4 max-w-xs" />
          </div>
          <p className="text-slate-400 text-sm max-w-lg mb-6">
            Whether you have an internship opportunity, an open-source collaboration, or just want to talk tech, my inbox is always open.
          </p>
          <a
            href="mailto:aditya@example.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-carbon-800 border border-emerald-500/40 text-emerald-300 font-mono text-sm hover:border-emerald-400 hover:bg-emerald-500/10 transition-all shadow-[0_0_15px_rgba(16,185,129,0.1)]"
          >
            Say Hello ↗
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-carbon-800 text-xs font-mono text-slate-500">
        Designed & Built by Aditya Hait // ECE @ KSIT
      </footer>
    </div>
  );
}
