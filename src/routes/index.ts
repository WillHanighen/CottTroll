import { file } from "bun";
import { TROLL_URLS, TROLL_CONFIG } from "../config/urls.ts";
import { renderHomePage } from "../templates/pages/index.ts";

/**
 * JSON response helper
 */
const jsonResponse = (data: unknown, status = 200): Response => {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
};

/**
 * HTML response helper
 */
const htmlResponse = (html: string, status = 200): Response => {
  return new Response(html, {
    status,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
    },
  });
};

/**
 * Handle API routes
 */
const handleApiRoutes = (pathname: string): Response | null => {
  switch (pathname) {
    case "/api/urls":
      return jsonResponse(TROLL_URLS);
    
    case "/api/config":
      return jsonResponse(TROLL_CONFIG);
    
    default:
      return null;
  }
};

/**
 * Handle static file routes
 */
const handleStaticRoutes = async (pathname: string): Promise<Response | null> => {
  // JavaScript files
  if (pathname.startsWith("/js/")) {
    const filePath = `./public${pathname}`;
    const staticFile = file(filePath);
    if (await staticFile.exists()) {
      return new Response(staticFile, {
        headers: { "Content-Type": "application/javascript" },
      });
    }
  }
  
  // CSS files
  if (pathname.startsWith("/css/") || pathname === "/styles.css") {
    const filePath = pathname === "/styles.css" ? "./public/styles.css" : `./public${pathname}`;
    const staticFile = file(filePath);
    if (await staticFile.exists()) {
      return new Response(staticFile, {
        headers: { "Content-Type": "text/css" },
      });
    }
  }
  
  // Other static files in public directory
  if (pathname.startsWith("/public/")) {
    const filePath = `.${pathname}`;
    const staticFile = file(filePath);
    if (await staticFile.exists()) {
      return new Response(staticFile);
    }
  }
  
  return null;
};

/**
 * Handle page routes
 */
const handlePageRoutes = (pathname: string): Response | null => {
  switch (pathname) {
    case "/":
    case "/index.html":
      return htmlResponse(renderHomePage());
    
    default:
      return null;
  }
};

/**
 * Main request handler
 */
export const handleRequest = async (req: Request): Promise<Response> => {
  const url = new URL(req.url);
  const { pathname } = url;
  
  // Try API routes first
  const apiResponse = handleApiRoutes(pathname);
  if (apiResponse) return apiResponse;
  
  // Try static files
  const staticResponse = await handleStaticRoutes(pathname);
  if (staticResponse) return staticResponse;
  
  // Try page routes
  const pageResponse = handlePageRoutes(pathname);
  if (pageResponse) return pageResponse;
  
  // 404
  return new Response("Not Found", { status: 404 });
};
