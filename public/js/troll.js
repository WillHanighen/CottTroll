/**
 * The Magic Script - Handles the troll behavior
 * Fetches URLs from server and opens ALL tabs on click
 */
(async () => {
  // Fetch URLs and config from server
  let urls = [];
  let config = {
    clickCooldown: 500,
    disableContextMenu: true,
    disableSelection: true,
  };

  try {
    const [urlsRes, configRes] = await Promise.all([
      fetch('/api/urls'),
      fetch('/api/config'),
    ]);
    urls = await urlsRes.json();
    config = { ...config, ...(await configRes.json()) };
  } catch (e) {
    console.error('Failed to fetch troll config');
  }

  let lastClickTime = 0;

  // Listen for clicks anywhere
  document.addEventListener('click', (e) => {
    const now = Date.now();
    if (now - lastClickTime < config.clickCooldown) return;
    lastClickTime = now;

    // Prevent default behaviors
    e.preventDefault();
    e.stopPropagation();

    if (urls.length === 0) return;

    // Open ALL the URLs with slight delays to bypass some popup blockers
    urls.forEach((url, index) => {
      setTimeout(() => {
        window.open(url, '_blank');
      }, index * 50); // 50ms stagger between each
    });
  }, true);

  // Disable context menu if configured
  if (config.disableContextMenu) {
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    });
  }
})();
