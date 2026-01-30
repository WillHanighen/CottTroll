/**
 * Site configuration and branding
 */
export const SITE_CONFIG = {
  name: "NovaSynth",
  tagline: "The Future of Intelligence",
  description: "Experience the next generation of AI that understands, creates, and transforms. Built for developers, designed for everyone.",
  year: 2026,
  
  nav: {
    links: [
      { label: "Products", href: "#" },
      { label: "Solutions", href: "#" },
      { label: "Research", href: "#" },
      { label: "Company", href: "#" },
    ],
  },
  
  stats: [
    { value: "10M+", label: "API Requests/Day" },
    { value: "99.99%", label: "Uptime SLA" },
    { value: "50K+", label: "Developers" },
    { value: "<5ms", label: "Avg Latency" },
  ],
  
  social: {
    twitter: "#",
    github: "#",
    linkedin: "#",
  },
  
  footerLinks: {
    product: [
      { label: "Features", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "API", href: "#" },
      { label: "Integrations", href: "#" },
    ],
    company: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
    ],
    resources: [
      { label: "Documentation", href: "#" },
      { label: "Help Center", href: "#" },
      { label: "Community", href: "#" },
      { label: "Status", href: "#" },
    ],
  },
} as const;

export const SERVER_CONFIG = {
  port: 3000,
  host: "localhost",
} as const;
