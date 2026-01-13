# Glory Regenerative - Ad Preview Tool

A standalone Next.js app for previewing social media ads before deployment to advertising platforms.

## Local Development

```bash
cd apps/ads-preview
npm install
npm run dev
```

The app will run on **http://localhost:3001**

## Vercel Deployment

### Option 1: Deploy from Vercel Dashboard

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Configure project settings:
   - **Root Directory**: `apps/ads-preview`
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build`
   - **Output Directory**: (leave default)
5. Add custom domain: `previewads.gloryregenerativemed.com`
6. Deploy

### Option 2: Deploy via Vercel CLI

```bash
cd apps/ads-preview
vercel
```

Follow the prompts to link your project.

## Adding Images

Place ad creative images in the `public/images/` directory of the **main project root**, then reference them in the ad preview page.

## Structure

```
apps/ads-preview/
├── src/
│   └── app/
│       ├── layout.tsx      # Root layout
│       ├── page.tsx         # Ad preview page (home)
│       └── globals.css      # Tailwind styles
├── public/                  # (use main project's public folder)
├── package.json
├── next.config.ts
└── tsconfig.json
```

## Usage

Edit `/src/app/page.tsx` to update:

- Ad copy content
- Image paths
- Number of variants (A/B/C testing)
- Campaign information

## Notes

- Images are served from the main project's `/public/images/` folder
- Runs on port 3001 by default to avoid conflicts with the main app
- Separate Vercel project for subdomain hosting
