/**
 * Inline styles for the page
 * These override cursors and add animations
 */
export const inlineStyles = `
    /* Override ALL cursor states - the key to the deception */
    *, *::before, *::after {
      cursor: default !important;
    }
    
    a, button, [role="button"], input, select, textarea, label, 
    [onclick], [tabindex], .clickable {
      cursor: default !important;
    }
    
    *:hover, *:focus, *:active {
      cursor: default !important;
    }
    
    /* Animations */
    @keyframes gradient {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }
    
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }
    
    @keyframes pulse-glow {
      0%, 100% { opacity: 0.4; }
      50% { opacity: 0.8; }
    }
    
    @keyframes shimmer {
      0% { background-position: -200% 0; }
      100% { background-position: 200% 0; }
    }
    
    .animate-gradient {
      animation: gradient 8s ease infinite;
      background-size: 200% 200%;
    }
    
    .animate-float {
      animation: float 6s ease-in-out infinite;
    }
    
    .animate-float-delayed {
      animation: float 6s ease-in-out infinite;
      animation-delay: -3s;
    }
    
    .animate-pulse-glow {
      animation: pulse-glow 4s ease-in-out infinite;
    }
    
    .shimmer {
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
      background-size: 400% 100%;
      animation: shimmer 3s linear infinite;
    }
    
    .glass {
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .text-gradient {
      background: linear-gradient(135deg, #60a5fa, #a78bfa, #f472b6);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    .glow-border {
      position: relative;
    }
    
    .glow-border::before {
      content: '';
      position: absolute;
      inset: -2px;
      background: linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899);
      border-radius: inherit;
      opacity: 0;
      transition: opacity 0.5s ease;
      z-index: -1;
      filter: blur(8px);
    }
    
    .glow-border:hover::before {
      opacity: 0.6;
    }
    
    /* Subtle selection prevention */
    body {
      -webkit-user-select: none;
      user-select: none;
    }
`;

/**
 * Tailwind CDN configuration
 */
export const tailwindConfig = `
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ['Inter', 'system-ui', 'sans-serif'],
            display: ['Space Grotesk', 'system-ui', 'sans-serif'],
          },
        }
      }
    }
`;
