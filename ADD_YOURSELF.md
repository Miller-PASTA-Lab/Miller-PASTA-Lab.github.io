# Adding yourself to the PASTA Lab People page

Welcome to the group! Please add yourself to the website by opening a pull request (PR). You only need to do two things: **upload a photo** and **add a short entry to one text file**.

## 1. Get a copy of the repo

Either use the GitHub web interface (easiest, no software needed) or work locally.

**Web interface:** go to https://github.com/Miller-PASTA-Lab/Miller-PASTA-Lab.github.io, click **Fork** (top right), and make the changes below in your fork.

**Locally:**
```bash
git clone https://github.com/Miller-PASTA-Lab/Miller-PASTA-Lab.github.io.git
cd Miller-PASTA-Lab.github.io
git checkout -b add-<your-name>      # e.g. add-jane-doe
```

## 2. Upload your photo

- Put your headshot in the folder **`assets/team/`**.
- Name it `firstname-lastname.jpg` (lowercase, hyphen between names, e.g. `jane-doe.jpg`). `.png` and `.jpeg` also work.
- Use a roughly square, head-and-shoulders photo, ideally under 1 MB.

On the web: open `assets/team/` → **Add file → Upload files**.

## 3. Add your text entry

Open **`_data/team.yml`**. Add your entry at the **end of the `current:` list** (just above the blank line and `former:`), copying the format of the entries around it:

```yaml
  - name: Jane Doe
    role: PhD student
    photo: jane-doe.jpg
    bio: Primary focus is ... (2-3 sentences describing what you are working on)
    ads: https://ui.adsabs.harvard.edu/...
    github: https://github.com/your-username
```

- `name`, `role`, `photo`, and **`bio`** (the description of what you are working on) are required.
- `photo` must exactly match the filename you uploaded in step 2.
- `ads` (link to your publications) and `github` are optional; delete those lines if you don't have them.
- Indentation matters in YAML: use spaces (no tabs) and line up with the existing entries. If your bio contains a colon (`:`), wrap the whole bio in double quotes.

## 4. Open the pull request

**Web interface:** after committing your changes to your fork, click **Contribute → Open pull request**.

**Locally:**
```bash
git add assets/team/jane-doe.jpg _data/team.yml
git commit -m "Add Jane Doe to team page"
git push -u origin add-jane-doe
```
Then click the **Compare & pull request** link GitHub shows, and submit it.

Adam will review and merge your PR, and the site updates automatically within a few minutes.

## Optional: preview locally

```bash
bundle install
bundle exec jekyll serve
```
Then open http://localhost:4000/team/.
