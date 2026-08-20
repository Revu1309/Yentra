import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import GlassCard from '../ui/GlassCard.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import GlowButton from '../ui/GlowButton.jsx';

import { projects } from '../../data/projects.js';

export default function FeaturedProjectsSection() {
  const featuredProjects = projects.filter(p => p.isFeatured !== false);

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <SectionHeading
        badge="Proven Results"
        title="Featured"
        highlight="Projects"
        subtitle="Explore how we solve complex engineering challenges and drive measurable growth for ambitious organizations."
      />

      <div className="space-y-16">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.id || index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <GlassCard
              className="p-0 overflow-hidden group border-neon"
              glowColor="none"
              hoverEffect={false}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-0 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Screenshot Column */}
                <div className={`lg:col-span-7 relative overflow-hidden min-h-[340px] sm:min-h-[420px] bg-white/[0.02] flex items-center justify-center ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  {(project.coverImage || project.image) ? (
                    <img
                      src={project.coverImage || project.image}
                      alt={project.name}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  ) : (
                    <div className="text-center p-8">
                      <div className="font-mono text-neon text-2xl font-black mb-2">YENTRA</div>
                      <div className="font-mono text-xs uppercase tracking-widest text-foreground/40">{project.name}</div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent lg:hidden" />
                </div>

                {/* Content Column */}
                <div className={`lg:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col justify-between ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div>
                    <span className="inline-block font-mono text-xs font-bold uppercase tracking-widest text-neon mb-2">
                      ↳ {project.category}
                    </span>
                    <h3 className="text-3xl sm:text-4xl font-display font-black text-white uppercase tracking-tighter mb-6">
                      {project.name}
                    </h3>

                    {/* Problem & Solution */}
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-xs uppercase tracking-wider font-semibold text-foreground/50 mb-1">
                          The Business Problem
                        </h4>
                        <p className="text-sm text-foreground/80 leading-relaxed">
                          {project.challenge || project.problem}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-xs uppercase tracking-wider font-semibold text-foreground/50 mb-1">
                          Our Engineering Solution
                        </h4>
                        <p className="text-sm text-foreground/80 leading-relaxed">
                          {project.solution}
                        </p>
                      </div>
                    </div>

                    {/* Measurable Results Badge */}
                    <div className="p-4 border border-neon bg-transparent mb-8">
                      <div className="font-mono text-xs font-bold uppercase tracking-widest text-neon mb-1">
                        MEASURABLE RESULT
                      </div>
                      <div className="text-xl sm:text-2xl font-display font-black text-white uppercase tracking-tighter">
                        {project.results}
                      </div>
                    </div>
                  </div>

                  {/* Tech Tags & CTA Link */}
                  <div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full bg-white/5 text-xs font-medium text-foreground/70 border border-white/10"
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
                      <Link
                        to="/portfolio"
                        className="inline-flex items-center gap-2 font-mono text-sm font-bold uppercase tracking-widest text-neon hover:text-white transition-colors group/link"
                      >
                        <span>VIEW FULL CASE STUDY</span>
                        <svg
                          className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <GlowButton to="/portfolio" variant="secondary" size="lg">
          Explore All Case Studies & Projects
        </GlowButton>
      </div>
    </section>
  );
}
