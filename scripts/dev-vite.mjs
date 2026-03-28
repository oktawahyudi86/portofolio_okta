import path from 'node:path';
import process from 'node:process';
import { pathToFileURL } from 'node:url';

const normalizeCwd = (cwd) => {
  if (process.platform !== 'win32') return cwd;
  if (cwd.startsWith('\\\\?\\')) return cwd.slice(4);
  return cwd;
};

const resolveProjectRoot = () => {
  const packageJsonPath = process.env.npm_package_json;
  if (packageJsonPath) {
    const normalized = normalizeCwd(packageJsonPath);
    return normalized.replace(/[\\/]package\.json$/i, '');
  }

  const initCwd = process.env.INIT_CWD;
  if (initCwd) {
    return normalizeCwd(initCwd);
  }

  return normalizeCwd(process.cwd());
};

const cwd = resolveProjectRoot();
const viteCliPath = path.resolve(cwd, 'node_modules', 'vite', 'bin', 'vite.js');

process.chdir(cwd);
process.argv = [
  process.execPath,
  viteCliPath,
  '--port=5173',
  '--host=0.0.0.0',
];

await import(pathToFileURL(viteCliPath).href);
