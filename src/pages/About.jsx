import React from 'react';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import GlassCard from '../components/ui/GlassCard.jsx';
import GlowButton from '../components/ui/GlowButton.jsx';
import CTABannerSection from '../components/home/CTABannerSection.jsx';

export default function About() {
  const values = [
    {
      title: 'Uncompromising Quality',
      description: 'We reject mediocre code and generic design templates. Every line of code, database query, and animation is crafted for maximum performance and elegance.',
      icon: '✦'
    },
    {
      title: 'Architectural Scalability',
      description: 'We design systems that don’t just work today, but scale effortlessly when your user base grows 10x or 100x without requiring a complete rewrite.',
      icon: '◈'
    },
    {
      title: 'Radical Transparency',
      description: 'No black-box agency politics. Our clients have real-time access to sprint boards, direct developer communication, and honest technical assessments.',
      icon: '◆'
    },
    {
      title: 'Obsession with Speed',
      description: 'Speed in delivery and speed in execution. We optimize Core Web Vitals to sub-second load times because performance is the highest form of UX.',
      icon: '●'
    }
  ];

  const techStack = [
    {
      category: 'Frontend & UI',
      items: [
        { name: 'React 19', badge: 'Core' },
        { name: 'Next.js 15', badge: 'SSR / SSG' },
        { name: 'Tailwind CSS', badge: 'Design System' },
        { name: 'TypeScript', badge: 'Type Safety' },
        { name: 'Figma', badge: 'UI/UX Design' }
      ]
    },
    {
      category: 'Backend & APIs',
      items: [
        { name: 'Node.js', badge: 'Runtime' },
        { name: 'Python', badge: 'AI & Data' },
        { name: 'Laravel', badge: 'Enterprise PHP' },
        { name: 'GraphQL / REST', badge: 'API Contracts' },
        { name: 'FastAPI', badge: 'Microservices' }
      ]
    },
    {
      category: 'Database & Storage',
      items: [
        { name: 'PostgreSQL', badge: 'Relational DB' },
        { name: 'MongoDB', badge: 'NoSQL / Document' },
        { name: 'Redis', badge: 'Caching & PubSub' },
        { name: 'Prisma / Drizzle', badge: 'Modern ORM' }
      ]
    },
    {
      category: 'Cloud, DevOps & Mobile',
      items: [
        { name: 'AWS', badge: 'Cloud Infrastructure' },
        { name: 'Vercel', badge: 'Edge Deployment' },
        { name: 'Docker', badge: 'Containerization' },
        { name: 'Flutter', badge: 'Cross-Platform Mobile' }
      ]
    }
  ];

  return (
    <div className="relative pt-32 pb-20 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-600/10 blur-[150px] pointer-events-none -z-10" />

      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-28">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-500/10 text-purple-400 border border-purple-500/30 mb-6">
          About Yentra
        </span>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-medium text-foreground tracking-tight max-w-4xl mx-auto leading-[1.1] mb-8">
          We engineer software that{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">
            defies the ordinary.
          </span>
        </h1>
        <p className="max-w-3xl mx-auto text-lg sm:text-xl text-foreground/75 leading-relaxed">
          Yentra was born from a simple conviction: most digital agencies move too slowly, design too safely, and engineer too superficially. We exist to change that.
        </p>
      </div>

      {/* Story Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-28">
        <GlassCard className="p-8 sm:p-14 lg:p-16" glowColor="purple">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-purple-400">
                Our Story & Philosophy
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-semibold text-foreground leading-tight">
                Why we build software
              </h2>
              <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
                In an era where technology evolves every week, businesses cannot afford to rely on sluggish legacy systems or cookie-cutter web themes. Whether you are a high-growth startup or an established enterprise, your digital presence is your most critical competitive moat.
              </p>
              <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
                At Yentra, we blend Silicon Valley product rigor with high-end visual design. We believe that speed, aesthetics, and architectural resilience are not trade-offs—they are mutually reinforcing pillars of world-class software.
              </p>
            </div>
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
                <div className="text-3xl sm:text-4xl font-display font-bold text-purple-400 mb-2">99.9%</div>
                <div className="text-xs text-foreground/60 uppercase tracking-wider font-semibold">Uptime SLA</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
                <div className="text-3xl sm:text-4xl font-display font-bold text-pink-400 mb-2">&lt;100ms</div>
                <div className="text-xs text-foreground/60 uppercase tracking-wider font-semibold">Avg API Response</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
                <div className="text-3xl sm:text-4xl font-display font-bold text-indigo-400 mb-2">100+</div>
                <div className="text-xs text-foreground/60 uppercase tracking-wider font-semibold">Projects Shipped</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
                <div className="text-3xl sm:text-4xl font-display font-bold text-purple-300 mb-2">24/7</div>
                <div className="text-xs text-foreground/60 uppercase tracking-wider font-semibold">Dedicated Support</div>
              </div>
            </div>
          </div>
        </GlassCard>
      </section>

      {/* Mission & Vision Cards */}
      <section id="mission" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <GlassCard className="p-8 sm:p-12" glowColor="purple">
            <span className="inline-block px-3 py-1 rounded-md bg-purple-500/10 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-6">
              Our Mission
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-semibold text-foreground mb-4">
              Empower ambitious organizations to lead their industries with cutting-edge digital products.
            </h3>
            <p className="text-base text-foreground/75 leading-relaxed">
              We empower our partners by delivering resilient, high-speed, and visually stunning software solutions that eliminate friction, capture market share, and turn visitors into loyal customers.
            </p>
          </GlassCard>

          <GlassCard className="p-8 sm:p-12" glowColor="blue">
            <span className="inline-block px-3 py-1 rounded-md bg-blue-500/10 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6">
              Our Vision
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-semibold text-foreground mb-4">
              Become the global benchmark for modern, AI-integrated software agency engineering.
            </h3>
            <p className="text-base text-foreground/75 leading-relaxed">
              We see a future where every digital interaction is instantaneous, beautifully crafted, and intelligent. We are building the engineering standards and workflows to make that future a reality today.
            </p>
          </GlassCard>
        </div>
      </section>

      {/* Our Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-28">
        <SectionHeading
          badge="Core Values"
          title="What We"
          highlight="Stand For"
          subtitle="The non-negotiable principles that dictate how we write code, design interfaces, and partner with clients."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, idx) => (
            <GlassCard key={idx} className="flex flex-col justify-between" glowColor="purple">
              <div>
                <div className="text-3xl font-display text-purple-400 mb-4">{val.icon}</div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                  {val.title}
                </h3>
                <p className="text-sm text-foreground/75 leading-relaxed">
                  {val.description}
                </p>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Technology Stack Grid */}
      <section id="tech-stack" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <SectionHeading
          badge="Engineering Arsenal"
          title="Our Technology"
          highlight="Stack"
          subtitle="We use battle-tested, modern technologies that offer maximum speed, security, and scalability."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techStack.map((group, index) => (
            <GlassCard key={index} className="flex flex-col justify-between" glowColor="purple">
              <div>
                <h3 className="text-lg font-display font-semibold text-foreground border-b border-white/10 pb-4 mb-6">
                  {group.category}
                </h3>
                <ul className="space-y-4">
                  {group.items.map((tech, i) => (
                    <li key={i} className="flex items-center justify-between">
                      <span className="text-sm font-medium text-foreground/90">{tech.name}</span>
                      <span className="text-xs px-2.5 py-1 rounded-full bg-purple-500/15 text-purple-300 font-mono">
                        {tech.badge}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <CTABannerSection />
    </div>
  );
}
