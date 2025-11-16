import { api } from "encore.dev/api";
import { readFile } from "fs/promises";
import { join } from "path";

// Serve the main index.html file
export const index = api.raw(
  {
    method: "GET",
    path: "/*path",
    expose: true
  },
  async (req, resp) => {
    try {
      const indexPath = join(__dirname, "dist", "index.html");
      const indexContent = await readFile(indexPath, "utf-8");

      resp.writeHead(200, {
        "Content-Type": "text/html",
        "Cache-Control": "no-cache"
      });
      resp.end(indexContent);
    } catch (error) {
      resp.writeHead(500, { "Content-Type": "text/plain" });
      resp.end("Frontend not available");
    }
  }
);