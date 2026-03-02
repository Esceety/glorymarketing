# Glory Wellness Nigeria - Digital Brochure

Digital brochure application for Glory Wellness & Regenerative Centre Nigeria.

## Features

- **Digital Reading Experience**: Interactive 6-column brochure (2 pages, 3 columns each)
- **Fullscreen Mode**: Click to expand, press ESC to exit
- **Scroll & Navigate**: Smooth scrolling with visual page indicators
- **PDF Downloads**: 
  - **Reading Version**: Maintains digital reading order (columns 1-6)
  - **Printer Version**: Reordered for tri-fold printing (see layout below)
- **Mobile Responsive**: Columns stack vertically on smaller screens
- **Pure Immersive View**: No header/footer navigation - full brochure experience

## Development

```bash
npm install
npm run dev
```

Runs on port 3002: http://localhost:3002

## Deployment

**Subdomain**: `brochure-ng.gloryregenerativemed.com`

### DNS Setup Required:
Add A record in AWS for `brochure-ng` pointing to Vercel IP.

### Vercel Configuration:
1. Add domain `brochure-ng.gloryregenerativemed.com` in Vercel project settings
2. App auto-deploys from this directory on push to main branch

## Column Layout Explanation

### Digital/Reading Version (Standard Order):
**Page 1 (Front)**:
- Column 1: Main headline, team photo, CTA
- Column 2: Our Other Services
- Column 3: About Us, building photo, contact info

**Page 2 (Back)**:
- Column 4: What Are PRP & Adult Stem Cells
- Column 5: Conditions Treatable
- Column 6: Success Stories, QR code

### Printer Version (Reordered for Tri-Fold):
**Front Page (Printed)**:
```
┌─────────┬─────────┬─────────┐
│ Col 5   │ Col 6   │ Col 1   │
│ (left)  │ (middle)│ (right) │
└─────────┴─────────┴─────────┘
```

**Back Page (Printed)**:
```
┌─────────┬─────────┬─────────┐
│ Col 2   │ Col 3   │ Col 4   │
│ (left)  │ (middle)│ (right) │
└─────────┴─────────┴─────────┘
```

**When folded**: The brochure folds in thirds (right panel folds in first, then left panel folds over), creating the correct reading sequence when opened.

## Image Assets

All images should be placed in `public/images/` directory.

### Required Images & Dimensions:

| Filename | Dimensions | Description |
|----------|-----------|-------------|
| `logo.png` | 400×120px | Glory Wellness logo (transparent background) |
| `team-photo.jpg` | 800×600px | Team of 4 people (yellow frame) |
| `building-exterior.jpg` | 800×600px | Glory Wellness building exterior (Abuja) |
| `prp-tubes.jpg` | 600×450px | PRP tubes showing yellow plasma/red blood layers |
| `scientist-lab.jpg` | 600×450px | Scientist with cell samples (pink/purple trays) |
| `woman-excited.jpg` | 600×400px | Woman showing excitement (cosmetic section) |
| `hip-xray-before.jpg` | 400×400px | Right hip arthritis X-ray (before) |
| `hip-xray-after.jpg` | 400×400px | Right hip arthritis X-ray (after) |
| `qr-code.png` | 400×400px | QR code for before/after gallery |

**Note**: The app currently uses placeholder boxes showing these dimensions. Replace with actual images using these exact filenames.

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Deployed on Vercel

## Print Settings

For best results when printing:
- **Paper Size**: A4 Landscape
- **Margins**: None (borderless)
- **Color**: Full color/high quality
- **Double-Sided**: Yes (long-edge binding)

The print CSS automatically handles:
- Exact color reproduction (`print-color-adjust: exact`)
- Page breaks between front and back
- Hiding UI controls (buttons, indicators)
