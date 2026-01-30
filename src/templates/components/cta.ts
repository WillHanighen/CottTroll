/**
 * Call-to-action section component
 */
export const renderCTA = (): string => {
  return `
  <section class="py-32 px-6">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="font-display text-4xl md:text-6xl font-bold mb-8">
        Ready to Build the <span class="text-gradient">Future?</span>
      </h2>
      <p class="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
        Join thousands of developers already building with NovaSynth. Start free, scale infinitely.
      </p>
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button class="w-full sm:w-auto px-10 py-5 rounded-full font-semibold text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient text-lg hover:shadow-lg hover:shadow-purple-500/30 transition-shadow">
          Start Building Now
        </button>
        <button class="w-full sm:w-auto px-10 py-5 rounded-full font-semibold glass hover:bg-white/10 transition-colors text-lg">
          Talk to Sales
        </button>
      </div>
    </div>
  </section>`;
};
