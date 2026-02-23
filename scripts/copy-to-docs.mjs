import fs from "node:fs";
import path from "node:path";

const docsDir = "docs";
const publicDir = path.join(docsDir, "public");

function copyDir(srcDir, destDir) {
  fs.mkdirSync(destDir, { recursive: true });
  for (const entry of fs.readdirSync(srcDir, { withFileTypes: true })) {
    const srcPath = path.join(srcDir, entry.name);
    const destPath = path.join(destDir, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Vite builds into docs/public/ — we need to lift everything to docs/ root
if (!fs.existsSync(publicDir)) {
  console.error("Error: docs/public not found. Run vite build first.");
  process.exit(1);
}

// Copy docs/public/* to docs/ (overwriting)
for (const entry of fs.readdirSync(publicDir, { withFileTypes: true })) {
  const srcPath = path.join(publicDir, entry.name);
  const destPath = path.join(docsDir, entry.name);
  if (entry.isDirectory()) {
    copyDir(srcPath, destPath);
  } else {
    fs.copyFileSync(srcPath, destPath);
  }
}

// Remove docs/public/ (no longer needed)
fs.rmSync(publicDir, { recursive: true, force: true });

// Create 404.html for SPA routing on GitHub Pages
const indexPath = path.join(docsDir, "index.html");
if (fs.existsSync(indexPath)) {
  fs.copyFileSync(indexPath, path.join(docsDir, "404.html"));
}

// Ensure .nojekyll exists
fs.writeFileSync(path.join(docsDir, ".nojekyll"), "");

// Remove debug collector (not needed in production)
const manusDir = path.join(docsDir, "__manus__");
if (fs.existsSync(manusDir)) {
  fs.rmSync(manusDir, { recursive: true, force: true });
}

console.log("Done! docs/ is ready for GitHub Pages deploy.");
