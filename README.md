# Gaurav Jain — Portfolio Website

A responsive, static portfolio website created from the supplied resume.

## Run locally
Run `npm install`, copy `.env.example` to `.env`, and update the link values. Then run `./run.sh` and open <http://127.0.0.1:8000>. Press `Ctrl+C` to stop the server. Set `PORT` to use a different port, for example `PORT=8080 ./run.sh`.

Vite loads `.env` values beginning with `VITE_` and embeds them into the generated HTML. These values are public, so do not put secrets in them.

## Publish online
For Netlify, Vercel, GitHub Pages, or another static host, run `npm run build` and set `dist/` as the publish directory. Add the values from `.env.example` to the host's build environment.

Firebase Hosting is configured to publish `dist/`. The GitHub Actions workflows install dependencies, copy `.env.example` to `.env`, then build and deploy on pushes to `main` and pull requests. No GitHub link Variables are required; the Firebase service-account secret must be configured.

## Before publishing
- Confirm the contact and profile URLs in `.env.example` before copying them into `.env` or GitHub repository Variables.
- Consider adding a downloadable PDF resume link if you want visitors to download it.
- Review all project descriptions for client confidentiality.
