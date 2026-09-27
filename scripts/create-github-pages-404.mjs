import { copyFile } from "node:fs/promises";

const appShell = new URL("../dist/index.html", import.meta.url);
const notFoundShell = new URL("../dist/404.html", import.meta.url);

await copyFile(appShell, notFoundShell);
console.log("Created dist/404.html for GitHub Pages route fallback.");
