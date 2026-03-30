#!/usr/bin/env python3
import subprocess
import os
import sys

# Change to project root directory
os.chdir(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

print("[v0] Starting npm lock file fix...")
print("[v0] Current working directory:", os.getcwd())

# Step 1: Remove old package-lock.json
lock_file = "package-lock.json"
if os.path.exists(lock_file):
    print(f"[v0] Removing old {lock_file}...")
    os.remove(lock_file)
    print(f"[v0] {lock_file} removed successfully")
else:
    print(f"[v0] {lock_file} not found, skipping removal")

# Step 2: Run npm install to generate new lock file
print("[v0] Running npm install to generate new lock file...")
try:
    result = subprocess.run(
        ["npm", "install"],
        capture_output=True,
        text=True,
        check=False
    )
    
    print("[v0] npm install stdout:")
    print(result.stdout)
    
    if result.returncode != 0:
        print("[v0] npm install stderr:")
        print(result.stderr)
        print(f"[v0] npm install exited with code {result.returncode}")
        sys.exit(result.returncode)
    
    print("[v0] npm install completed successfully!")
    
    # Verify lock file was created
    if os.path.exists(lock_file):
        print(f"[v0] {lock_file} created successfully")
        # Show file size
        size = os.path.getsize(lock_file)
        print(f"[v0] {lock_file} size: {size} bytes")
    else:
        print(f"[v0] ERROR: {lock_file} was not created!")
        sys.exit(1)
        
except Exception as e:
    print(f"[v0] Error during npm install: {e}")
    sys.exit(1)

print("[v0] npm lock file fix completed successfully!")
