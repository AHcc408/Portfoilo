import React, { useState } from 'react';
import { Cpu, Terminal, Wrench, BookOpen, Sparkles } from 'lucide-react';

// Tech SVG Icons with custom clean vector paths
function TechIcon({ name, className = "w-4 h-4" }) {
  switch (name) {
    case 'C++':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M10 9a3 3 0 1 0 0 6" />
          <path d="M15 11v2m-1-1h2" />
          <path d="M19 11v2m-1-1h2" />
        </svg>
      );
    case 'Python':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.91 2c-5.06 0-4.73 2.19-4.73 2.19l.01 2.28h4.81v.69H5.21S2 6.8 2 11.95c0 5.14 2.8 4.95 2.8 4.95h1.67v-2.33s-.09-2.8 2.76-2.8h4.73s2.68.04 2.68-2.61V4.69S16.98 2 11.91 2zm-2.58 1.48a.96.96 0 1 1 0 1.93.96.96 0 0 1 0-1.93zM12.09 22c5.06 0 4.73-2.19 4.73-2.19l-.01-2.28h-4.81v-.69h6.79S22 17.2 22 12.05c0-5.14-2.8-4.95-2.8-4.95h-1.67v2.33s.09 2.8-2.76 2.8h-4.73s-2.68-.04-2.68 2.61v4.47S7.02 22 12.09 22zm2.58-1.48a.96.96 0 1 1 0-1.93.96.96 0 0 1 0 1.93z" />
        </svg>
      );
    case 'JavaScript':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 3h18v18H3V3zm14.54 13.57c-.55.93-1.47 1.54-2.83 1.54-2.07 0-3.32-1.32-3.32-3.37 0-2.3 1.5-3.5 3.42-3.5 1.09 0 1.95.42 2.5 1.14l-1.35 1.02c-.32-.47-.73-.72-1.22-.72-.94 0-1.57.65-1.57 1.98 0 1.25.59 1.92 1.56 1.92.59 0 1.04-.3 1.34-.8l1.47.77zm-6.84.45c-.29.58-.87 1.09-1.9 1.09-1.43 0-2.22-.84-2.22-2.3v-4.48h1.76v4.35c0 .63.29.98.81.98.49 0 .84-.33 1.06-.72l.49 1.08z" />
        </svg>
      );
    case 'Java':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
          <line x1="6" y1="1" x2="6" y2="4" />
          <line x1="10" y1="1" x2="10" y2="4" />
          <line x1="14" y1="1" x2="14" y2="4" />
        </svg>
      );
    case 'C / Embedded C':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <rect x="9" y="9" width="6" height="6" />
          <line x1="9" y1="1" x2="9" y2="4" />
          <line x1="15" y1="1" x2="15" y2="4" />
          <line x1="9" y1="20" x2="9" y2="23" />
          <line x1="15" y1="20" x2="15" y2="23" />
          <line x1="20" y1="9" x2="23" y2="9" />
          <line x1="20" y1="14" x2="23" y2="14" />
          <line x1="1" y1="9" x2="4" y2="9" />
          <line x1="1" y1="14" x2="4" y2="14" />
        </svg>
      );
    case 'React':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="2.5" fill="currentColor" />
          <ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(0 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(120 12 12)" />
        </svg>
      );
    case 'Tailwind CSS':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
        </svg>
      );
    case 'Node.js':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l9 5.2v10.4l-9 5.2-9-5.2V7.2L12 2zm0 2.3L5 8.3v7.4l7 4 7-4V8.3l-7-4z" />
        </svg>
      );
    case 'Git & GitHub':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      );
    case 'Vite & Next.js':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 22h20L12 2zm0 4.8l6.2 12.4H5.8L12 6.8z" />
        </svg>
      );
    case 'Data Structures & Algorithms':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="5" r="3" />
          <circle cx="6" cy="19" r="3" />
          <circle cx="18" cy="19" r="3" />
          <line x1="12" y1="8" x2="6" y2="16" />
          <line x1="12" y1="8" x2="18" y2="16" />
        </svg>
      );
    case 'Object-Oriented Programming (OOP)':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
        </svg>
      );
    case 'Database Management (DBMS & SQL)':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      );
    case 'Operating Systems (OS & Linux)':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      );
    default:
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 18l6-6-6-6" />
          <path d="M8 6l-6 6 6 6" />
        </svg>
      );
  }
}

// Individual Skill Pill Badge with Hover Physics, Neon Border Glow & Comfort Tooltip
function SkillBadge({ skill }) {
  const [hovered, setHovered] = useState(false);

  // Comfort Level Pill styling mapping
  const levelConfig = {
    'Proficient': {
      color: 'text-emerald-300',
      bg: 'bg-emerald-950/90',
      border: 'border-emerald-500/40',
      indicator: 'bg-emerald-400',
    },
    'Familiar': {
      color: 'text-lime-300',
      bg: 'bg-lime-950/90',
      border: 'border-lime-500/40',
      indicator: 'bg-lime-400',
    },
    'Currently Learning': {
      color: 'text-teal-300',
      bg: 'bg-teal-950/90',
      border: 'border-teal-500/40',
      indicator: 'bg-teal-400 animate-pulse',
    },
  };

  const currentLevel = levelConfig[skill.level] || levelConfig['Familiar'];

  return (
    <div
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Skill Badge Pill */}
      <div
        className={`group relative flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-carbon-900/90 border transition-all duration-300 cursor-pointer select-none backdrop-blur-md ${
          hovered
            ? 'scale-105 border-emerald-400 text-white shadow-[0_0_20px_rgba(16,185,129,0.35)] -translate-y-0.5'
            : 'border-emerald-500/20 text-slate-300 hover:border-emerald-500/40 shadow-[0_4px_12px_rgba(0,0,0,0.4)]'
        }`}
      >
        {/* Ambient Pill Neon Accent Bar */}
        <div className={`transition-colors duration-200 ${hovered ? 'text-emerald-400' : 'text-emerald-500/70'}`}>
          <TechIcon name={skill.name} className="w-4 h-4" />
        </div>

        <span className="text-xs sm:text-sm font-mono font-medium tracking-tight">
          {skill.name}
        </span>

        {/* Tiny comfort dot inside the badge */}
        <span
          className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
            hovered ? `${currentLevel.indicator} shadow-[0_0_6px_#10b981]` : 'bg-carbon-600'
          }`}
        />
      </div>

      {/* Comfort Level Interactive Tooltip */}
      {hovered && (
        <div className="absolute left-1/2 -top-10 -translate-x-1/2 z-30 pointer-events-none transition-all duration-200 animate-in fade-in slide-in-from-bottom-2">
          <div
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-mono font-semibold whitespace-nowrap shadow-xl border backdrop-blur-xl ${currentLevel.bg} ${currentLevel.color} ${currentLevel.border}`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${currentLevel.indicator}`} />
            <span>{skill.level}</span>
          </div>
          {/* Tooltip downward arrowhead */}
          <div className="w-2 h-2 rotate-45 bg-carbon-950 border-r border-b border-emerald-500/40 mx-auto -mt-1" />
        </div>
      )}
    </div>
  );
}

export default function TechStack() {
  const categories = [
    {
      title: 'Languages',
      icon: Terminal,
      description: 'Foundational programming and algorithmic problem-solving syntax.',
      skills: [
        { name: 'C++', level: 'Proficient' },
        { name: 'Python', level: 'Proficient' },
        { name: 'JavaScript', level: 'Proficient' },
        { name: 'Java', level: 'Familiar' },
        { name: 'C / Embedded C', level: 'Familiar' },
      ],
    },
    {
      title: 'Frameworks & Tools',
      icon: Wrench,
      description: 'Modern full-stack libraries, toolchains, and collaborative workflows.',
      skills: [
        { name: 'React', level: 'Proficient' },
        { name: 'Tailwind CSS', level: 'Proficient' },
        { name: 'Node.js', level: 'Proficient' },
        { name: 'Git & GitHub', level: 'Proficient' },
        { name: 'Vite & Next.js', level: 'Currently Learning' },
      ],
    },
    {
      title: 'Core CS Concepts',
      icon: BookOpen,
      description: 'Rigorous engineering foundations from data patterns to system architecture.',
      skills: [
        { name: 'Data Structures & Algorithms', level: 'Proficient' },
        { name: 'Object-Oriented Programming (OOP)', level: 'Proficient' },
        { name: 'Database Management (DBMS & SQL)', level: 'Familiar' },
        { name: 'Operating Systems (OS & Linux)', level: 'Familiar' },
      ],
    },
  ];

  return (
    <section id="skills" className="relative py-20 px-4 md:px-8 max-w-7xl mx-auto z-10">
      {/* Section Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs uppercase tracking-wider mb-3">
          <Cpu className="w-3.5 h-3.5" />
          <span>Technical Architecture</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Tech Stack & <span className="bg-gradient-to-r from-emerald-400 to-lime-300 bg-clip-text text-transparent">Skills</span>
        </h2>
        <p className="text-slate-400 text-sm md:text-base mt-2 max-w-xl">
          Core technologies, frameworks, and fundamental computer science disciplines applied across my software projects.
        </p>
      </div>

      {/* 3 Tidy Category Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {categories.map((category, idx) => {
          const CategoryIcon = category.icon;
          return (
            <div
              key={idx}
              className="rounded-2xl bg-[#11161d]/85 backdrop-blur-xl border border-emerald-500/20 p-6 md:p-8 flex flex-col justify-between shadow-[0_10px_30px_-15px_rgba(0,0,0,0.6)] hover:border-emerald-500/40 hover:shadow-[0_12px_32px_-10px_rgba(16,185,129,0.15)] transition-all duration-300"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                    <CategoryIcon className="w-4 h-4" />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {category.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-400 font-mono mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Skill Badges Flex Container */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill, sIdx) => (
                    <SkillBadge key={sIdx} skill={skill} />
                  ))}
                </div>
              </div>

              {/* Bottom Category Meta Accent */}
              <div className="mt-8 pt-4 border-t border-carbon-700/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>{category.skills.length} Competencies</span>
                <span className="text-emerald-400/80">Active Stack ↗</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Level Legend Bar */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-6 py-3 px-6 rounded-xl bg-carbon-900/50 border border-carbon-700/60 max-w-2xl mx-auto backdrop-blur-sm">
        <span className="text-xs font-mono text-slate-400">Comfort Indicators:</span>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_#10b981]" />
          <span className="text-xs font-mono text-slate-300">Proficient</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-lime-400 shadow-[0_0_6px_#a3e635]" />
          <span className="text-xs font-mono text-slate-300">Familiar</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
          <span className="text-xs font-mono text-slate-300">Currently Learning</span>
        </div>
      </div>
    </section>
  );
}
