# Quick GitHub Pages Deployment

## Setup (5 minutes)

1. **Push code to GitHub**
   ```bash
   git add . && git commit -m "Add deployment config" && git push
   ```

2. **Enable GitHub Pages**
   - Go to repo → Settings → Pages
   - Source: **GitHub Actions** → Save

3. **Set Actions permissions**
   - Settings → Actions → General
   - Workflow permissions: **Read and write** → Save

## Deploy

- Push to `main` branch → auto-deploys
- Check Actions tab for status
- Site: `https://asrajavel.github.io/hobby-showcase/`

## Manual deploy
```bash
npm run build && npm run deploy
``` 