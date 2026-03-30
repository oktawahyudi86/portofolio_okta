import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const normalizePath = (value) => (
  process.platform === 'win32' && value.startsWith('\\\\?\\') ? value.slice(4) : value
);

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const rootDir = normalizePath(path.resolve(scriptDir, '..'));
const viteCliPath = path.resolve(rootDir, 'node_modules', 'vite', 'bin', 'vite.js');
const viteArgs = process.argv.slice(2);

process.chdir(rootDir);
process.argv = [process.execPath, viteCliPath, ...viteArgs];

await import(pathToFileURL(viteCliPath).href);
