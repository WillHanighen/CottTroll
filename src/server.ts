import { serve } from "bun";
import { SERVER_CONFIG, SITE_CONFIG } from "./config/site.ts";
import { handleRequest } from "./routes/index.ts";

/**
 * Start the server
 */
export const startServer = () => {
  const server = serve({
    port: SERVER_CONFIG.port,
    fetch: handleRequest,
  });

  console.log(`
╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║   🚀 ${SITE_CONFIG.name} AI - Server Running                        ║
║                                                           ║
║   Local:   http://${SERVER_CONFIG.host}:${server.port}                          ║
║                                                           ║
║   Ready to... enlighten visitors 😈                       ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
`);

  return server;
};
