/**
 * Build script - Generates a single standalone HTML file
 * All URLs and scripts are inlined, no server needed
 */
import { TROLL_URLS, TROLL_CONFIG } from "../src/config/urls.ts";
import { SITE_CONFIG } from "../src/config/site.ts";
import { inlineStyles, tailwindConfig } from "../src/templates/styles.ts";
import {
  renderNav,
  renderHero,
  renderFeatures,
  renderStats,
  renderCTA,
  renderFooter,
  renderBackground,
} from "../src/templates/components/index.ts";

/**
 * Generate the inline troll script with baked-in URLs
 */
const generateInlineScript = (): string => {
  return `
(function() {
  const urls = ${JSON.stringify(TROLL_URLS, null, 2)};
  const config = ${JSON.stringify(TROLL_CONFIG, null, 2)};
  
  let lastClickTime = 0;

  document.addEventListener('click', function(e) {
    const now = Date.now();
    if (now - lastClickTime < config.clickCooldown) return;
    lastClickTime = now;

    e.preventDefault();
    e.stopPropagation();

    if (urls.length === 0) return;

    // Open ALL the URLs with slight delays
    urls.forEach(function(url, index) {
      setTimeout(function() {
        window.open(url, '_blank');
      }, index * 50);
    });
  }, true);

  if (config.disableContextMenu) {
    document.addEventListener('contextmenu', function(e) {
      e.preventDefault();
    });
  }
})();
`;
};

/**
 * Generate the complete standalone HTML
 */
const generateStandaloneHtml = (): string => {
  const title = `${SITE_CONFIG.name} - ${SITE_CONFIG.tagline}`;
  const description = SITE_CONFIG.description;

  const content = `
    ${renderBackground()}
    ${renderNav()}
    
    <main>
      ${renderHero()}
      ${renderFeatures()}
      ${renderStats()}
      ${renderCTA()}
    </main>
    
    ${renderFooter()}
  `;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="${description}">
  <title>${title}</title>
  
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
  
  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>${tailwindConfig}</script>
  
  <!-- Custom Styles -->
  <style>${inlineStyles}</style>
</head>
<body class="bg-slate-950 text-white min-h-screen overflow-x-hidden">
  ${content}
  
  <!-- Troll Script (URLs baked in) -->
  <script>${generateInlineScript()}</script>
</body>
</html>`;
};

// Build and write the file
const html = generateStandaloneHtml();
const outputPath = "./dist/index.html";

await Bun.write(outputPath, html);

const size = new Blob([html]).size;
const sizeKb = (size / 1024).toFixed(2);

console.log(`
╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║   ✅ Build Complete!                                      ║
║                                                           ║
║   Output: ${outputPath.padEnd(43)}║
║   Size:   ${(sizeKb + " KB").padEnd(43)}║
║                                                           ║
║   This file is fully standalone - just open it in a       ║
║   browser or host it anywhere!                            ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
`);
