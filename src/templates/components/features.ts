/**
 * Feature card data
 */
interface FeatureCard {
  icon: string;
  gradient: string;
  title: string;
  description: string;
}

const features: FeatureCard[] = [
  {
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>`,
    gradient: "from-blue-500 to-cyan-500",
    title: "Lightning Fast",
    description: "Sub-millisecond inference times with our optimized runtime. Deploy globally with edge computing.",
  },
  {
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>`,
    gradient: "from-purple-500 to-pink-500",
    title: "Enterprise Security",
    description: "SOC 2 Type II certified. End-to-end encryption with zero data retention policies.",
  },
  {
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/>`,
    gradient: "from-orange-500 to-red-500",
    title: "Modular Design",
    description: "Mix and match models, fine-tune with your data, and create custom pipelines effortlessly.",
  },
  {
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>`,
    gradient: "from-green-500 to-emerald-500",
    title: "Team Collaboration",
    description: "Real-time collaboration with version control, shared prompts, and team analytics.",
  },
  {
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>`,
    gradient: "from-indigo-500 to-blue-500",
    title: "Developer First",
    description: "SDKs for every language, comprehensive APIs, and extensive documentation.",
  },
  {
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>`,
    gradient: "from-pink-500 to-rose-500",
    title: "Global Scale",
    description: "Deploy to 200+ edge locations worldwide with automatic failover and load balancing.",
  },
];

/**
 * Render a single feature card
 */
const renderFeatureCard = (feature: FeatureCard): string => {
  return `
        <div class="glass rounded-2xl p-8 glow-border group">
          <div class="w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              ${feature.icon}
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-3">${feature.title}</h3>
          <p class="text-slate-400 leading-relaxed">
            ${feature.description}
          </p>
        </div>`;
};

/**
 * Features section component
 */
export const renderFeatures = (): string => {
  const featureCards = features.map(renderFeatureCard).join('\n');

  return `
  <section class="py-32 px-6">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-20">
        <h2 class="font-display text-4xl md:text-5xl font-bold mb-6">
          Built for the <span class="text-gradient">Modern Era</span>
        </h2>
        <p class="text-xl text-slate-400 max-w-2xl mx-auto">
          Everything you need to build, deploy, and scale AI-powered applications.
        </p>
      </div>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${featureCards}
      </div>
    </div>
  </section>`;
};
