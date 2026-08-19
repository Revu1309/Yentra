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
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-background pointer-events-none -z-10" />

      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-28">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-widest text-neon border border-neon mb-6">
          ↳ ABOUT YENTRA
        </span>
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-display font-black text-white uppercase tracking-tighter max-w-4xl mx-auto leading-[0.85] mb-8">
          WE ENGINEER SOFTWARE THAT <br />
          <span className="text-neon">
            DEFIES THE ORDINARY.
          </span>
        </h1>
        <p className="max-w-3xl mx-auto text-lg sm:text-xl text-foreground/75 leading-relaxed">
          Yentra was born from a simple conviction: most digital agencies move too slowly, design too safely, and engineer too superficially. We exist to change that.
        </p>
      </div>

      {/* Story Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-28">
        <GlassCard className="p-8 sm:p-14 lg:p-16 border-neon" glowColor="none">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-neon">
                ↳ OUR STORY & PHILOSOPHY
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
              <div className="p-6 bg-transparent border border-white/10 text-center hover:bg-neon hover:text-black group transition-colors duration-300">
                <div className="text-3xl sm:text-4xl font-display font-black text-neon group-hover:text-black mb-2 tracking-tighter">99.9%</div>
                <div className="font-mono text-xs uppercase tracking-widest font-bold">UPTIME SLA</div>
              </div>
              <div className="p-6 bg-transparent border border-white/10 text-center hover:bg-neon hover:text-black group transition-colors duration-300">
                <div className="text-3xl sm:text-4xl font-display font-black text-neon group-hover:text-black mb-2 tracking-tighter">&lt;100ms</div>
                <div className="font-mono text-xs uppercase tracking-widest font-bold">AVG API RESPONSE</div>
              </div>
              <div className="p-6 bg-transparent border border-white/10 text-center hover:bg-neon hover:text-black group transition-colors duration-300">
                <div className="text-3xl sm:text-4xl font-display font-black text-neon group-hover:text-black mb-2 tracking-tighter">100+</div>
                <div className="font-mono text-xs uppercase tracking-widest font-bold">PROJECTS SHIPPED</div>
              </div>
              <div className="p-6 bg-transparent border border-white/10 text-center hover:bg-neon hover:text-black group transition-colors duration-300">
                <div className="text-3xl sm:text-4xl font-display font-black text-neon group-hover:text-black mb-2 tracking-tighter">24/7</div>
                <div className="font-mono text-xs uppercase tracking-widest font-bold">DEDICATED SUPPORT</div>
              </div>
            </div>
          </div>
        </GlassCard>
      </section>

      {/* Mission & Vision Cards */}
      <section id="mission" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <GlassCard className="p-8 sm:p-12 border-neon" glowColor="none">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-neon mb-6 block">
              ↳ OUR MISSION
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-black text-white uppercase tracking-tighter mb-4 leading-[0.9]">
              Empower ambitious organizations to lead their industries with cutting-edge digital products.
            </h3>
            <p className="text-sm font-mono text-foreground/60 leading-relaxed uppercase">
              We empower our partners by delivering resilient, high-speed, and visually stunning software solutions that eliminate friction, capture market share, and turn visitors into loyal customers.
            </p>
          </GlassCard>

          <GlassCard className="p-8 sm:p-12" glowColor="none">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-coral mb-6 block">
              ↳ OUR VISION
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-black text-white uppercase tracking-tighter mb-4 leading-[0.9]">
              Become the global benchmark for modern, AI-integrated software agency engineering.
            </h3>
            <p className="text-sm font-mono text-foreground/60 leading-relaxed uppercase">
              We see a future where every digital interaction is instantaneous, beautifully crafted, and intelligent. We are building the engineering standards and workflows to make that future a reality today.
            </p>
          </GlassCard>
        </div>
      </section>

      {/* Our Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-28">
        <SectionHeading
          badge="OUR ARCHITECTURE"
          title="INFRASTRUCTURE"
          highlight="REIMAGINED."
          subtitle="Cloud foundations with the speed, control, and visibility your next chapter demands."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, idx) => (
            <GlassCard key={idx} className="flex flex-col justify-between hover:border-neon transition-colors duration-500" glowColor="none">
              <div>
                <div className="text-sm font-mono text-neon mb-4">0{idx + 1}</div>
                <h3 className="text-2xl font-display font-black text-white uppercase tracking-tighter mb-3">
                  {val.title}
                </h3>
                <p className="text-sm text-foreground/60 leading-relaxed font-mono">
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
          badge="CAPABILITIES"
          title="SEE THE WHOLE"
          highlight="MACHINE."
          subtitle="A healthy stack is not a collection of tools. It is a living system with feedback, memory, and a pulse you can trust."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techStack.map((group, index) => (
            <GlassCard key={index} className="flex flex-col justify-between hover:border-neon transition-colors duration-500" glowColor="none">
              <div>
                <h3 className="text-sm font-mono font-bold text-neon border-b border-white/10 pb-4 mb-6 uppercase tracking-widest">
                  {group.category}
                </h3>
                <ul className="space-y-4">
                  {group.items.map((tech, i) => (
                    <li key={i} className="flex items-center justify-between group cursor-default">
                      <span className="text-sm font-medium text-white group-hover:text-neon transition-colors font-mono">{tech.name}</span>
                      <span className="text-xs px-2.5 py-1 bg-white/5 border border-white/10 text-white/50 font-mono uppercase tracking-widest">
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
