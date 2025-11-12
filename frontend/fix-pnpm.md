# Fix pnpm ENOENT Error

The error `spawn pnpm ENOENT` means pnpm is not installed on your system. Here are several ways to fix it:

## Quick Fix (Recommended)

### Option 1: Install pnpm globally with npm
```bash
npm install -g pnpm
```

### Option 2: Use Node.js Corepack (if available)
```bash
corepack enable
corepack prepare pnpm@latest --activate
```

### Option 3: Official pnpm installer
```bash
curl -fsSL https://get.pnpm.io/install.sh | sh
```

### Option 4: Switch to npm (alternative solution)
If you prefer to use npm instead of pnpm:

```bash
# Remove pnpm lock file
rm pnpm-lock.yaml

# Install dependencies with npm
npm install

# Build with npm
npm run build
```

## After Installing pnpm

Once pnpm is installed, run:

```bash
# Install dependencies
pnpm install

# Build the project  
pnpm run build

# Start development (optional)
pnpm run dev
```

## Verify Installation

Check if pnpm is working:
```bash
pnpm --version
```

## Troubleshooting

If you still get errors after installation:

1. **Restart your terminal** - The PATH might need to be refreshed
2. **Check PATH** - Make sure pnpm is in your PATH:
   ```bash
   echo $PATH
   which pnpm
   ```
3. **Manual PATH addition** - Add pnpm to your PATH:
   ```bash
   export PATH="$HOME/.local/share/pnpm:$PATH"
   ```

The React app is ready to run once pnpm is installed!