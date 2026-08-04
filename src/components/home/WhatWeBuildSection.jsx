import React from 'react';
import { Link } from 'react-router-dom';
import GlassCard from '../ui/GlassCard.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';

export default function WhatWeBuildSection() {
  const services = [
    {
      title: 'Web Development',
      description: 'High-converting, lightning-fast marketing websites built with modern frameworks and immaculate typography.',
      icon: (
        <svg className="w-6 h-6 text-purple-400" width="24" height="24" style={{width:24,height:24,flexShrink:0}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      tags: ['React', 'Next.js', 'Tailwind CSS'],
      anchor: 'web-development'
    },
    {
      title: 'Web Applications',
      description: 'Secure, scalable, high-performance web apps, SaaS dashboards, and complex enterprise portals tailored to workflows.',
      icon: (
        <svg className="w-6 h-6 text-purple-400" width="24" height="24" style={{width:24,height:24,flexShrink:0}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      ),
      tags: ['SaaS', 'CRMs', 'Dashboards'],
      anchor: 'web-applications'
    },
    {
      title: 'Custom Software',
      description: 'Bespoke software solutions solving unique operational challenges, from API integrations to distributed architectures.',
      icon: (
        <svg className="w-6 h-6 text-purple-400" width="24" height="24" style={{width:24,height:24,flexShrink:0}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      tags: ['Python', 'Node.js', 'Microservices'],
      anchor: 'custom-software'
    },
    {
      title: 'SEO Optimization',
      description: 'Data-driven SEO strategies, technical audits, and organic growth frameworks that dominate search rankings.',
      icon: (
        <svg className="w-6 h-6 text-purple-400" width="24" height="24" style={{width:24,height:24,flexShrink:0}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      tags: ['Technical SEO', 'Core Web Vitals', 'Growth'],
      anchor: 'seo-optimization'
    },
    {
      title: 'UI/UX Design',
      description: 'Stunning user interfaces and frictionless experiences designed to wow users and maximize conversion rates.',
      icon: (
        <svg className="w-6 h-6 text-purple-400" width="24" height="24" style={{width:24,height:24,flexShrink:0}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      tags: ['Figma', 'Design Systems', 'Prototyping'],
      anchor: 'ui-ux-design'
    },
    {
      title: 'AI Integration',
      description: 'Embed cutting-edge generative AI, autonomous agents, and smart automation into your products and workflows.',
      icon: (
        <svg className="w-6 h-6 text-purple-400" width="24" height="24" style={{width:24,height:24,flexShrink:0}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      tags: ['LLMs', 'AI Agents', 'Automation'],
      anchor: 'ai-integration'
    },
    {
      title: 'E-commerce',
      description: 'High-volume online stores with seamless checkout experiences, robust inventory systems, and rapid load times.',
      icon: (
        <svg className="w-6 h-6 text-purple-400" width="24" height="24" style={{width:24,height:24,flexShrink:0}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      tags: ['Shopify Custom', 'WooCommerce', 'Stripe'],
      anchor: 'e-commerce'
    },
    {
      title: 'Website Maintenance',
      description: 'Proactive security updates, performance monitoring, continuous backups, and dedicated 24/7 technical support.',
      icon: (
        <svg className="w-6 h-6 text-purple-400" width="24" height="24" style={{width:24,height:24,flexShrink:0}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      tags: ['99.9% Uptime', 'Security', '24/7 Support'],
      anchor: 'website-maintenance'
    },
  ];

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        badge="Our Capabilities"
        title="What We"
        highlight="Build"
        subtitle="End-to-end digital engineering across modern platforms, from sleek frontends to AI-powered enterprise engines."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <GlassCard
            key={index}
            className="flex flex-col justify-between group h-full"
            glowColor="purple"
          >
            <div>
              {/* Top Row: Icon + Arrow */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-purple-500/20 transition-all duration-300">
                  {service.icon}
                </div>
                <Link
                  to={`/services#${service.anchor}`}
                  aria-label={`Learn more about ${service.title}`}
                  className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-foreground/40 group-hover:text-purple-400 group-hover:bg-white/10 transition-all duration-300"
                >
                  <svg className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </Link>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-display font-semibold text-foreground mb-3 group-hover:text-purple-300 transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-foreground/70 leading-relaxed mb-6">
                {service.description}
              </p>
            </div>

            {/* Tags Footer */}
            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
              {service.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-md bg-white/[0.03] text-xs font-medium text-foreground/60 border border-white/5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
