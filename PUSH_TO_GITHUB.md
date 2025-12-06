# Push to GitHub - Instructions

## Step 1: Create a GitHub Repository

1. Go to https://github.com
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name it (e.g., "hotel-booking-system")
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

## Step 2: Push Your Code

After creating the repository, GitHub will show you commands. Use these:

```bash
# Add the remote repository (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

## Alternative: Using SSH

If you have SSH keys set up:

```bash
git remote add origin git@github.com:YOUR_USERNAME/REPO_NAME.git
git branch -M main
git push -u origin main
```

## Quick Command (After creating repo on GitHub)

Replace `YOUR_USERNAME` and `REPO_NAME` with your actual values:

```bash
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git branch -M main
git push -u origin main
```

