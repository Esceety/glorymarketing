# Glory Regenerative - Ad Preview System

A standalone Next.js application for previewing Facebook ad variations before deploying to ad platforms.

## Local Development

```bash
npm install
npm run dev
```

The app will run on `http://localhost:3001`

## Vercel Deployment

This app is designed to be deployed as a separate Vercel project:

1. Push the `ads-preview` folder to its own Git repository, or
2. Deploy from the monorepo by setting the Root Directory to `ads-preview` in Vercel project settings

### Subdomain Configuration

Once deployed, configure DNS:

- Add CNAME record: `previewads.gloryregenerativemed.com` → your-vercel-app.vercel.app

## Features

- Side-by-side A/B ad comparison
- Facebook Feed mockups
- Meta compliance checklist
- Easy content updates (hardcoded for now)

## Structure

```
ads-preview/
├── src/
│   └── app/
│       ├── page.tsx       # Main ad preview page
│       ├── layout.tsx     # Root layout
│       └── globals.css    # Tailwind styles
├── public/
│   └── images/           # Ad images
├── package.json
└── next.config.ts
```
