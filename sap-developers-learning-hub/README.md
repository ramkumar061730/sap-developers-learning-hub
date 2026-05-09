# 🚀 SAP Learning Hub

A free, structured learning platform for SAP ABAP and SAP CPI — built to grow from Zero to Hero.

---

## 📂 Project Structure

```
sap-learning-hub/
├── index.html          ← Main homepage (course listing)
├── style.css           ← Global styles
├── app.js              ← Search & filter logic
└── abap/
    ├── index.html      ← ABAP course page (all topics)
    ├── abap.css        ← ABAP-specific styles
    ├── topic-basics.html
    ├── topic-ddic.html
    ├── topic-reports.html
    ├── topic-internal-tables.html
    ├── topic-modularization.html
    ├── topic-module-pool.html
    ├── topic-adobe-forms.html
    ├── topic-oop.html
    ├── topic-odata.html
    ├── topic-cds.html
    ├── topic-amdp.html
    └── topic-quickref.html
```

---

## 🖥️ Step-by-Step: Host on GitHub Pages (Free!)

### Step 1 — Create a GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the **"+"** icon → **"New repository"**
3. Name it: `sap-learning-hub` (or anything you like)
4. Set it to **Public** ✅
5. Do NOT check "Add README" (we have our own)
6. Click **"Create repository"**

---

### Step 2 — Open in VS Code

1. Unzip/extract this project folder on your computer
2. Open **VS Code**
3. Go to **File → Open Folder** and select the `sap-learning-hub` folder

---

### Step 3 — Initialize Git & Push to GitHub

Open the **VS Code Terminal** (`Ctrl + `` ` ``) and run these commands:

```bash
# Initialize git
git init

# Add all files
git add .

# First commit
git commit -m "Initial commit: SAP Learning Hub"

# Connect to your GitHub repo (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/sap-learning-hub.git

# Push to GitHub
git branch -M main
git push -u origin main
```

---

### Step 4 — Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **"Settings"** (top menu)
3. Scroll down to **"Pages"** in the left sidebar
4. Under **"Source"**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **"Save"**

⏳ Wait 1–2 minutes. Your site will be live at:
```
https://YOUR_USERNAME.github.io/sap-learning-hub/
```

---

## ✏️ How to Add New Content

### Adding a new topic page:
1. Copy any existing topic file (e.g., `topic-ddic.html`)
2. Rename it (e.g., `topic-smartforms.html`)
3. Edit the content inside
4. Add a link card in `abap/index.html`

### Adding a new course (e.g., SAP CPI):
1. Create a new folder: `cpi/`
2. Add `index.html` and `cpi.css` inside it
3. Add a course card in the main `index.html`

### Publishing updates:
```bash
git add .
git commit -m "Add new topic: SmartForms"
git push
```
GitHub Pages auto-deploys within ~1 minute after every push.

---

## 🔧 Local Development (Preview in VS Code)

Install the **"Live Server"** extension in VS Code:
1. Press `Ctrl+Shift+X` → Search "Live Server" → Install
2. Right-click `index.html` → **"Open with Live Server"**
3. Your browser opens at `http://127.0.0.1:5500` with live reload

---

## 📌 Tips

- Always test locally with Live Server before pushing
- Keep your commit messages descriptive
- Use the `coming-soon` CSS class on course cards that aren't ready yet
- Add more Q&A blocks using the `.qa-block` HTML structure

---

Built with ❤️ for SAP learners. Free Forever.
