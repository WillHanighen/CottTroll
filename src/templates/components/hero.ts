import { SITE_CONFIG } from "../../config/site.ts";

/**
 * Hero section component
 */
export const renderHero = (): string => {
  return `
  <section class="min-h-screen flex items-center justify-center px-6 pt-20">
    <div class="max-w-6xl mx-auto text-center">
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-slate-300 mb-8">
        <span class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
        Now Available: ${SITE_CONFIG.name} 4.0
      </div>
      
      <h1 class="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8">
        <span class="text-white">The Future of</span>
        <br>
        <span class="text-gradient">Artificial Intelligence</span>
      </h1>
      
      <p class="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
        ${SITE_CONFIG.description}
      </p>
      
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
        <button class="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient hover:shadow-lg hover:shadow-purple-500/30 transition-shadow">
          Start Building Free
        </button>
        <button class="w-full sm:w-auto px-8 py-4 rounded-full font-semibold glass hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
          Watch Demo
        </button>
      </div>
      
      ${renderFloatingCards()}
    </div>
  </section>`;
};

/**
 * Floating cards in hero section
 */
const renderFloatingCards = (): string => {
  return `
      <div class="relative max-w-4xl mx-auto h-64 md:h-80">
        <!-- Code Assistant Card -->
        <div class="absolute left-0 top-1/2 -translate-y-1/2 w-48 md:w-64 glass rounded-2xl p-4 animate-float glow-border">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
              <svg class="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </div>
            <span class="text-sm font-medium">Code Assistant</span>
          </div>
          <div class="text-xs text-slate-400 font-mono bg-slate-900/50 rounded-lg p-2">
            <span class="text-purple-400">const</span> result = <span class="text-blue-400">await</span> nova.<span class="text-green-400">generate</span>()
          </div>
        </div>
        
        <!-- Analytics Card -->
        <div class="absolute right-0 top-1/2 -translate-y-1/2 w-48 md:w-64 glass rounded-2xl p-4 animate-float-delayed glow-border">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
              <svg class="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
              </svg>
            </div>
            <span class="text-sm font-medium">Analytics</span>
          </div>
          <div class="flex items-end gap-1 h-12">
            <div class="flex-1 bg-gradient-to-t from-purple-500 to-purple-400 rounded-t h-4/6"></div>
            <div class="flex-1 bg-gradient-to-t from-purple-500 to-purple-400 rounded-t h-5/6"></div>
            <div class="flex-1 bg-gradient-to-t from-purple-500 to-purple-400 rounded-t h-3/6"></div>
            <div class="flex-1 bg-gradient-to-t from-purple-500 to-purple-400 rounded-t h-full"></div>
            <div class="flex-1 bg-gradient-to-t from-purple-500 to-purple-400 rounded-t h-4/6"></div>
          </div>
        </div>
        
        <!-- Deployment Card -->
        <div class="absolute left-1/2 -translate-x-1/2 top-0 glass rounded-2xl p-4 animate-float glow-border" style="animation-delay: -1.5s;">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
            </div>
            <div>
              <div class="text-sm font-medium">Model Deployed</div>
              <div class="text-xs text-slate-400">nova-4-turbo • 2ms latency</div>
            </div>
          </div>
        </div>
      </div>`;
};
