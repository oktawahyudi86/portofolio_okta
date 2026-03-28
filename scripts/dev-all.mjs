import { spawn } from 'node:child_process';
import net from 'node:net';
import process from 'node:process';

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

const findAvailablePort = (preferredPort) =>
  new Promise((resolve, reject) => {
    const tryPort = (port) => {
      const server = net.createServer();
      server.unref();

      server.once('error', (error) => {
        if (error.code === 'EADDRINUSE') {
          tryPort(port + 1);
          return;
        }
        reject(error);
      });

      server.listen(port, () => {
        const address = server.address();
        const resolvedPort = typeof address === 'object' && address ? address.port : port;
        server.close(() => resolve(resolvedPort));
      });
    };

    tryPort(preferredPort);
  });

const cwd = resolveProjectRoot();
const processes = [
  { name: 'vite', args: ['run', 'dev'] },
  { name: 'server', args: ['run', 'dev:server'] },
];

let shuttingDown = false;
const children = [];

const stopAll = (signal = 'SIGTERM') => {
  if (shuttingDown) return;
  shuttingDown = true;
  for (const child of children) {
    if (!child.killed) {
      child.kill(signal);
    }
  }
};

const spawnNpmProcess = (proc, env) => {
  const command = process.platform === 'win32'
    ? ['cmd.exe', ['/d', '/s', '/c', `npm ${proc.args.join(' ')}`]]
    : ['npm', proc.args];

  const [binary, args] = command;
  const child = spawn(binary, args, {
    cwd,
    stdio: 'inherit',
    env,
  });

  child.on('exit', (code, signal) => {
    if (shuttingDown) return;

    if (signal) {
      stopAll(signal);
      process.exitCode = 1;
      return;
    }

    if (code && code !== 0) {
      stopAll();
      process.exitCode = code;
      return;
    }

    const everyoneFinished = children.every((entry) => entry.exitCode !== null);
    if (everyoneFinished) {
      process.exitCode = 0;
    }
  });

  child.on('error', (error) => {
    console.error(`[dev:all] Failed to start ${proc.name}:`, error.message);
    stopAll();
    process.exitCode = 1;
  });

  children.push(child);
};

for (const signal of ['SIGINT', 'SIGTERM']) {
  process.on(signal, () => {
    stopAll(signal);
  });
}

const main = async () => {
  const preferredApiPort = Number(process.env.PORT || '3000');
  const apiPort = await findAvailablePort(preferredApiPort);
  const sharedEnv = {
    ...process.env,
    PORT: String(apiPort),
    VITE_API_PORT: String(apiPort),
  };

  console.log(`[dev:all] Project root: ${cwd}`);
  console.log(`[dev:all] Using API port ${apiPort}`);

  for (const proc of processes) {
    spawnNpmProcess(proc, sharedEnv);
  }
};

main().catch((error) => {
  console.error('[dev:all] Startup failed:', error.message);
  process.exit(1);
});
