import React from 'react';
import { Link } from 'react-router-dom';
import GlassCard from '../ui/GlassCard.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import GlowButton from '../ui/GlowButton.jsx';

export default function FeaturedProjectsSection() {
  const projects = [
    {
      name: 'Aether Cloud — Enterprise DevOps Dashboard',
      category: 'Web Application & AI Integration',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      technologies: ['React 19', 'Next.js', 'Python', 'AWS', 'Tailwind CSS'],
      problem: 'Aether Cloud’s legacy analytics system suffered from 12-second query latencies and lacked real-time visibility into distributed cloud clusters.',
      solution: 'We architected a high-performance streaming analytics dashboard powered by custom Rust microservices and an AI anomaly-detection engine.',
      results: '+340% Faster Query Execution & 99.99% System Uptime',
      slug: 'aether-cloud'
    },
    {
      name: 'Vortex Global — High-Volume Fintech Portal',
      category: 'Custom Software & E-commerce Architecture',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      technologies: ['Node.js', 'PostgreSQL', 'Docker', 'Redis', 'React'],
      problem: 'Vortex needed a secure, fault-tolerant transaction settlement platform capable of processing over 50,000 requests per minute during peak markets.',
      solution: 'Built a modular microservice architecture with automated failover, strict cryptographic compliance, and sub-100ms API response times.',
      results: '$4.2M Daily Transaction Volume & Zero Security Breaches',
      slug: 'vortex-global'
    },
    {
      name: 'NexAI Labs — Generative Studio & SEO Engine',
      category: 'Web Development & SEO Optimization',
      image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=1200&q=80',
      technologies: ['Next.js 15', 'TypeScript', 'OpenAI API', 'Vercel'],
      problem: 'NexAI Labs struggled with poor organic search visibility and a sluggish landing page that failed to showcase their AI tools effectively.',
      solution: 'Redesigned their entire web presence using a headless SEO-first Next.js architecture with interactive live AI demos embedded directly on page.',
      results: '+310% Organic Traffic Growth & 4.8x Lead Conversion Rate',
      slug: 'nexai-labs'
    }
  ];

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        badge="Proven Results"
        title="Featured"
        highlight="Projects"
        subtitle="Explore how we solve complex engineering challenges and drive measurable growth for ambitious organizations."
      />

      <div className="space-y-16">
        {projects.map((project, index) => (
          <GlassCard
            key={index}
            className="p-0 overflow-hidden group"
            glowColor="purple"
            hoverEffect={false}
          >
            <div className={`grid grid-cols-1 lg:grid-cols-12 gap-0 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Screenshot Column */}
              <div className={`lg:col-span-7 relative overflow-hidden min-h-[340px] sm:min-h-[420px] ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img
                  src={project.image}
                  alt={project.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent lg:hidden" />
              </div>

              {/* Content Column */}
              <div className={`lg:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col justify-between ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div>
                  <span className="inline-block text-xs font-semibold uppercase tracking-wider text-purple-400 mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-display font-semibold text-foreground mb-6">
                    {project.name}
                  </h3>

                  {/* Problem & Solution */}
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-xs uppercase tracking-wider font-semibold text-foreground/50 mb-1">
                        The Business Problem
                      </h4>
                      <p className="text-sm text-foreground/80 leading-relaxed">
                        {project.problem}
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
                  <div className="p-4 rounded-2xl bg-purple-500/10 border border-purple-500/30 mb-8">
                    <div className="text-xs font-semibold uppercase tracking-wider text-purple-300 mb-1">
                      Measurable Result
                    </div>
                    <div className="text-base sm:text-lg font-display font-bold text-foreground">
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
                  <Link
                    to="/portfolio"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors group/link"
                  >
                    <span>View Full Case Study</span>
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
          </GlassCard>
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
