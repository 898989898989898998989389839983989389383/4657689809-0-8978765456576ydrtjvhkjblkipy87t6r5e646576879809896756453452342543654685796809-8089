import { copyFile, access } from "node:fs/promises";
import { constants } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const clientDir = path.join(projectRoot, "dist", "client");
const shellHtml = path.join(clientDir, "_shell.html");
const indexHtml = path.join(clientDir, "index.html");

async function fileExists(filePath) {
  try {
    await access(filePath, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

const hasIndex = await fileExists(indexHtml);
const hasShell = await fileExists(shellHtml);

if (!hasIndex && hasShell) {
  await copyFile(shellHtml, indexHtml);
  console.log("Created dist/client/index.html from _shell.html for Vercel root routing.");
}
