import React, { useState, useEffect } from 'react';
import { Terminal, Menu, X, Code2, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Campus Life', href: '#campus-life' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 md:pt-6 transition-all duration-300">
      <nav
        className={`w-full max-w-6xl mx-auto rounded-2xl transition-all duration-300 ${
          scrolled
            ? 'bg-[#0d1117]/85 backdrop-blur-xl border border-emerald-500/25 shadow-[0_8px_32px_0_rgba(0,0,0,0.6)] shadow-emerald-950/20 py-3 px-5 md:px-7'
            : 'bg-[#0d1117]/50 backdrop-blur-md border border-emerald-500/15 py-4 px-6 md:px-8'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#"
            className="group flex items-center gap-2.5 font-mono text-base tracking-wide text-slate-100 transition-colors"
          >
            <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.3)] transition-all duration-300 group-hover:border-emerald-400 group-hover:shadow-[0_0_18px_rgba(16,185,129,0.6)]">
              <span className="font-bold text-sm tracking-tighter text-emerald-300 group-hover:text-lime-300 transition-colors">
                AH
              </span>
              <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-lime-400 shadow-[0_0_8px_#a3e635]"></span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-wider text-slate-100 text-sm md:text-base group-hover:text-emerald-300 transition-colors">
                ADITYA<span className="text-emerald-400">.HAIT</span>
              </span>
              <span className="text-[10px] text-emerald-500/70 font-mono tracking-widest uppercase">
                ECE // KSIT
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1.5 lg:gap-2 bg-carbon-900/60 p-1.5 rounded-xl border border-emerald-500/10">
            {navLinks.map((link) => {
              const isActive = activeItem === link.name;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveItem(link.name)}
                  className={`relative px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 shadow-[0_0_12px_rgba(16,185,129,0.2)]'
                      : 'text-slate-300 hover:text-emerald-300 hover:bg-emerald-500/5'
                  }`}
                >
                  <span className="font-mono text-xs opacity-40 mr-1 text-emerald-400">#</span>
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* CTA / Quick Status */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#contact"
              className="relative inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-medium rounded-lg bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 hover:border-emerald-400 hover:bg-emerald-500/20 hover:text-white transition-all duration-200 shadow-[0_0_15px_rgba(16,185,129,0.15)] group"
            >
              <Terminal className="w-3.5 h-3.5 text-emerald-400 group-hover:rotate-12 transition-transform duration-200" />
              <span>hire_me.sh</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-carbon-800/80 border border-emerald-500/20 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-emerald-500/15 flex flex-col gap-2 pb-2 animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveItem(link.name);
                  setMobileMenuOpen(false);
                }}
                className="px-4 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:text-emerald-300 hover:bg-emerald-500/10 flex items-center justify-between border border-transparent hover:border-emerald-500/20 transition-all"
              >
                <span>{link.name}</span>
                <span className="text-xs font-mono text-emerald-400/60">→</span>
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 text-center py-2.5 text-xs font-mono rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/30"
            >
              Run: hire_me.sh
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
