import React from 'react';

export default function TrustedBySection() {
  const clients = [
    { name: 'NexAI Labs', logo: '▲ NEXAI' },
    { name: 'Vortex Cloud', logo: '◈ VORTEX' },
    { name: 'HyperScale', logo: '✦ HYPERSCALE' },
    { name: 'Zenith Pay', logo: '◆ ZENITH' },
    { name: 'Quantum Core', logo: '● QUANTUM' },
    { name: 'Aether Group', logo: '■ AETHER' },
  ];

  return (
    <section className="relative py-14 border-b border-white/10 bg-white/[0.01] backdrop-blur-md overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs sm:text-sm uppercase tracking-widest text-foreground/50 font-semibold mb-8">
          Trusted by startups, creators, and growing businesses worldwide
        </p>

        {/* Marquee or Responsive Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-80">
          {clients.map((client, index) => (
            <div
              key={index}
              className="px-6 py-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-purple-500/30 hover:bg-white/[0.05] transition-all duration-300 w-full flex items-center justify-center group"
            >
              <span className="font-display font-bold text-lg tracking-wider text-foreground/70 group-hover:text-foreground transition-colors">
                {client.logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
