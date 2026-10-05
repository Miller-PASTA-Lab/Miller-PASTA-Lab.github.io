
# Miller PASTA Lab — Jekyll Site

This is a Jekyll-based website for the Miller PASTA Lab (Predicting and Analyzing Stars with Time-domain Astronomy). It supports light/dark themes matching the lab logos.

## Local development
```bash
bundle install
bundle exec jekyll serve
```
Open http://localhost:4000 in your browser.

## Deploy to GitHub Pages (organization site)
1. Create a repository in the **Miller-PASTA-Lab** org named **Miller-PASTA-Lab.github.io**.
2. Copy all files from this folder to the repo root and push to `main`.
3. In **Settings → Pages**, choose source **Deploy from a branch** → `main` → `/`.

## Editing content
- **News**: add Markdown files under `_posts/` named `YYYY-MM-DD-title.md`.
- **Team**: edit `_data/team.yml` and add headshots to `assets/team/` using the `photo` filenames. New members: see [ADD_YOURSELF.md](ADD_YOURSELF.md).
- **Projects**: edit `projects.md`.
- **Publications**: edit `publications.md`.

## Assets
- Logos and banner under `assets/img/`.
- Styles and scripts under `assets/css/` and `assets/js/`.
