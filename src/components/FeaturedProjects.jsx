import React, { useRef, useState } from 'react';
import { ExternalLink, Sparkles, Layers, Cpu, Globe, Code2 } from 'lucide-react';

function GithubIcon({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

// Single 3D Tilt Glass Card with glossy sheen effect
function ProjectCard({ project }) {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation (-10deg to 10deg)
    const rotX = ((y - centerY) / centerY) * -10;
    const rotY = ((x - centerX) / centerX) * 10;

    setRotateX(rotX);
    setRotateY(rotY);

    // Glare position percentage
    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.22,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      style={{ perspective: '1000px' }}
      className="w-full flex justify-center"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: isHovered
            ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`
            : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)',
          transition: isHovered
            ? 'transform 0.1s ease-out, box-shadow 0.3s ease'
            : 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.5s ease',
        }}
        className={`relative w-full rounded-2xl bg-[#11161d]/85 backdrop-blur-xl border border-emerald-500/20 p-6 md:p-7 flex flex-col justify-between overflow-hidden group ${
          isHovered
            ? 'shadow-[0_20px_40px_-15px_rgba(0,0,0,0.8),0_0_30px_2px_rgba(16,185,129,0.22)] border-emerald-500/50'
            : 'shadow-[0_10px_30px_-15px_rgba(0,0,0,0.6)]'
        }`}
      >
        {/* Dynamic Holographic Glare Sheen */}
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 280px at ${glarePos.x}% ${glarePos.y}%, rgba(163, 230, 53, 0.2), rgba(16, 185, 129, 0.1) 40%, transparent 80%)`,
            opacity: glarePos.opacity,
          }}
        />

        {/* Diagonal Sleek Light Sweep on Hover */}
        <div
          className={`pointer-events-none absolute -inset-full h-[200%] w-[200%] rotate-45 bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-1000 ease-in-out ${
            isHovered ? 'translate-x-full translate-y-full' : '-translate-x-full -translate-y-full'
          }`}
        />

        <div>
          {/* Card Header: Category & Index */}
          <div className="flex items-center justify-between mb-4">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono font-medium tracking-wide bg-emerald-500/10 text-emerald-300 border border-emerald-500/25">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              {project.category}
            </span>
            <span className="text-xs font-mono text-slate-500 group-hover:text-emerald-400/80 transition-colors">
              {project.id}
            </span>
          </div>

          {/* Project Title */}
          <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-emerald-300 transition-colors flex items-center justify-between">
            <span>{project.title}</span>
            <span className="text-xs font-mono text-lime-400 opacity-0 group-hover:opacity-100 transition-opacity">
              &lt;/&gt;
            </span>
          </h3>

          {/* 2-Sentence Description */}
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 text-xs font-mono rounded-md bg-carbon-800/80 text-slate-300 border border-carbon-600/60 group-hover:border-emerald-500/30 group-hover:text-emerald-200 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons: Live Demo & GitHub Code */}
        <div className="relative z-10 pt-4 border-t border-carbon-700/60 flex items-center gap-3">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-semibold font-mono bg-emerald-400/90 text-carbon-950 hover:bg-emerald-300 hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-all duration-200"
          >
            <ExternalLink className="w-3.5 h-3.5 text-carbon-950" />
            <span>Live Demo</span>
          </a>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-semibold font-mono bg-carbon-800/90 text-slate-200 hover:text-white border border-emerald-500/30 hover:border-emerald-400 hover:bg-carbon-800 transition-all duration-200 shadow-sm"
          >
            <GithubIcon className="w-3.5 h-3.5 text-emerald-400" />
            <span>GitHub Code</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function FeaturedProjects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filterTabs = ['All', 'Web Apps', 'AI / ML', 'Mini-Projects'];

  const projectsData = [
    {
      id: 'PROJ_01',
      title: 'Campus Event Finder',
      category: 'Web Apps',
      filterCategory: 'Web Apps',
      description:
        'A high-performance student discovery portal unifying campus club recruitments, hackathons, and guest lectures in real time. It resolves fragmented college group notifications with instant RSVP notifications and automated calendar syncing.',
      tags: ['React', 'Firebase', 'Tailwind CSS', 'Vite'],
      demoUrl: 'https://github.com',
      githubUrl: 'https://github.com',
    },
    {
      id: 'PROJ_02',
      title: 'Smart Attendance Tracker',
      category: 'AI / ML',
      filterCategory: 'AI / ML',
      description:
        'An automated facial verification system designed to eliminate manual paper roll calls during large lecture sessions. Built with lightweight deep learning embeddings, it achieves 98.4% accuracy under varying classroom lighting conditions.',
      tags: ['Python', 'OpenCV', 'PyTorch', 'FastAPI'],
      demoUrl: 'https://github.com',
      githubUrl: 'https://github.com',
    },
    {
      id: 'PROJ_03',
      title: 'Student Notes Marketplace',
      category: 'Web Apps',
      filterCategory: 'Web Apps',
      description:
        'A peer-to-peer digital academic repository where engineering undergraduates can share, rate, and preview semester study materials. It simplifies semester exam prep through verified subject tags and fast search indexing.',
      tags: ['Node.js', 'Express', 'Tailwind', 'MongoDB'],
      demoUrl: 'https://github.com',
      githubUrl: 'https://github.com',
    },
    {
      id: 'PROJ_04',
      title: 'ECE Logic Gate Simulator',
      category: 'Mini-Projects',
      filterCategory: 'Mini-Projects',
      description:
        'An interactive browser canvas tool for simulating boolean algebra circuits and timing diagrams in real time. Built specifically for junior KSIT engineering lab students to test circuit designs before hardware breadboarding.',
      tags: ['HTML5 Canvas', 'TypeScript', 'Tailwind'],
      demoUrl: 'https://github.com',
      githubUrl: 'https://github.com',
    },
    {
      id: 'PROJ_05',
      title: 'AI Lecture Summarizer',
      category: 'AI / ML',
      filterCategory: 'AI / ML',
      description:
        'A speech-to-text pipeline that transcribes classroom audio recordings and generates concise bulleted revision summaries with flashcards. Leverages Whisper and fine-tuned LLM prompts for STEM technical terminology.',
      tags: ['Python', 'OpenAI API', 'React', 'FastAPI'],
      demoUrl: 'https://github.com',
      githubUrl: 'https://github.com',
    },
    {
      id: 'PROJ_06',
      title: 'Automated Lab Equipment Logger',
      category: 'Mini-Projects',
      filterCategory: 'Mini-Projects',
      description:
        'An IoT dashboard connecting microcontroller sensors to track oscilloscope calibration cycles and equipment checkouts in college labs. Drastically reduces manual logbook overhead for faculty and students.',
      tags: ['ESP32', 'C++', 'MQTT', 'Tailwind'],
      demoUrl: 'https://github.com',
      githubUrl: 'https://github.com',
    },
  ];

  const filteredProjects =
    activeFilter === 'All'
      ? projectsData.slice(0, 3) // Defaults to 3 primary student showcase cards or all matching
      : projectsData.filter((p) => p.filterCategory === activeFilter);

  return (
    <section id="projects" className="relative py-20 px-4 md:px-8 max-w-7xl mx-auto z-10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Curated Engineering Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="bg-gradient-to-r from-emerald-400 to-lime-300 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base mt-2 max-w-xl">
            Selected engineering applications, algorithms, and practical tools designed to solve real student and campus challenges.
          </p>
        </div>

        {/* Filter Pill Row */}
        <div className="flex flex-wrap items-center gap-2 bg-carbon-900/90 p-1.5 rounded-xl border border-carbon-700/80 backdrop-blur-md">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-emerald-500 text-carbon-950 font-bold shadow-[0_0_15px_rgba(16,185,129,0.4)]'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-carbon-800'
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3-Column Responsive Grid with Perspective Physics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* GitHub Callout Footer banner */}
      <div className="mt-14 p-6 rounded-2xl bg-carbon-900/60 border border-emerald-500/15 flex flex-col sm:flex-row items-center justify-between gap-4 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono text-slate-300">
            More experimental repositories and open-source contributions live on GitHub.
          </span>
        </div>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-emerald-400 hover:text-lime-300 hover:underline underline-offset-4 transition-colors"
        >
          <span>Explore All Repositories</span>
          <span className="text-sm">→</span>
        </a>
      </div>
    </section>
  );
}
