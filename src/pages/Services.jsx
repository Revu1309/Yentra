import React from 'react';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import GlassCard from '../components/ui/GlassCard.jsx';
import GlowButton from '../components/ui/GlowButton.jsx';
import CTABannerSection from '../components/home/CTABannerSection.jsx';

export default function Services() {
  const allServices = [
    {
      id: 'web-development',
      title: 'Web Development',
      badge: 'High-Converting Websites',
      whatItIs:
        'Custom-engineered marketing websites built from scratch with modern frameworks. We eschew bloated page builders in favor of clean semantic HTML, ultra-fast server-side rendering, and immersive visual storytelling.',
      whoItsFor:
        'Fast-growing startups, enterprise brands, and modern companies needing a high-performance web presence that loads instantaneously and converts traffic into revenue.',
      process: [
        'Architecture & UX Wireframing',
        'Custom Visual Design & Tokens',
        'Next.js / React Development',
        'SEO & Performance Tuning',
        'Production Launch & QA'
      ],
      technologies: ['React 19', 'Next.js 15', 'Tailwind CSS', 'TypeScript', 'Vercel Edge'],
      benefits: [
        'Sub-second Core Web Vitals and 99+ Lighthouse performance scores',
        'Immaculate responsiveness across desktop, tablet, and mobile displays',
        'Built-in structured metadata for maximum search engine indexability'
      ],
      deliverables: [
        'Production-ready website source code',
        'Headless CMS integration (if requested)',
        'Comprehensive style guide & design tokens',
        'Automated deployment pipelines'
      ]
    },
    {
      id: 'web-applications',
      title: 'Web Application Development',
      badge: 'Enterprise-Grade Software',
      whatItIs:
        'Secure, scalable, high-performance applications tailored to complex business workflows. We engineer custom dashboards, CRM systems, booking engines, inventory management portals, and multi-tenant admin panels.',
      whoItsFor:
        'Businesses looking to automate internal operations, launch SaaS products, or replace clunky legacy software with intuitive, modern web applications.',
      process: [
        'Workflow Analysis & Schema Design',
        'Interactive Figma Prototyping',
        'Frontend & Backend Engineering',
        'Security Audit & Penetration Testing',
        'Cloud Deployment & CI/CD Setup'
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'AWS'],
      benefits: [
        'Tailored 100% to your exact operational workflows with zero feature bloat',
        'Enterprise-grade RBAC (Role-Based Access Control) and encryption at rest',
        'Seamless horizontal scaling to handle spikes in traffic and data volume'
      ],
      deliverables: [
        'Full-stack web application with API docs',
        'Custom admin/dashboard portal',
        'Automated unit & e2e testing suites',
        'Cloud infrastructure setup (AWS/Vercel)'
      ]
    },
    {
      id: 'custom-software',
      title: 'Custom Software Development',
      badge: 'Bespoke Engineering',
      whatItIs:
        'End-to-end bespoke software architectures designed to solve unique technical or operational challenges, from API aggregators and distributed microservices to real-time data pipelines.',
      whoItsFor:
        'Enterprises with specialized workflows or proprietary algorithms that off-the-shelf SaaS products simply cannot accommodate.',
      process: [
        'Deep Domain Technical Discovery',
        'System Architecture Blueprinting',
        'Agile Sprint Implementation',
        'Integration with Legacy Systems',
        'Performance & Load Verification'
      ],
      technologies: ['Python', 'Node.js', 'Laravel', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS'],
      benefits: [
        'Total ownership of proprietary intellectual property and source code',
        'Elimination of recurring SaaS vendor lock-in and per-seat licensing fees',
        'Architected to integrate seamlessly with your existing enterprise software'
      ],
      deliverables: [
        'Custom software codebase & binaries',
        'Full system architecture documentation',
        'Third-party API integration layers',
        'Dedicated training & handover sessions'
      ]
    },
    {
      id: 'seo-optimization',
      title: 'SEO Optimization',
      badge: 'Organic Search Dominance',
      whatItIs:
        'Comprehensive technical SEO, on-page content architecture, and performance optimization designed to catapult your website to the top of Google search results.',
      whoItsFor:
        'Brands and digital platforms looking to build long-term organic traffic moats and reduce dependence on expensive paid ad campaigns.',
      process: [
        'Technical Site Audit & Keyword Audit',
        'Core Web Vitals & Code Optimization',
        'Content Hierarchy & Semantic Markup',
        'Structured Schema Implementation',
        'Continuous Indexing & Ranking Tracking'
      ],
      technologies: ['Google Search Console', 'Ahrefs', 'Next.js Metadata API', 'Schema.org', 'Lighthouse'],
      benefits: [
        'Substantial growth in high-intent organic traffic and qualified leads',
        'Flawless mobile usability and Core Web Vitals compliance',
        'Structured data snippets that stand out in Google Search results'
      ],
      deliverables: [
        'In-depth SEO technical audit report',
        'XML sitemaps & robots.txt optimization',
        'JSON-LD structured schema injections',
        'Monthly ranking & organic growth dashboards'
      ]
    },
    {
      id: 'ui-ux-design',
      title: 'UI/UX Design',
      badge: 'Stunning Visual Identity',
      whatItIs:
        'High-fidelity user interface design, user experience research, and interactive Figma prototyping that transforms complex ideas into effortless, visually wowed experiences.',
      whoItsFor:
        'Product teams and founders who need a world-class visual identity and intuitive user flows before investing in full-scale development.',
      process: [
        'User Persona & Journey Mapping',
        'Information Architecture & Wireframing',
        'Design System & Component Library Creation',
        'High-Fidelity Figma Prototyping',
        'Usability Testing & Developer Handoff'
      ],
      technologies: ['Figma', 'Adobe Creative Cloud', 'Design Tokens', 'Prototyping Tools'],
      benefits: [
        'Drastically lower development costs by catching UX flaws during prototyping',
        'Consistent visual design language across all digital touchpoints',
        'Higher user engagement, retention, and conversion rates'
      ],
      deliverables: [
        'Complete interactive Figma prototypes',
        'Reusable component library & design system',
        'Responsive layouts for mobile, tablet & desktop',
        'Detailed design specifications for developers'
      ]
    },
    {
      id: 'ai-integration',
      title: 'AI & LLM Integration',
      badge: 'Next-Generation Intelligence',
      whatItIs:
        'Embed state-of-the-art generative AI, autonomous AI agents, semantic search (RAG), and custom LLM workflows into your existing applications or new products.',
      whoItsFor:
        'Forward-thinking enterprises looking to automate customer support, enhance internal knowledge search, or build intelligent AI-first product features.',
      process: [
        'AI Opportunity & Workflow Mapping',
        'Model Selection & Prompt Engineering',
        'Vector Database & RAG Pipeline Setup',
        'API Integration & Guardrail Configuration',
        'Live Deployment & Latency Optimization'
      ],
      technologies: ['OpenAI API', 'Anthropic Claude', 'Python', 'LangChain', 'Pinecone', 'FastAPI'],
      benefits: [
        'Automate up to 70% of repetitive customer inquiries and data workflows',
        'Unlock deep insights from unstructured internal documents via RAG',
        'Future-proof your software stack with modular AI architecture'
      ],
      deliverables: [
        'Custom AI agent or LLM integration layer',
        'Vector database schema & indexing scripts',
        'Safety guardrail & rate-limiting middleware',
        'Latency & token cost optimization dashboard'
      ]
    },
    {
      id: 'e-commerce',
      title: 'E-Commerce Architecture',
      badge: 'High-Volume Digital Commerce',
      whatItIs:
        'High-converting, lightning-fast e-commerce stores and custom checkout architectures built on Shopify, WooCommerce, or custom headless Next.js storefronts.',
      whoItsFor:
        'Direct-to-consumer (DTC) brands and B2B retailers requiring high-speed storefronts capable of handling thousands of concurrent shoppers.',
      process: [
        'Storefront Architecture & UX Audit',
        'Custom Theme / Headless Development',
        'Payment Gateway & ERP Integration',
        'Checkout Funnel Conversion Optimization',
        'High-Traffic Load Testing'
      ],
      technologies: ['Shopify Plus', 'Next.js Commerce', 'Stripe', 'WooCommerce', 'Tailwind CSS'],
      benefits: [
        'Frictionless checkout flows that minimize cart abandonment',
        'Instant page navigation and product filtering via edge caching',
        'Seamless integration with your inventory, ERP, and CRM systems'
      ],
      deliverables: [
        'Custom e-commerce storefront',
        'Secure payment & shipping integrations',
        'Automated transactional email workflows',
        'Analytics & conversion funnel dashboard'
      ]
    },
    {
      id: 'website-maintenance',
      title: 'Website Maintenance & Dedicated SLA',
      badge: '24/7 Proactive Care',
      whatItIs:
        'Continuous server monitoring, automated security patch management, daily cloud backups, and guaranteed priority technical support to keep your software running flawlessly.',
      whoItsFor:
        'Companies that want absolute peace of mind knowing their critical web infrastructure is monitored and managed by senior DevOps engineers 24/7.',
      process: [
        'Initial Server Health & Security Audit',
        'Automated CI/CD & Backup Pipeline Setup',
        '24/7 Uptime & Core Web Vitals Monitoring',
        'Proactive Security & Dependency Patching',
        'Monthly Performance & SLA Reporting'
      ],
      technologies: ['AWS CloudWatch', 'Datadog', 'GitHub Actions', 'Sentry', 'Vercel Analytics'],
      benefits: [
        '99.9% guaranteed uptime SLAs with immediate incident response',
        'Zero downtime during framework upgrades and security patches',
        'Direct Slack/WhatsApp access to your dedicated lead engineer'
      ],
      deliverables: [
        '24/7 automated monitoring & alerting',
        'Daily encrypted cloud backups',
        'Monthly executive health & security report',
        'Priority feature requests and bug fixes'
      ]
    }
  ];

  return (
    <div className="relative pt-32 pb-20 overflow-hidden">
      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <div className="flex justify-center mb-12">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-neon">
            ↳ SYSTEM / SERVICES
          </span>
        </div>
        <h1 className="text-[clamp(4rem,9vw,10rem)] font-display font-black text-white tracking-tighter uppercase leading-[0.85] mb-12">
          FULL-SPECTRUM <br />
          <span className="text-neon">CAPABILITIES.</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg sm:text-xl font-mono text-foreground/60 leading-relaxed uppercase">
          Each service at Yentra is delivered by specialized senior engineers and designers who combine deep technical expertise with an eye for stunning aesthetics.
        </p>
      </div>

      {/* Quick Jump Anchor Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 sticky top-20 z-30">
        <div className="bg-background/90 backdrop-blur-xl border border-white/10 rounded-2xl p-3 shadow-xl overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 min-w-max">
            {allServices.map((svc) => (
              <a
                key={svc.id}
                href={`#${svc.id}`}
                className="px-4 py-2 rounded-none text-xs sm:text-sm font-mono uppercase tracking-widest text-foreground/80 hover:text-neon hover:bg-white/5 transition-colors whitespace-nowrap"
              >
                {svc.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Services Detailed List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        {allServices.map((service, idx) => (
          <section key={service.id} id={service.id} className="scroll-mt-32">
            <GlassCard className="p-8 sm:p-12 lg:p-16" glowColor="none">
              {/* Header Info */}
              <div className="border-b border-white/10 pb-8 mb-12">
                <span className="font-mono text-xs font-semibold uppercase tracking-widest text-neon block mb-6">
                  ↳ {service.badge}
                </span>
                <h2 className="text-4xl sm:text-6xl font-display font-black text-white uppercase tracking-tighter mb-6">
                  {service.title}
                </h2>
                <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed max-w-4xl">
                  {service.whatItIs}
                </p>
              </div>

              {/* Grid 3-Column Info */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-12">
                {/* Who It's For */}
                <div className="space-y-4">
                  <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-neon flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-none bg-neon" />
                    Who It's For
                  </h3>
                  <p className="text-sm font-mono text-foreground/60 leading-relaxed uppercase">
                    {service.whoItsFor}
                  </p>
                </div>

                {/* Benefits */}
                <div className="space-y-4">
                  <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-neon flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-none bg-neon" />
                    Key Benefits
                  </h3>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm font-mono text-white/80 uppercase">
                        <span className="text-neon mt-0.5">›</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deliverables */}
                <div className="space-y-4">
                  <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-coral flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-none bg-coral" />
                    Tangible Deliverables
                  </h3>
                  <ul className="space-y-3">
                    {service.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm font-mono text-white/80 uppercase">
                        <span className="text-coral mt-0.5">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Row: Process Steps & Technologies */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 border-t border-white/10 items-center">
                {/* Process Steps */}
                <div className="lg:col-span-7">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-foreground/50 block mb-4">
                    Execution Process
                  </span>
                  <div className="flex flex-wrap items-center gap-2">
                    {service.process.map((step, i) => (
                      <React.Fragment key={i}>
                        <span className="px-3 py-1.5 rounded-none bg-white/5 text-xs font-mono uppercase text-foreground/80 border border-white/10">
                          {String(i + 1).padStart(2, '0')}. {step}
                        </span>
                        {i < service.process.length - 1 && (
                          <span className="text-foreground/30 hidden sm:inline">→</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="lg:col-span-5 lg:text-right">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-foreground/50 block mb-4">
                    Technologies Used
                  </span>
                  <div className="flex flex-wrap gap-2 lg:justify-end">
                    {service.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 rounded-none bg-white/5 text-xs font-mono uppercase text-white/50 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA footer inside each service card */}
              <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-sm text-foreground/70">
                  Ready to build your <strong className="text-foreground">{service.title}</strong> project?
                </p>
                <GlowButton to="/contact" variant="primary" size="md">
                  Request a Proposal
                </GlowButton>
              </div>
            </GlassCard>
          </section>
        ))}
      </div>

      {/* CTA Banner */}
      <div className="mt-32">
        <CTABannerSection />
      </div>
    </div>
  );
}
