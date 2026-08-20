export const projects = [
  {
    id: 'kanjuki',
    name: 'Kanjuki — Luxury Heritage Fashion & Handloom E-Commerce',
    client: 'KANJUKI Heritage',
    industry: 'Luxury Fashion / E-Commerce',
    category: 'E-Commerce',
    timeline: 'Shipped 2026',
    coverImage: '', // You can drop a screenshot in public/ or paste an image URL
    challenge:
      'KANJUKI required a bespoke, high-performance digital storefront to showcase authentic handwoven Banaras and Kanchipuram silk sarees with a luxury visual identity and instant response times.',
    solution:
      'Engineered a modern Next.js commerce platform featuring dynamic catalog filtering, interactive bespoke sizing consultations, elegant typography, and edge deployment on Vercel.',
    technologies: ['Next.js 15', 'React', 'Tailwind CSS', 'Turbopack', 'Vercel'],
    results: 'Live High-Speed Luxury Commerce & Bespoke Tailoring Experience',
    outcomes: [
      'Sub-second page load times with Next.js edge rendering',
      'Interactive bridal suite & bespoke sizing consultation flow',
      'Fluid mobile-first shopping with drag-scroll product showcases'
    ],
    liveUrl: 'https://kanjuki.vercel.app/',
    isFeatured: true,
    isCaseStudy: true,
    caseStudy: {
      problem:
        'KANJUKI needed an online experience that felt as luxurious and tactile as entering a private heritage boutique. Conventional e-commerce templates lacked the bespoke brand identity, typography elegance, and fluidity required for royal handloom collections.',
      research:
        'We analyzed high-end luxury fashion shopping flows to understand customer friction points during bridal and custom blouse sizing, identifying the need for interactive tailored sizing modules directly within the purchase journey.',
      designProcess:
        'Crafted a warm, high-end editorial aesthetic using royal burgundy tones, gold zari borders, and refined serif typography inspired by classical Indian artistry and modern minimalism.',
      developmentApproach:
        'Built with Next.js 15 and Tailwind CSS for rapid server-rendered catalogs, responsive product carousels, and seamless edge hosting on Vercel for instantaneous international delivery.',
      results:
        'Successfully launched KANJUKI live at kanjuki.vercel.app with ultra-fast Core Web Vitals and an interactive digital showcase for global customers.',
      lessonsLearned:
        'For heritage luxury brands, micro-interactions and visual storytelling are just as crucial as checkout performance.'
    }
  }
];
