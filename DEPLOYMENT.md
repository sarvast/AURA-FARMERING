# Vercel Deployment Guide

## Quick Deploy Steps:

### Option 1: Vercel CLI (Recommended)
1. Install Vercel CLI globally:
   ```bash
   npm i -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   vercel
   ```

4. For production:
   ```bash
   vercel --prod
   ```

### Option 2: Vercel Dashboard
1. Visit [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your Git repository (GitHub/GitLab/Bitbucket)
4. Vercel will auto-detect Next.js
5. Click "Deploy"

## Important Notes:
- Build Command: `npm run build`
- Install Command: `npm install --legacy-peer-deps`
- Output Directory: `.next`
- Node Version: 18.x or higher

## Environment Variables (if needed):
Add any environment variables in Vercel Dashboard under Project Settings > Environment Variables

## Custom Domain:
After deployment, add your custom domain in Vercel Dashboard > Domains
