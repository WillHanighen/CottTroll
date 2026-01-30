import { SITE_CONFIG } from "../config/site.ts";
import { inlineStyles, tailwindConfig } from "./styles.ts";

interface LayoutOptions {
  title?: string;
  description?: string;
}

/**
 * Base HTML layout wrapper
 * Includes all head elements, fonts, Tailwind, and scripts
 */
export const renderLayout = (content: string, options: LayoutOptions = {}): string => {
  const title = options.title ?? `${SITE_CONFIG.name} - ${SITE_CONFIG.tagline}`;
  const description = options.description ?? SITE_CONFIG.description;

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
  
  <!-- Troll Script -->
  <script src="/js/troll.js"></script>
</body>
</html>`;
};
