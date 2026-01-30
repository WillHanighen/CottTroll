import { SITE_CONFIG } from "../../config/site.ts";

/**
 * Stats section component
 */
export const renderStats = (): string => {
  const statItems = SITE_CONFIG.stats
    .map(stat => `
          <div class="text-center">
            <div class="font-display text-4xl md:text-5xl font-bold text-gradient mb-2">${stat.value}</div>
            <div class="text-slate-400">${stat.label}</div>
          </div>`)
    .join('\n');

  return `
  <section class="py-20 px-6">
    <div class="max-w-7xl mx-auto">
      <div class="glass rounded-3xl p-12 md:p-16">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          ${statItems}
        </div>
      </div>
    </div>
  </section>`;
};
