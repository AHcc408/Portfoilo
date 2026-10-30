import React, { useState } from 'react';
import { 
  GraduationCap, 
  Calendar, 
  Trophy, 
  Zap, 
  Users, 
  Award, 
  CheckCircle2, 
  Sparkles,
  MapPin,
  ArrowUpRight
} from 'lucide-react';

export default function CampusJourney() {
  const [activeMilestone, setActiveMilestone] = useState(0);

  const milestones = [
    {
      year: '2026',
      status: 'Present / Current Focus',
      title: 'Pre-Final Year ECE & National Hackathon Finalist',
      institution: 'KSIT (K.S. Institute of Technology, Bengaluru)',
      description:
        'Advancing core signal processing & embedded systems coursework while captaining our collegiate team to the grand finals of the Smart India Hackathon with an AI-driven IoT climate prototype.',
      tags: ['SIH Finalist', 'Embedded Systems', 'Full-Stack Architecture'],
      isCurrent: true,
    },
    {
      year: '2025',
      status: 'Milestone Year',
      title: 'Core Technical Club Member & Web Development Lead',
      institution: 'KSIT Tech Club // IEEE Student Branch',
      description:
        'Led a cohort of 18 junior developers in architecting registration portals for the annual college techno-cultural fest and facilitated peer-to-peer workshops on modern React and Git workflows.',
      tags: ['Technical Leadership', 'React / Next.js', 'Mentorship'],
      isCurrent: false,
    },
    {
      year: '2024',
      status: 'Foundation Year',
      title: 'Commenced B.Tech in ECE & Deployed First Production Web Application',
      institution: 'KSIT Campus',
      description:
        'Dove deep into C/C++ fundamentals, discrete logic design, and web programming basics; shipped my first deployed multi-user portal and solved over 100 competitive programming challenges.',
      tags: ['C / C++ Fundamentals', 'Logic Design', 'First Production App'],
      isCurrent: false,
    },
  ];

  const achievements = [
    {
      icon: Trophy,
      title: '1st Place Winner',
      subtitle: 'University Inter-College Hackathon 2025',
      stat: 'Top 1 of 85 Teams',
      accent: 'emerald',
    },
    {
      icon: Zap,
      title: '150+ LeetCode Solved',
      subtitle: 'Consistent Daily DSA & Algorithms Streak',
      stat: 'Top 15% Contest Rating',
      accent: 'lime',
    },
    {
      icon: Users,
      title: 'Tech Club Organizer',
      subtitle: 'Spearheaded 4+ Campus Hands-on Bootcamps',
      stat: '300+ Students Mentored',
      accent: 'teal',
    },
    {
      icon: Award,
      title: 'Full-Stack Certified',
      subtitle: 'Verified React, Node.js & Cloud Deployment',
      stat: 'Accredited Credential',
      accent: 'emerald',
    },
  ];

  return (
    <section id="campus-life" className="relative py-20 px-4 md:px-8 max-w-7xl mx-auto z-10">
      {/* Section Header */}
      <div className="mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs uppercase tracking-wider mb-3">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>Academic Milestones & Leadership</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Education & <span className="bg-gradient-to-r from-emerald-400 to-lime-300 bg-clip-text text-transparent">Campus Journey</span>
        </h2>
        <p className="text-slate-400 text-sm md:text-base mt-2 max-w-xl">
          Tracking my engineering progression at KSIT, leadership responsibilities, and competitive hackathon endeavors.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        {/* Left Column: Interactive Vertical Timeline (7 cols) */}
        <div className="lg:col-span-7 relative">
          {/* Continuous Illuminated Emerald Spine */}
          <div className="absolute left-[19px] sm:left-[23px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-emerald-400 via-emerald-500/50 to-carbon-700 pointer-events-none shadow-[0_0_8px_rgba(16,185,129,0.4)]" />

          <div className="space-y-8">
            {milestones.map((item, index) => {
              const isSelected = activeMilestone === index;
              return (
                <div
                  key={index}
                  onMouseEnter={() => setActiveMilestone(index)}
                  className="relative flex items-start gap-5 sm:gap-7 group cursor-pointer"
                >
                  {/* Glowing Nodal Dot */}
                  <div className="relative z-10 flex-shrink-0 mt-1.5">
                    <div
                      className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 transition-all duration-300 ${
                        item.isCurrent || isSelected
                          ? 'bg-emerald-950 border-emerald-400 shadow-[0_0_20px_#10b981] scale-110'
                          : 'bg-carbon-900 border-carbon-600 group-hover:border-emerald-500/60'
                      }`}
                    >
                      {item.isCurrent ? (
                        <div className="relative flex items-center justify-center">
                          <span className="absolute w-4 h-4 rounded-full bg-emerald-400 opacity-75 animate-ping" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-300 shadow-[0_0_8px_#34d399]" />
                        </div>
                      ) : (
                        <span
                          className={`text-xs font-mono font-bold transition-colors ${
                            isSelected ? 'text-emerald-300' : 'text-slate-400 group-hover:text-emerald-400'
                          }`}
                        >
                          {item.year.slice(2)}'
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Milestone Card Content */}
                  <div
                    className={`flex-1 rounded-2xl p-6 sm:p-7 transition-all duration-300 border backdrop-blur-xl ${
                      isSelected
                        ? 'bg-[#11161d]/90 border-emerald-500/50 shadow-[0_12px_32px_-10px_rgba(16,185,129,0.25)] -translate-y-1'
                        : 'bg-[#11161d]/60 border-carbon-700/60 hover:border-emerald-500/30 hover:bg-[#11161d]/80'
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                          {item.year}
                        </span>
                        <span className="text-[11px] font-mono text-lime-400/90 tracking-wide">
                          // {item.status}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-[11px] font-mono text-slate-500">
                        <MapPin className="w-3 h-3 text-emerald-400/70" />
                        <span>Bengaluru, IN</span>
                      </div>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors">
                      {item.title}
                    </h3>

                    <div className="text-xs font-mono text-slate-400 mb-3 flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{item.institution}</span>
                    </div>

                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2 border-t border-carbon-700/60">
                      {item.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-0.5 text-[11px] font-mono rounded bg-carbon-800 text-slate-300 border border-carbon-600/50 group-hover:border-emerald-500/25 group-hover:text-emerald-200 transition-colors"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Compact 2x2 Grid of Achievement Badges (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Trophy className="w-4 h-4 text-emerald-400" />
              <h3 className="text-lg font-bold text-white font-mono tracking-tight uppercase text-xs">
                Key Accomplishments & Proof of Work
              </h3>
            </div>

            {/* 2x2 Compact Achievement Callout Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {achievements.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="group relative rounded-2xl bg-[#11161d]/85 backdrop-blur-xl border border-emerald-500/20 p-5 flex flex-col justify-between transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 hover:border-emerald-400/70 hover:shadow-[0_12px_28px_-8px_rgba(16,185,129,0.3)] shadow-[0_4px_16px_rgba(0,0,0,0.4)]"
                  >
                    <div>
                      {/* Top icon and stat chip */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-9 h-9 rounded-xl bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:text-lime-300 group-hover:border-emerald-400 transition-colors shadow-[0_0_12px_rgba(16,185,129,0.2)]">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-carbon-800 text-emerald-300 border border-emerald-500/20">
                          {item.stat}
                        </span>
                      </div>

                      <h4 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-400 leading-snug">
                        {item.subtitle}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-carbon-700/60 flex items-center justify-between text-[10px] font-mono text-slate-500">
                      <span>Verified Milestone</span>
                      <ArrowUpRight className="w-3 h-3 text-emerald-400 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Student Philosophy Callout Box */}
          <div className="mt-6 p-6 rounded-2xl bg-gradient-to-br from-carbon-900 to-[#121c17] border border-emerald-500/30 backdrop-blur-md shadow-lg relative overflow-hidden">
            <div className="absolute -right-6 -bottom-6 w-28 h-28 bg-emerald-500/10 rounded-full blur-xl pointer-events-none" />
            <div className="relative z-10 flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-lime-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-1">
                  Classroom Theory Meets Real-World Code
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  "Blending ECE hardware intuition with modern full-stack web engineering allows me to approach problems holistically — from raw electrical signals up to reactive user interfaces."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
