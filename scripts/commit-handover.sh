#!/bin/bash

cd /vercel/share/v0-project

# Configure git
git config user.email "v0@vercel.com"
git config user.name "v0"

# Add changes
git add .

# Commit changes
git commit -m "add: Handover page with Project Timeline, QA Testing, Documentation, and Credential sections"

# Push to remote
git push origin add-favicon
