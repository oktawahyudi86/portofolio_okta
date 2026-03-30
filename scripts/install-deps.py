#!/usr/bin/env python3
import subprocess
import sys
import os

# Change to project directory
os.chdir('/vercel/share/v0-project')

print("[v0] Starting npm install to sync package-lock.json...")
print("[v0] This may take a few moments...")

# Run npm install
result = subprocess.run(['npm', 'install'], capture_output=True, text=True)

print("[v0] STDOUT:")
print(result.stdout)

if result.stderr:
    print("[v0] STDERR:")
    print(result.stderr)

print(f"[v0] npm install exit code: {result.returncode}")

if result.returncode == 0:
    print("[v0] SUCCESS: Dependencies installed and package-lock.json synced!")
else:
    print("[v0] ERROR: npm install failed!")
    sys.exit(1)
