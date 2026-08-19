import React, { useState } from 'react';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import GlassCard from '../components/ui/GlassCard.jsx';
import GlowButton from '../components/ui/GlowButton.jsx';
import CTABannerSection from '../components/home/CTABannerSection.jsx';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Web Apps & AI', 'E-Commerce', 'Fintech', 'SaaS'];

  const projects = [
    {
      id: 'aether-cloud',
      name: 'Aether Cloud — Enterprise DevOps Dashboard',
      client: 'Aether Infrastructure Inc.',
      industry: 'Cloud Infrastructure / SaaS',
      category: 'Web Apps & AI',
      timeline: '12 Weeks (Shipped Q1 2026)',
      coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80'
      ],
      challenge:
        'Aether Cloud’s legacy analytics dashboard was collapsing under heavy log streaming loads, with query latencies exceeding 12 seconds and no real-time anomaly detection.',
      solution:
        'We architected a high-throughput React 19 / Next.js frontend coupled with Rust microservices and an OpenAI-powered anomaly alerting engine.',
      technologies: ['React 19', 'Next.js 15', 'Rust API', 'Tailwind CSS', 'OpenAI API', 'AWS'],
      outcomes: [
        '92% reduction in dashboard query execution times',
        '+340% increase in user engagement among enterprise DevOps engineers',
        'Zero downtime during 24/7 cloud telemetry streaming'
      ],
      // Case study details
      isCaseStudy: true,
      caseStudy: {
        problem:
          'Aether Infrastructure managed over 10,000 cloud clusters globally. Their existing admin portal was built on monolithic legacy PHP and jQuery, causing page freezes whenever engineers queried historical log intervals longer than 24 hours.',
        research:
          'We interviewed 18 DevOps site reliability engineers to understand their daily triage workflows. We discovered that 65% of their time was spent manually cross-referencing latency charts rather than resolving root causes.',
        designProcess:
          'Using Figma, we crafted a dark, high-contrast visual token system optimized for multi-monitor command centers. We designed custom interactive SVG charts that render 50,000 data points smoothly at 60 FPS.',
        developmentApproach:
          'We decoupled the frontend entirely using Next.js 15 App Router with server-sent events (SSE) for live streaming telemetry. For backend calculations, we integrated Rust microservices connecting to PostgreSQL and ClickHouse.',
        results:
          'Query latency dropped from 12.4 seconds to 95 milliseconds. Aether Cloud closed three Fortune 500 contracts within 30 days of the new portal launch.',
        lessonsLearned:
          'When building dashboards for technical power users, information density must be paired with instant keyboard navigation shortcuts to maximize productivity.'
      }
    },
    {
      id: 'vortex-global',
      name: 'Vortex Global — High-Volume Fintech Platform',
      client: 'Vortex Global Payments',
      industry: 'Fintech / Banking',
      category: 'Fintech',
      timeline: '16 Weeks (Shipped Q4 2025)',
      coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80'
      ],
      challenge:
        'Vortex required a secure, fault-tolerant settlement platform capable of processing over 50,000 transactions per minute with zero room for race conditions.',
      solution:
        'Engineered a distributed Node.js/PostgreSQL microservice architecture with automated Redis locking and strict cryptographic audit logs.',
      technologies: ['Node.js', 'PostgreSQL', 'Redis', 'Docker', 'React', 'Tailwind CSS'],
      outcomes: [
        '$4.2M daily transaction volume processed seamlessly',
        'Passed SOC2 Type II and ISO 27001 compliance audits on first attempt',
        'Sub-100ms API response latency across 3 continent regions'
      ],
      isCaseStudy: true,
      caseStudy: {
        problem:
          'Vortex Payments was expanding into cross-border B2B transactions. Their legacy database schema suffered from deadlock issues under concurrent peak trading volumes.',
        research:
          'Our database architects performed load-testing benchmarks on existing queries, discovering that missing composite indexes and unoptimized ORM joins were responsible for 80% of query bottlenecks.',
        designProcess:
          'We designed a crystal-clear financial ledger UI where accounting teams could reconcile multi-currency balances in two clicks.',
        developmentApproach:
          'We rewrote the transaction settlement engine using Node.js clustering and PostgreSQL partitioned tables, backed by Redis distributed mutexes.',
        results:
          'The system achieved 99.999% availability during peak trading hours and reduced cloud server infrastructure costs by 38%.',
        lessonsLearned:
          'Never rely on default ORM query generators for high-concurrency financial transactions; hand-optimized SQL partitioning is mandatory.'
      }
    },
    {
      id: 'nexai-labs',
      name: 'NexAI Labs — AI Generative Studio & SEO Engine',
      client: 'NexAI Research LLC',
      industry: 'Artificial Intelligence / SaaS',
      category: 'Web Apps & AI',
      timeline: '8 Weeks (Shipped Q3 2025)',
      coverImage: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=600&q=80'
      ],
      challenge:
        'NexAI Labs had a powerful LLM model but zero organic search visibility and a landing page that failed to demonstrate the AI’s capabilities to prospective buyers.',
      solution:
        'Redesigned their brand identity and deployed an SEO-first Next.js web app with embedded live AI playgrounds directly on the marketing pages.',
      technologies: ['Next.js 15', 'TypeScript', 'OpenAI API', 'Tailwind CSS', 'Vercel'],
      outcomes: [
        '+310% organic search traffic growth within 60 days',
        '4.8x increase in visitor-to-signup conversion rate',
        '100/100 Lighthouse SEO and Accessibility scores'
      ],
      isCaseStudy: true,
      caseStudy: {
        problem:
          'Prospective customers visited NexAI’s website but bounced within 15 seconds because there was no way to test the model without filling out a 10-field enterprise lead form.',
        research:
          'We analyzed Competitor heatmaps and discovered that developer-focused AI tools convert 5x better when offering instant interactive code playgrounds.',
        designProcess:
          'We designed a dark glassmorphism interface inspired by futuristic terminal aesthetics, complete with syntax highlighting and instant AI prompt autocomplete.',
        developmentApproach:
          'Built on Next.js 15 App Router with edge API routes that proxy LLM tokens securely without exposing proprietary API keys.',
        results:
          'Organic traffic surged by 310% due to programmatic SEO landing pages, and lead conversion quadrupled.',
        lessonsLearned:
          'In AI marketing, showing is infinitely more effective than telling. An interactive demo is worth ten pages of copy.'
      }
    },
    {
      id: 'zenith-luxury',
      name: 'Zenith Luxury — Headless E-Commerce Experience',
      client: 'Zenith Watches & Jewelers',
      industry: 'Luxury Retail / E-Commerce',
      category: 'E-Commerce',
      timeline: '10 Weeks',
      coverImage: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80'
      ],
      challenge:
        'Zenith’s traditional Shopify theme was sluggish and lacked the luxurious visual storytelling expected by high-end clientele.',
      solution:
        'Developed a headless Next.js Commerce storefront connected to Shopify Plus with custom 3D watch preview animations.',
      technologies: ['Next.js Commerce', 'Shopify Plus API', 'Three.js', 'Tailwind CSS'],
      outcomes: [
        '+180% increase in average order value (AOV)',
        'Sub-800ms page load times worldwide',
        'Award-winning mobile shopping experience'
      ],
      isCaseStudy: false
    }
  ];

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
          <GlassCard key={project.id} className="p-0 overflow-hidden" glowColor="none" hoverEffect={false}>
            <div className={`grid grid-cols-1 lg:grid-cols-12 gap-0 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Cover Image & Gallery Preview */}
              <div className={`lg:col-span-6 relative overflow-hidden min-h-[380px] ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img
                  src={project.coverImage}
                  alt={project.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
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
          </GlassCard>
        ))}
      </div>

      {/* Deep-Dive Case Studies Section */}
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

      {/* CTA Banner */}
      <CTABannerSection />
    </div>
  );
}
