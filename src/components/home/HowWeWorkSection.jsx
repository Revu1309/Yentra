import React from 'react';
import GlassCard from '../ui/GlassCard.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';

export default function HowWeWorkSection() {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Research',
      description: 'We immerse ourselves in your business goals, user personas, and technical constraints to establish a rock-solid project foundation.'
    },
    {
      number: '02',
      title: 'Strategic Planning',
      description: 'We map out user flows, information architecture, database schemas, and API contracts, creating an unambiguous technical blueprint.'
    },
    {
      number: '03',
      title: 'UI/UX Design',
      description: 'We design high-fidelity interactive Figma prototypes with premium aesthetics, custom typography, and seamless design tokens.'
    },
    {
      number: '04',
      title: 'Agile Development',
      description: 'Our engineers build your solution using modern frameworks (Next.js, Node, Laravel, React) with clean, well-tested, modular code.'
    },
    {
      number: '05',
      title: 'Rigorous Testing',
      description: 'We execute automated unit tests, cross-browser audits, security penetration scans, and load testing to guarantee flawless performance.'
    },
    {
      number: '06',
      title: 'Deployment & Launch',
      description: 'We deploy to zero-downtime cloud infrastructure (AWS, Vercel, Docker), configure SSL, and execute structured SEO sitemaps.'
    },
    {
      number: '07',
      title: 'Ongoing Support',
      description: 'We monitor server health, ship feature iterations, optimize conversion funnels, and provide responsive 24/7 technical support.'
    }
  ];

  return (
    <section id="how-we-work" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        badge="Our Process"
        title="How We"
        highlight="Work"
        subtitle="A proven, transparent 7-stage engineering lifecycle designed to eliminate risk and deliver exceptional digital solutions on schedule."
      />

      {/* Grid Timeline */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <GlassCard
            key={index}
            className={`relative flex flex-col justify-between ${
              index === 6 ? 'md:col-span-2 lg:col-span-2 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 border-purple-500/30' : ''
            }`}
            glowColor="purple"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                  {step.number}
                </span>
                <span className="w-8 h-px bg-purple-500/30" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-foreground/75 leading-relaxed">
                {step.description}
              </p>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
