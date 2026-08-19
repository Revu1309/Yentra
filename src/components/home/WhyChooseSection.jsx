import React from 'react';
import { motion } from 'motion/react';
import GlassCard from '../ui/GlassCard.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';

export default function WhyChooseSection() {
  const reasons = [
    {
      title: 'Fast & Agile Delivery',
      description: 'We move with velocity. By leveraging modern CI/CD pipelines, reusable design tokens, and rapid iterative sprints, we ship production-grade code weeks ahead of industry averages.',
      icon: (
        <svg className="w-7 h-7 text-black" width="28" height="28" style={{width:28,height:28,flexShrink:0}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: 'Scalable Architecture',
      description: 'Built for millions of users from day one. We engineer fault-tolerant microservices, serverless backends, and modular database schemas that grow effortlessly with your business.',
      icon: (
        <svg className="w-7 h-7 text-black" width="28" height="28" style={{width:28,height:28,flexShrink:0}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      title: 'Modern & Premium Design',
      description: 'No generic templates. We craft bespoke interfaces with vibrant HSL palettes, glassmorphic textures, and delightful micro-interactions that instantly wow your customers.',
      icon: (
        <svg className="w-7 h-7 text-black" width="28" height="28" style={{width:28,height:28,flexShrink:0}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'SEO-First Development',
      description: 'Search performance is baked into the source code. Every build includes structured metadata, semantic HTML5 hierarchy, sub-second Core Web Vitals, and clean sitemaps.',
      icon: (
        <svg className="w-7 h-7 text-black" width="28" height="28" style={{width:28,height:28,flexShrink:0}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      title: 'Responsive 24/7 Support',
      description: 'Our partnership doesn\'t end at launch. We provide proactive monitoring, real-time Slack/WhatsApp communication channels, and guaranteed SLAs for total peace of mind.',
      icon: (
        <svg className="w-7 h-7 text-black" width="28" height="28" style={{width:28,height:28,flexShrink:0}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      title: 'Future-Ready Technology',
      description: 'We stay ahead of the technology curve. Whether integrating custom LLM pipelines, edge rendering, or GraphQL APIs, we ensure your software never becomes obsolete.',
      icon: (
        <svg className="w-7 h-7 text-black" width="28" height="28" style={{width:28,height:28,flexShrink:0}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    }
  ];

  return (
    <section id="why-choose-us" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden" style={{ perspective: "1000px" }}>
      <SectionHeading
        badge="The Yentra Advantage"
        title="Why Choose"
        highlight="Yentra?"
        subtitle="We combine Silicon Valley engineering rigor with breathtaking visual design to deliver software that outperforms the competition."
      />

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
          }
        }}
      >
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            className="h-full"
            variants={{
              hidden: { opacity: 0, rotateX: -40, y: 50 },
              visible: { 
                opacity: 1, 
                rotateX: 0, 
                y: 0,
                transition: { type: "spring", stiffness: 60, damping: 15 }
              }
            }}
          >
            <GlassCard className="flex flex-col justify-between h-full hover:border-neon transition-colors duration-500" glowColor="none">
              <div>
                <div className="w-14 h-14 bg-neon flex items-center justify-center mb-6">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-display font-black text-white uppercase tracking-tighter mb-3">
                  {reason.title}
                </h3>
                <p className="font-mono text-xs uppercase text-foreground/75 leading-relaxed tracking-widest">
                  {reason.description}
                </p>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
