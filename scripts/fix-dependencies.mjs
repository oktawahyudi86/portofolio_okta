#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');

console.log('🔧 Memperbaiki npm dependencies...');

try {
  // Hapus package-lock.json yang rusak
  const lockPath = path.join(projectRoot, 'package-lock.json');
  if (fs.existsSync(lockPath)) {
    console.log('📋 Menghapus package-lock.json yang rusak...');
    fs.unlinkSync(lockPath);
  }

  // Hapus node_modules jika ada
  const nodeModulesPath = path.join(projectRoot, 'node_modules');
  if (fs.existsSync(nodeModulesPath)) {
    console.log('🗑️  Menghapus node_modules...');
    execSync('rm -rf node_modules', { cwd: projectRoot, stdio: 'inherit' });
  }

  // Jalankan npm install untuk membuat lock file baru
  console.log('📦 Menginstall dependencies...');
  execSync('npm install', { cwd: projectRoot, stdio: 'inherit' });

  console.log('✅ Dependencies berhasil diperbaiki!');
} catch (error) {
  console.error('❌ Error:', error.message);
  process.exit(1);
}
