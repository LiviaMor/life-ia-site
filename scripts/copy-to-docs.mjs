import fs from "node:fs";
import path from "node:path";

const docsDir = "docs";

// Check both possible build output locations
let srcDir = path.join("docs", "public");
if (!fs.existsSync(srcDir)) {
  srcDir = path.join("dist", "public");
}
if (!fs.existsSync(srcDir)) {
  console.error("Error: build output not found. Run vite build first.");
  process.exit(1);
}

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name);
    const d = path.join(dest, entry.name);
    entry.isDirectory() ? copyDir(s, d) : fs.copyFileSync(s, d);
  }
}

// Copy build output to docs/
for (const entry of fs.readdirSync(srcDir, { withFileTypes: true })) {
  const s = path.join(srcDir, entry.name);
  const d = path.join(docsDir, entry.name);
  entry.isDirectory() ? copyDir(s, d) : fs.copyFileSync(s, d);
}

// Remove source if it was inside docs/
if (srcDir === path.join("docs", "public")) {
  fs.rmSync(srcDir, { recursive: true, force: true });
}

// 404.html for SPA routing
const indexPath = path.join(docsDir, "index.html");
if (fs.existsSync(indexPath)) {
  fs.copyFileSync(indexPath, path.join(docsDir, "404.html"));
}

// .nojekyll
fs.writeFileSync(path.join(docsDir, ".nojekyll"), "");

// Remove debug collector
const manusDir = path.join(docsDir, "__manus__");
if (fs.existsSync(manusDir)) {
  fs.rmSync(manusDir, { recursive: true, force: true });
}

console.log("Done! docs/ is ready for GitHub Pages deploy.");
