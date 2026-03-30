#!/usr/bin/env python3
import subprocess
import os

os.chdir('/vercel/share/v0-project')

# Run npm install to update lock file with all platform-specific binaries
print("[v0] Running npm install to fix package-lock.json...")
result = subprocess.run(['npm', 'install'], capture_output=True, text=True)

print(result.stdout)
if result.stderr:
    print("STDERR:", result.stderr)

if result.returncode == 0:
    print("[v0] npm install completed successfully!")
else:
    print(f"[v0] npm install failed with code {result.returncode}")
