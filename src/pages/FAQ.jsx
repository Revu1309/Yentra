import React, { useState } from 'react';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import GlassCard from '../components/ui/GlassCard.jsx';
import GlowButton from '../components/ui/GlowButton.jsx';
import CTABannerSection from '../components/home/CTABannerSection.jsx';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0); // Open the first FAQ by default

  const faqItems = [
    {
      q: 'How long does a project typically take?',
      a: 'Project timelines vary depending on scope and complexity. A modern marketing website typically takes 3 to 6 weeks, while complex full-stack web applications or custom SaaS dashboards generally require 8 to 16 weeks. During our initial Discovery phase, we provide a guaranteed sprint timeline with concrete milestones.'
    },
    {
      q: 'What technologies and frameworks do you use?',
      a: 'We specialize in modern, high-performance technologies. For frontend web applications, we primary use React 19, Next.js 15, TypeScript, and Tailwind CSS. For backend architectures, we use Node.js, Python, and Laravel, paired with PostgreSQL or MongoDB databases. For infrastructure, we deploy to AWS, Vercel, and Docker container clusters.'
    },
    {
      q: 'Do you redesign existing websites and applications?',
      a: 'Yes. A significant portion of our work involves auditing and redesigning legacy websites or applications that suffer from sluggish load times, outdated UI/UX, or declining conversion rates. We can either migrate your platform incrementally or architect a clean, modern replacement.'
    },
    {
      q: 'Do you provide web hosting and cloud deployment?',
      a: 'Yes. We manage end-to-end cloud hosting and CI/CD deployment pipelines on AWS, Vercel, and Google Cloud. We configure custom domain DNS, automated SSL certificates, edge caching, and zero-downtime deployments as standard deliverables.'
    },
    {
      q: 'Do you offer ongoing website and application maintenance?',
      a: 'Absolutely. We offer dedicated 24/7 Service Level Agreement (SLA) maintenance packages. This includes continuous server monitoring, automated security patches, dependency updates, daily encrypted backups, and direct access to your lead engineer.'
    },
    {
      q: 'How does SEO work in modern web development?',
      a: 'Traditional keyword stuffing is obsolete. Google prioritizes user experience, Core Web Vitals (speed, interactivity, visual stability), and semantic HTML hierarchy. We build SEO directly into the code using Next.js server-side rendering, JSON-LD structured schema snippets, clean XML sitemaps, and optimized metadata.'
    },
    {
      q: 'Can you build bespoke custom software from scratch?',
      a: 'Yes. In addition to web applications and marketing sites, we engineer custom enterprise software solutions. This includes automated data pipelines, REST/GraphQL API aggregators, microservice backends, and AI agent integrations.'
    },
    {
      q: 'How do you handle project communication and updates?',
      a: 'We believe in radical transparency. You will have direct access to a shared Slack or WhatsApp workspace with your developers, along with weekly video sprint demos and a real-time Kanban project tracking board.'
    },
    {
      q: 'Who owns the intellectual property and source code?',
      a: 'You own 100% of the intellectual property and source code upon final project completion and invoice settlement. We do not lock our clients into proprietary software licenses or per-seat vendor fees.'
    },
    {
      q: 'What is your pricing model and payment structure?',
      a: 'We offer both fixed-price milestone contracts for well-defined project scopes and flexible team augmentation retainers for ongoing development. Generally, payments are structured across three milestones: 40% upon project commencement, 30% at midway prototype demo, and 30% upon final launch.'
    }
  ];

  const toggleFAQ = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div className="relative pt-32 pb-20 overflow-hidden">
      {/* Ambient Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-purple-600/10 blur-[150px] pointer-events-none -z-10" />

      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-500/10 text-purple-400 border border-purple-500/30 mb-6">
          Knowledge Base
        </span>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-medium text-foreground tracking-tight max-w-4xl mx-auto leading-[1.1] mb-8">
          Frequently Asked{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">
            Questions
          </span>
        </h1>
        <p className="max-w-3xl mx-auto text-lg sm:text-xl text-foreground/75 leading-relaxed">
          Everything you need to know about our engineering process, technologies, timelines, and partnership models.
        </p>
      </div>

      {/* Accordion FAQ Grid */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 mb-28">
        {faqItems.map((item, index) => {
          const isOpen = openIdx === index;
          return (
            <div
              key={index}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden backdrop-blur-xl ${
                isOpen
                  ? 'bg-white/[0.06] border-purple-500/40 shadow-[0_10px_30px_-10px_rgba(168,85,247,0.15)]'
                  : 'bg-white/[0.02] border-white/10 hover:border-white/20'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 focus:outline-none"
                aria-expanded={isOpen}
              >
                <span className="font-display font-semibold text-lg sm:text-xl text-foreground">
                  {item.q}
                </span>
                <span
                  className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-purple-400 flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-purple-500/20' : ''
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>

              {isOpen && (
                <div className="px-6 sm:px-7 pb-7 pt-2 text-foreground/80 text-base leading-relaxed border-t border-white/5 animate-fade-up">
                  {item.a}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Still Have Questions Box */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <GlassCard className="p-10 sm:p-14 text-center" glowColor="purple">
          <h3 className="text-2xl sm:text-3xl font-display font-semibold text-foreground mb-4">
            Still have an unanswered question?
          </h3>
          <p className="text-foreground/75 max-w-xl mx-auto mb-8">
            Our technical founders and lead engineers are available to review your project specs and answer any custom questions.
          </p>
          <GlowButton to="/contact" variant="primary" size="lg">
            Speak With An Engineer
          </GlowButton>
        </GlassCard>
      </div>

      {/* CTA Banner */}
      <CTABannerSection />
    </div>
  );
}
