import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const normalizePath = (value) => (
  process.platform === 'win32' && value.startsWith('\\\\?\\') ? value.slice(4) : value
);

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const rootDir = normalizePath(path.resolve(scriptDir, '..'));
const tscCliPath = path.resolve(rootDir, 'node_modules', 'typescript', 'bin', 'tsc');
const tscArgs = process.argv.slice(2);

process.chdir(rootDir);
process.argv = [process.execPath, tscCliPath, ...tscArgs];

await import(pathToFileURL(tscCliPath).href);
