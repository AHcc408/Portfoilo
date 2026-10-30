import React from 'react';
import { 
  ArrowRight, 
  Download, 
  ExternalLink, 
  Sparkles, 
  Terminal, 
  Cpu, 
  Code, 
  Layers,
  ChevronDown
} from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 md:px-8 overflow-hidden">
      {/* Background radial gradient glow (Cyber Emerald & Matte Carbon blend) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-emerald-500/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-1/4 w-[350px] h-[250px] bg-lime-400/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
        
        {/* Status Badge: Animated blinking radar pill */}
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-carbon-800/80 border border-emerald-500/30 backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.15)] mb-8 transition-transform hover:scale-[1.02] cursor-default">
          <div className="relative flex items-center justify-center w-3 h-3">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400 shadow-[0_0_8px_#10b981]" />
          </div>
          <span className="text-xs md:text-sm font-mono tracking-wide text-slate-300 font-medium">
            Student Developer <span className="text-emerald-500 font-bold">//</span> <span className="text-emerald-300">Open for Internships</span>
          </span>
          <span className="inline-block px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-lime-400/20 text-lime-300 border border-lime-400/30">
            2026 ACTIVE
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1] max-w-4xl">
          <span className="block text-slate-100 font-mono tracking-tight">
            ADITYA HAIT
          </span>
          <span className="block mt-2 bg-gradient-to-r from-emerald-400 via-teal-300 to-lime-300 bg-clip-text text-transparent drop-shadow-[0_2px_20px_rgba(16,185,129,0.3)]">
            Building the Future of Tech.
          </span>
        </h1>

        {/* Student Bio */}
        <p className="max-w-2xl text-base sm:text-lg md:text-xl text-slate-400 font-normal leading-relaxed mb-10">
          <span className="font-semibold text-emerald-400 font-mono">ECE at KSIT</span> passionate about{' '}
          <span className="text-slate-200 underline decoration-emerald-500/50 underline-offset-4">web development</span>,{' '}
          <span className="text-slate-200 underline decoration-lime-500/50 underline-offset-4">AI systems</span>, and building high-performance, real-world digital experiences.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16">
          {/* Primary Action Button - Glowing Emerald */}
          <a
            href="#projects"
            className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-medium text-black text-sm md:text-base bg-emerald-400 hover:bg-emerald-300 transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_25px_rgba(16,185,129,0.4)] hover:shadow-[0_0_35px_rgba(16,185,129,0.7)] font-semibold"
          >
            <span>View My Projects</span>
            <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform duration-200" />
            <span className="absolute inset-0 rounded-xl border border-white/30 pointer-events-none" />
          </a>

          {/* Secondary Action Button - Carbon Outline with Emerald Hover */}
          <a
            href="#resume"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-medium text-slate-200 text-sm md:text-base bg-carbon-800/60 hover:bg-carbon-800 border border-emerald-500/30 hover:border-emerald-400/80 hover:text-emerald-300 transition-all duration-300 transform hover:-translate-y-0.5 backdrop-blur-sm shadow-[0_4px_16px_rgba(0,0,0,0.4)]"
          >
            <Download className="w-4 h-4 text-emerald-400" />
            <span>Download Resume / CV</span>
          </a>
        </div>

        {/* Tech Stack Ticker / Terminal Pill Deck */}
        <div className="w-full max-w-3xl pt-6 border-t border-carbon-700/60 flex flex-col items-center">
          <div className="text-[11px] font-mono tracking-widest text-slate-500 uppercase mb-4 flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-emerald-400" />
            <span>Core Technical Arsenal</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {[
              { name: 'React / Next.js', icon: Code },
              { name: 'Tailwind CSS', icon: Sparkles },
              { name: 'Node.js & Python', icon: Terminal },
              { name: 'AI / LLM Integration', icon: Cpu },
              { name: 'Embedded / IoT & ECE', icon: Layers },
            ].map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-carbon-800/40 border border-emerald-500/15 text-xs font-mono text-slate-300 hover:border-emerald-500/40 hover:text-emerald-300 hover:bg-emerald-950/20 transition-all cursor-default"
                >
                  <Icon className="w-3.5 h-3.5 text-emerald-400/70" />
                  <span>{skill.name}</span>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Subtle Scroll Down Indicator */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500 hover:text-emerald-400 transition-colors duration-200"
        aria-label="Scroll to content"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-emerald-500/80" />
      </a>
    </section>
  );
}
