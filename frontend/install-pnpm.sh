#!/bin/bash

# Script to install pnpm and fix the ENOENT error

echo "Installing pnpm..."

# Method 1: Try using npm to install pnpm globally
if command -v npm &> /dev/null; then
    echo "Installing pnpm via npm..."
    npm install -g pnpm
    if [ $? -eq 0 ]; then
        echo "✅ pnpm installed successfully via npm"
        exit 0
    fi
fi

# Method 2: Try using corepack (available in Node.js 16+)
if command -v corepack &> /dev/null; then
    echo "Enabling corepack and installing pnpm..."
    corepack enable
    corepack prepare pnpm@latest --activate
    if [ $? -eq 0 ]; then
        echo "✅ pnpm installed successfully via corepack"
        exit 0
    fi
fi

# Method 3: Try the official installer
echo "Downloading pnpm installer..."
curl -fsSL https://get.pnpm.io/install.sh | sh
if [ $? -eq 0 ]; then
    echo "✅ pnpm installed successfully via official installer"
    # Add to PATH for current session
    export PATH="$HOME/.local/share/pnpm:$PATH"
    exit 0
fi

echo "❌ Failed to install pnpm. Please install manually or use npm instead."
echo "Alternative: Remove pnpm-lock.yaml and use 'npm install' instead"
exit 1