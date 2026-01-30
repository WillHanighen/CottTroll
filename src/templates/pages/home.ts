import { renderLayout } from "../layout.ts";
import {
  renderNav,
  renderHero,
  renderFeatures,
  renderStats,
  renderCTA,
  renderFooter,
  renderBackground,
} from "../components/index.ts";

/**
 * Render the home page
 * Assembles all components into the full page
 */
export const renderHomePage = (): string => {
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

  return renderLayout(content);
};
