# Deployment Guide: Glory Wellness Brochure Nigeria

## Overview
The digital brochure app is now ready for deployment to the subdomain `brochure-ng.gloryregenerativemed.com`.

---

## Pre-Deployment Checklist

### 1. Image Assets
- [ ] Upload all 9 required images to `brochure-ng/public/images/` directory
- [ ] Verify all images match the specified dimensions (see image specifications below)
- [ ] Test that images load correctly in local development

### 2. DNS Configuration (AWS)
Add an A record in your AWS Route 53 (or DNS provider):

**Record Type**: A  
**Name**: `brochure-ng`  
**Value**: Vercel IP address (get from Vercel after adding domain)  
**TTL**: 300 seconds (or default)

---

## Vercel Deployment Steps

### Step 1: Connect Domain in Vercel
1. Log in to Vercel dashboard
2. Navigate to your `glorymarketing` project
3. Go to **Settings** → **Domains**
4. Click **Add Domain**
5. Enter: `brochure-ng.gloryregenerativemed.com`
6. Vercel will provide DNS instructions (use these for AWS)

### Step 2: Configure Project Settings
Vercel should auto-detect the `brochure-ng` directory as a separate app.

If not, manually configure:
- **Root Directory**: `brochure-ng`
- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`
- **Dev Command**: `npm run dev -- --port 3002`

### Step 3: Deploy
1. Push changes to your main branch (GitHub/GitLab/Bitbucket)
2. Vercel will automatically deploy
3. Or manually deploy via Vercel CLI:
   ```bash
   cd brochure-ng
   vercel --prod
   ```

### Step 4: Verify Deployment
1. Visit `https://brochure-ng.gloryregenerativemed.com`
2. Test fullscreen mode (button in top-right)
3. Test page navigation (scroll or use side indicators)
4. Test PDF downloads (both Reading and Printer versions)
5. Test on mobile devices (columns should stack vertically)

---

## Image Specifications

Upload these images to `brochure-ng/public/images/`:

| Filename | Dimensions | Notes |
|----------|-----------|-------|
| `logo.png` | 400×120px | Transparent background |
| `team-photo.jpg` | 800×600px | Team photo (yellow frame) |
| `building-exterior.jpg` | 800×600px | Glory Wellness building |
| `prp-tubes.jpg` | 600×450px | PRP tubes with layers |
| `scientist-lab.jpg` | 600×450px | Lab scientist with samples |
| `woman-excited.jpg` | 600×400px | Woman with excited expression |
| `hip-xray-before.jpg` | 400×400px | Hip X-ray before treatment |
| `hip-xray-after.jpg` | 400×400px | Hip X-ray after treatment |
| `qr-code.png` | 400×400px | QR code for gallery |

**Important**: Use exact filenames as listed above (case-sensitive).

---

## Testing the Printer Version

### To Test Print Layout:
1. Open brochure in browser
2. Click **"Download PDF"** → **"Printer Version"**
3. In print dialog:
   - Select **A4 Landscape**
   - Enable **Print backgrounds**
   - Set margins to **None**
   - Enable **Double-sided** (long-edge binding)
4. Save as PDF to review layout

### Expected Printer Layout:
**Front Page**: Column 5 | Column 6 | Column 1  
**Back Page**: Column 2 | Column 3 | Column 4

When printed double-sided and folded in thirds (right panel in, then left panel over), the brochure will read in the correct order.

---

## Troubleshooting

### Issue: Images Not Loading
- Verify images are in `public/images/` directory
- Check filenames match exactly (case-sensitive)
- Clear browser cache and hard refresh

### Issue: Printer Version Doesn't Work
- Ensure **Print backgrounds** is enabled in print settings
- Try different browsers (Chrome recommended for printing)
- Check browser console for errors

### Issue: Fullscreen Not Working
- Ensure you're using HTTPS (required for fullscreen API)
- Try pressing F11 as alternative

### Issue: Domain Not Resolving
- Wait 5-30 minutes for DNS propagation
- Verify A record is correctly configured in AWS
- Use `nslookup brochure-ng.gloryregenerativemed.com` to debug

---

## Local Development

To run locally:
```bash
cd brochure-ng
npm install
npm run dev
```

App runs on: http://localhost:3002

---

## Production URLs

- **Public Brochure**: https://brochure-ng.gloryregenerativemed.com
- **Main Site**: https://gloryregenerativemed.com
- **Nigeria Funnel**: https://gloryregenerativemed.com/regenerative-nigeria

---

## Support Contacts

For technical issues:
- Check Vercel deployment logs
- Review browser console errors
- Check Next.js build output

For content updates:
- Edit `brochure-ng/src/app/page.tsx`
- Update image files in `public/images/`
- Push to main branch for auto-deploy

---

## Next Steps After Deployment

1. **QR Code**: Generate QR code pointing to before/after gallery and replace `qr-code.png`
2. **Analytics**: Consider adding tracking (Meta Pixel, Google Analytics) if needed
3. **Print Test**: Order a physical print test to verify tri-fold layout
4. **SEO**: Add custom metadata if needed for search visibility
5. **Backup**: Save printer-ready PDF version for offline distribution

---

**Date Created**: March 1, 2026  
**Version**: 1.0.0  
**Last Updated**: March 1, 2026
