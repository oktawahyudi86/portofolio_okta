import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const normalizePath = (value) => (
  process.platform === 'win32' && value.startsWith('\\\\?\\') ? value.slice(4) : value
);

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const rootDir = normalizePath(path.resolve(scriptDir, '..'));
const relativeEntry = process.argv[2];

if (!relativeEntry) {
  throw new Error('Missing entry file path.');
}

const entryPath = path.resolve(rootDir, relativeEntry);

process.chdir(rootDir);
await import(pathToFileURL(entryPath).href);
