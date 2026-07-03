#!/usr/bin/env node
const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const srcDir = path.join(root, "src");
const publicProjectsDir = path.join(root, "public", "projects");
const nextConfigPath = path.join(root, "next.config.js");

function runCommand(command, args = [], options = {}) {
  const commandString = [command, ...args].join(" ");
  const result = spawnSync(commandString, {
    stdio: "inherit",
    cwd: root,
    shell: true,
    ...options,
  });

  if (result.status !== 0) {
    throw new Error(`Command failed: ${commandString}`);
  }
}

function findFiles(dir, exts) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...findFiles(fullPath, exts));
    } else if (exts.includes(path.extname(entry.name).toLowerCase())) {
      results.push(fullPath);
    }
  }
  return results;
}

function checkInlineStyles() {
  const files = findFiles(srcDir, [".ts", ".tsx", ".js", ".jsx"]);
  const matches = [];

  for (const file of files) {
    const contents = fs.readFileSync(file, "utf8");
    const lines = contents.split(/\r?\n/);

    lines.forEach((line, index) => {
      if (/style=\{\{/.test(line)) {
        matches.push({ file, line: index + 1, text: line.trim() });
      }
    });
  }

  return matches;
}

function checkExternalLinks() {
  const files = findFiles(srcDir, [".ts", ".tsx", ".js", ".jsx"]);
  const issues = [];
  const anchorRegex = /<a\b[^>]*\btarget=(?:"|')_blank(?:"|')[^>]*>/g;

  for (const file of files) {
    const contents = fs.readFileSync(file, "utf8");
    let match;
    while ((match = anchorRegex.exec(contents))) {
      const tag = match[0];
      if (!/\brel=(?:"|')[^"']*\bnoopener\b[^"']*(?:"|')/.test(tag)) {
        const line = contents.slice(0, match.index).split(/\r?\n/).length;
        issues.push({ file, line, tag: tag.trim() });
      }
    }
  }

  return issues;
}

function checkSecurityHeaders() {
  const config = fs.readFileSync(nextConfigPath, "utf8");
  const checks = [
    { name: "Content-Security-Policy", regex: /Content-Security-Policy/ },
    { name: "X-Frame-Options", regex: /X-Frame-Options/ },
    { name: "Strict-Transport-Security", regex: /Strict-Transport-Security/ },
    { name: "X-Content-Type-Options", regex: /X-Content-Type-Options/ },
    { name: "Referrer-Policy", regex: /Referrer-Policy/ },
    { name: "Permissions-Policy", regex: /Permissions-Policy/ },
  ];
  return checks.filter((check) => !check.regex.test(config));
}

function runLint() {
  try {
    console.log("\nRunning lint check on source code...");
    runCommand("npx", ["eslint", "src", "--ext", ".js,.jsx,.ts,.tsx"]);
    return true;
  } catch (error) {
    console.error("\n[ERROR] Lint check failed. Fix the issues above before deploying.");
    return false;
  }
}

function checkImageFormats() {
  if (!fs.existsSync(publicProjectsDir)) return [];
  const images = findFiles(publicProjectsDir, [".jpg", ".jpeg", ".png", ".gif", ".svg"]);
  return images;
}

function main() {
  console.log("\nRunning prelaunch checks...");

  const inlineStyleIssues = checkInlineStyles();
  const linkIssues = checkExternalLinks();
  const missingHeaders = checkSecurityHeaders();
  const nonOptimizedImages = checkImageFormats();

  let failed = false;

  if (inlineStyleIssues.length) {
    failed = true;
    console.error("\n[ERROR] Inline React styles detected (style={{ ... }}):");
    inlineStyleIssues.slice(0, 20).forEach((item) => {
      console.error(`  ${item.file}:${item.line} -> ${item.text}`);
    });
    if (inlineStyleIssues.length > 20) {
      console.error(`  ...and ${inlineStyleIssues.length - 20} more`);
    }
  }

  if (linkIssues.length) {
    failed = true;
    console.error("\n[ERROR] External links with target=\"_blank\" missing rel=\"noopener\":");
    linkIssues.slice(0, 20).forEach((item) => {
      console.error(`  ${item.file}:${item.line} -> ${item.tag}`);
    });
    if (linkIssues.length > 20) {
      console.error(`  ...and ${linkIssues.length - 20} more`);
    }
  }

  if (missingHeaders.length) {
    failed = true;
    console.error("\n[ERROR] Missing required security headers in next.config.js:");
    missingHeaders.forEach((item) => console.error(`  - ${item.name}`));
  }

  if (nonOptimizedImages.length) {
    console.warn("\n[WARN] Found non-optimized images in public/projects:");
    nonOptimizedImages.slice(0, 40).forEach((image) => {
      console.warn(`  - ${path.relative(root, image)}`);
    });
    if (nonOptimizedImages.length > 40) {
      console.warn(`  ...and ${nonOptimizedImages.length - 40} more`);
    }
    console.warn("  Consider converting these to webp or avif for better performance.");
  }

  if (!runLint()) {
    failed = true;
  }

  try {
    console.log("\nRunning production build check...");
    runCommand("npm", ["run", "build"]);
  } catch (error) {
    failed = true;
    console.error("\n[ERROR] Production build failed. Fix build issues before deploying.");
  }

  if (failed) {
    console.error("\nPrelaunch check failed. Address the errors above before deployment.");
    process.exit(1);
  }

  console.log("\nPrelaunch check passed. The project is ready to deploy.");
}

main();
