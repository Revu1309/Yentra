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
    <section className="relative py-14 border-y border-white/10 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-foreground/50 font-bold mb-8">
          TRUSTED BY STARTUPS, CREATORS, AND GROWING BUSINESSES WORLDWIDE
        </p>

        {/* Marquee or Responsive Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-0 items-center justify-items-center opacity-80">
          {clients.map((client, index) => (
            <div
              key={index}
              className="p-6 border-b sm:border-y border-x border-white/10 hover:border-neon hover:bg-neon transition-all duration-300 w-full flex items-center justify-center group"
            >
              <span className="font-mono font-bold text-sm tracking-widest uppercase text-foreground/70 group-hover:text-black transition-colors">
                {client.logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
