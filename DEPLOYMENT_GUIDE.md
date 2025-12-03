# Deployment Guide: Hosting Your Portfolio on Namecheap Domain

This guide covers two methods to host your Next.js portfolio on your Namecheap domain.

## Method 1: Vercel (Recommended - Easiest for Next.js)

Vercel is made by the creators of Next.js and offers the simplest deployment process.

### Step 1: Prepare Your Code for Git
1. Initialize a Git repository (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. Create a GitHub repository:
   - Go to https://github.com/new
   - Create a new repository (e.g., `portfolio`)
   - Don't initialize with README
   - Copy the repository URL

3. Push your code to GitHub:
   ```bash
   git remote add origin <your-github-repo-url>
   git branch -M main
   git push -u origin main
   ```

### Step 2: Deploy to Vercel
1. Go to https://vercel.com and sign up/login (you can use your GitHub account)
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Next.js settings
5. Click "Deploy"
6. Wait for deployment to complete (usually 1-2 minutes)

### Step 3: Connect Your Namecheap Domain
1. In your Vercel dashboard, go to your project
2. Click on "Settings" → "Domains"
3. Add your domain (e.g., `yourdomain.com` and `www.yourdomain.com`)
4. Vercel will show you DNS records to add

### Step 4: Configure DNS in Namecheap
1. Log into your Namecheap account
2. Go to "Domain List" → Select your domain → "Manage"
3. Go to "Advanced DNS" tab
4. Add these DNS records (Vercel will provide exact values):
   - **Type A Record**: 
     - Host: `@`
     - Value: Vercel's IP (Vercel will show this)
     - TTL: Automatic
   - **Type CNAME Record**:
     - Host: `www`
     - Value: `cname.vercel-dns.com`
     - TTL: Automatic
   
   OR use the simpler method:
   - **Type A Record**:
     - Host: `@`
     - Value: `76.76.21.21` (Vercel's IP)
   - **Type CNAME Record**:
     - Host: `www`
     - Value: `cname.vercel-dns.com`

5. Save changes
6. Wait 24-48 hours for DNS propagation (usually faster, 1-2 hours)

### Step 5: Verify SSL Certificate
- Vercel automatically provisions SSL certificates
- Your site will be available at `https://yourdomain.com` once DNS propagates

---

## Method 2: GitHub Pages (Alternative)

GitHub Pages requires static export for Next.js. This method is free but requires more setup.

### Step 1: Configure Next.js for Static Export
Update `next.config.js` to enable static export:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
}
```

### Step 2: Update package.json Scripts
Add a script for building and exporting:

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "export": "next build"
}
```

### Step 3: Push to GitHub
1. Create a GitHub repository
2. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

### Step 4: Set Up GitHub Actions for Auto-Deployment
Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

### Step 5: Enable GitHub Pages
1. Go to your repository → Settings → Pages
2. Source: Deploy from a branch
3. Branch: `gh-pages` → `/ (root)`
4. Save

### Step 6: Configure Namecheap DNS for GitHub Pages
1. In Namecheap, go to Advanced DNS
2. Add these records:
   - **Type A Records** (add all 4):
     - `@` → `185.199.108.153`
     - `@` → `185.199.109.153`
     - `@` → `185.199.110.153`
     - `@` → `185.199.111.153`
   - **Type CNAME Record**:
     - `www` → `yourusername.github.io`

3. In your GitHub repository Settings → Pages, add your custom domain
4. GitHub will create a CNAME file automatically

---

## Quick Comparison

| Feature | Vercel | GitHub Pages |
|---------|--------|--------------|
| Setup Difficulty | ⭐ Easy | ⭐⭐ Moderate |
| Next.js Support | ✅ Native | ⚠️ Static only |
| Free Tier | ✅ Yes | ✅ Yes |
| SSL Certificate | ✅ Auto | ✅ Auto |
| Custom Domain | ✅ Easy | ✅ Yes |
| Build Time | Fast | Moderate |

## Recommendation

**Use Vercel** - It's specifically designed for Next.js, requires minimal configuration, and provides the best performance and developer experience.

---

## Troubleshooting

### DNS Not Working?
- Wait 24-48 hours for full propagation
- Use https://dnschecker.org to check DNS propagation globally
- Clear your browser cache and DNS cache

### SSL Certificate Issues?
- Vercel: Usually resolves automatically within minutes
- GitHub Pages: May take up to 24 hours after DNS is configured

### Build Errors?
- Make sure all dependencies are in `package.json`
- Check that your code doesn't use server-side features if using GitHub Pages
- Review build logs in your hosting platform

---

## Next Steps After Deployment

1. Test your site at `https://yourdomain.com`
2. Set up redirects if needed (www to non-www or vice versa)
3. Add analytics (Google Analytics, Vercel Analytics, etc.)
4. Set up monitoring and error tracking

