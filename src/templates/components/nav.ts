import { SITE_CONFIG } from "../../config/site.ts";

/**
 * Navigation bar component
 */
export const renderNav = (): string => {
  const navLinks = SITE_CONFIG.nav.links
    .map(link => `<a href="${link.href}" class="text-slate-300 hover:text-white transition-colors text-sm font-medium">${link.label}</a>`)
    .join('\n        ');

  return `
  <nav class="fixed top-0 left-0 right-0 z-50 px-6 py-4">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      <div class="flex items-center gap-2">
        <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
          </svg>
        </div>
        <span class="font-display font-bold text-xl">${SITE_CONFIG.name}</span>
      </div>
      <div class="hidden md:flex items-center gap-8">
        ${navLinks}
      </div>
      <div class="flex items-center gap-4">
        <button class="text-sm font-medium text-slate-300 hover:text-white transition-colors">Sign In</button>
        <button class="px-5 py-2.5 rounded-full text-sm font-semibold bg-white text-slate-900 hover:bg-slate-100 transition-colors">
          Get Started
        </button>
      </div>
    </div>
  </nav>`;
};
