import { execSync } from 'child_process';
import path from 'path';

const projectDir = '/vercel/share/v0-project';

try {
  console.log('[v0] Configuring git...');
  execSync('git config user.email "v0@vercel.com"', { cwd: projectDir });
  execSync('git config user.name "v0"', { cwd: projectDir });

  console.log('[v0] Adding changes...');
  execSync('git add .', { cwd: projectDir });

  console.log('[v0] Committing changes...');
  execSync('git commit -m "add: Handover page with Project Timeline, QA Testing, Documentation, and Credential sections"', { cwd: projectDir });

  console.log('[v0] Pushing to remote...');
  execSync('git push origin add-favicon', { cwd: projectDir });

  console.log('[v0] Successfully committed and pushed!');
} catch (error) {
  console.error('[v0] Error:', error.message);
  process.exit(1);
}
