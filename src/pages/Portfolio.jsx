import React, { useState } from 'react';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import GlassCard from '../components/ui/GlassCard.jsx';
import GlowButton from '../components/ui/GlowButton.jsx';
import CTABannerSection from '../components/home/CTABannerSection.jsx';

import { projects } from '../data/projects.js';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Web Apps & AI', 'E-Commerce', 'Fintech', 'SaaS', 'Web Development'];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="relative pt-32 pb-20 overflow-hidden">
      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <div className="flex justify-center mb-12">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-neon">
            ↳ SYSTEM / PORTFOLIO
          </span>
        </div>
        <h1 className="text-[clamp(4rem,9vw,10rem)] font-display font-black text-white tracking-tighter uppercase leading-[0.85] mb-12">
          ENGINEERED <br />
          <span className="text-neon">FOR IMPACT.</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg sm:text-xl font-mono text-foreground/60 leading-relaxed uppercase">
          Every project we ship represents a fusion of Silicon Valley engineering standards and premium visual design.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 flex justify-center">
        <div className="inline-flex flex-wrap items-center justify-center gap-2 p-1.5 bg-white/5 border border-white/10 rounded-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2.5 rounded-none font-mono text-xs uppercase tracking-widest transition-all duration-300 border ${
                activeFilter === cat
                  ? 'bg-neon text-black border-neon'
                  : 'text-foreground/70 border-transparent hover:border-white/20 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 mb-32">
        {filteredProjects.map((project, index) => (
          <GlassCard key={project.id || index} className="p-0 overflow-hidden" glowColor="none" hoverEffect={false}>
            <div className={`grid grid-cols-1 lg:grid-cols-12 gap-0 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Cover Image & Gallery Preview */}
              <div className={`lg:col-span-6 relative overflow-hidden min-h-[380px] bg-white/[0.02] flex items-center justify-center ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                {(project.coverImage || project.image) ? (
                  <img
                    src={project.coverImage || project.image}
                    alt={project.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                ) : (
                  <div className="text-center p-8">
                    <div className="font-mono text-neon text-3xl font-black mb-2">YENTRA</div>
                    <div className="font-mono text-xs uppercase tracking-widest text-foreground/40">{project.name}</div>
                  </div>
                )}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-black text-xs font-mono font-semibold text-neon border border-neon uppercase tracking-widest">
                    {project.industry}
                  </span>
                </div>
              </div>

              {/* Project Metadata */}
              <div className={`lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-foreground/50 mb-6 font-mono uppercase tracking-widest gap-2">
                    <span>CLIENT: {project.client}</span>
                    <span>TIMELINE: {project.timeline}</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-display font-black uppercase text-white tracking-tighter mb-6 leading-none">
                    {project.name}
                  </h2>

                  {/* Challenge & Solution */}
                  <div className="space-y-6 mb-8 border-t border-white/10 pt-6">
                    <div>
                      <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-coral mb-2">
                        ↳ The Challenge
                      </h3>
                      <p className="text-sm font-mono text-foreground/60 leading-relaxed uppercase">
                        {project.challenge}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-neon mb-2">
                        ↳ Our Solution
                      </h3>
                      <p className="text-sm font-mono text-foreground/60 leading-relaxed uppercase">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  {/* Key Outcomes */}
                  <div className="p-6 bg-white/5 border border-white/10 mb-8 space-y-4">
                    <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-white">
                      Key Outcomes
                    </h3>
                    <ul className="space-y-2">
                      {project.outcomes.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-neon font-mono uppercase">
                          <span>›</span>
                          <span className="text-foreground/90">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tech & Action */}
                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-black text-xs font-mono uppercase tracking-widest text-foreground/70 border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-black bg-neon px-4 py-2 hover:bg-white transition-colors"
                      >
                        <span>VISIT LIVE SITE</span>
                        <span>↗</span>
                      </a>
                    )}
                    {project.isCaseStudy && (
                      <a
                        href={`#case-study-${project.id}`}
                        className="inline-flex items-center gap-2 text-sm font-mono font-bold uppercase tracking-widest text-neon hover:text-white transition-colors"
                      >
                        <span>Read Deep-Dive Case Study Below</span>
                        <span>↓</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Deep-Dive Case Studies Section */}
      {projects.some((p) => p.isCaseStudy) && (
        <section id="case-studies" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
          <SectionHeading
            badge="In-Depth Case Studies"
            title="How We Engineer"
            highlight="Success"
            subtitle="A behind-the-scenes look into our technical research, design decisions, and architectural approaches."
          />

          <div className="space-y-24">
            {projects
              .filter((p) => p.isCaseStudy)
              .map((p) => (
                <div key={p.id} id={`case-study-${p.id}`} className="scroll-mt-32">
                  <GlassCard className="p-8 sm:p-14 lg:p-16" glowColor="none">
                    <div className="border-b border-white/10 pb-8 mb-12 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <span className="font-mono text-xs font-bold uppercase tracking-widest text-neon block mb-2">
                          ↳ CASE STUDY DEEP-DIVE
                        </span>
                        <h3 className="text-3xl sm:text-5xl font-display font-black text-white uppercase tracking-tighter">
                          {p.name}
                        </h3>
                      </div>
                      <span className="text-xs px-3 py-1.5 bg-white/5 text-foreground/70 font-mono tracking-widest uppercase border border-white/10 self-start sm:self-center">
                        {p.timeline}
                      </span>
                    </div>

                    {/* 6-Part Narrative Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
                      <div className="space-y-4">
                        <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-neon">
                          01. The Client's Problem
                        </h4>
                        <p className="text-sm font-mono text-foreground/60 leading-relaxed uppercase">
                          {p.caseStudy.problem}
                        </p>
                      </div>

                      <div className="space-y-4">
                        <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-neon">
                          02. Our Technical Research
                        </h4>
                        <p className="text-sm font-mono text-foreground/60 leading-relaxed uppercase">
                          {p.caseStudy.research}
                        </p>
                      </div>

                      <div className="space-y-4">
                        <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-neon">
                          03. The Design Process
                        </h4>
                        <p className="text-sm font-mono text-foreground/60 leading-relaxed uppercase">
                          {p.caseStudy.designProcess}
                        </p>
                      </div>

                      <div className="space-y-4">
                        <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-neon">
                          04. Development Approach
                        </h4>
                        <p className="text-sm font-mono text-foreground/60 leading-relaxed uppercase">
                          {p.caseStudy.developmentApproach}
                        </p>
                      </div>

                      <div className="space-y-4">
                        <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-neon">
                          05. Measurable Results
                        </h4>
                        <p className="text-sm font-mono text-coral font-bold leading-relaxed uppercase">
                          {p.caseStudy.results}
                        </p>
                      </div>

                      <div className="space-y-4">
                        <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-neon">
                          06. Lessons Learned
                        </h4>
                        <p className="text-sm font-mono text-foreground/60 leading-relaxed uppercase">
                          {p.caseStudy.lessonsLearned}
                        </p>
                      </div>
                    </div>
                  </GlassCard>
                </div>
              ))}
          </div>
        </section>
      )}

      {/* CTA Banner */}
      <CTABannerSection />
    </div>
  );
}
