# 📄 Copyright Information Page  
**Official licensing and rights reference for photographs by Patrick Österlund**

This repository contains a single‑page, bilingual (Swedish/English) copyright and licensing portal.  
All photographs linking to this URL use it as their authoritative copyright notice.

The page is intentionally lightweight, fast, and mobile‑friendly, with a polished GitHub‑inspired UI and a custom 3‑state theme toggle (Light / Auto / Dark).

---

## 🎯 Purpose

This page exists to:

- Provide a clear, legally unambiguous copyright statement  
- Explain usage restrictions for all linked photographs  
- Offer a contact form for licensing requests  
- Display a QR code for quick access from printed or digital media  
- Serve as a stable reference URL embedded in EXIF metadata  

It is not a portfolio — it is a **rights and licensing hub**.

---

## ✨ Features

### 🔒 Bilingual Copyright Notice  
Available in **Swedish** and **English**, covering:

- Ownership  
- Usage restrictions  
- AI dataset prohibition  
- NFT/blockchain prohibition  
- No scraping or mass‑downloading  
- No derivative works without permission  

Language switching is handled via a smooth tabbed interface.

---

### 📬 Contact & Licensing Form  
Each language section includes a Formspree‑powered contact form with:

- AJAX submission  
- Success/error messages  
- Spam‑prevention honeypot field  

---

### 📧 Triple‑Layer Email Obfuscation  
To reduce spam, the public email address is:

- Base64‑encoded  
- Split into multiple parts  
- Reassembled client‑side  
- Displayed in a non‑machine‑readable format (`[at]`)

---

### 🔳 QR Code Integration  
A QR code is displayed alongside the contact form for:

- Quick access from printed materials  
- Easy scanning from mobile devices  

---

### 🌗 3‑State Theme Toggle  
A custom‑built, animated theme switcher:

- **Light mode** — forced light  
- **Auto mode** — follows system theme  
- **Dark mode** — forced dark  

Includes:

- Sliding 3‑position thumb  
- Morphing icons (sun → balance → moon)  
- LocalStorage persistence  
- Live reaction to OS theme changes  
- Flash‑free load via inline head script  

---

### 🎨 GitHub‑Inspired UI  
The design includes:

- GitHub‑style header bar  
- Semi‑transparent “midnight” content panel  
- Rounded tab bar  
- Soft shadows and blur effects  
- Fully responsive layout  

---

## 🧩 Technical Summary

- **HTML**: Single static page  
- **CSS**: Custom Midnight theme + light mode + auto mode  
- **JavaScript**:  
  - Dynamic year  
  - Email obfuscation  
  - Tab switching  
  - AJAX form submission  
  - 3‑state theme system  
- **Hosting**: GitHub Pages  
- **Assets**: QR code, favicon set  

No frameworks, no dependencies — everything is pure HTML/CSS/JS.

---

## 📦 Installation / Deployment

This site is designed for **GitHub Pages**.

### Quick Start

1. Clone or fork the repository  
2. Ensure `index.html`, `style.css`, and `script.js` are in the root  
3. Push to GitHub  
4. Enable GitHub Pages in repository settings:
   - Go to **Settings** → **Pages**  
   - Source: Deploy from branch  
   - Branch: `main` (or `master`), root folder  

### Deployment URLs

**Option 1: User Pages (Recommended)**  
Rename repo to `b0red.github.io` (or `<username>.github.io`)  
Page will be available at: `https://b0red.github.io/`

**Option 2: Project Pages**  
Keep current repo name (e.g., `copyright`)  
Page will be available at: `https://b0red.github.io/copyright/`  
⚠️ Note: Absolute paths in HTML/CSS/JS need adjustment for project subdirectories.

---

## 🌐 Browser Support

- **Modern browsers**: Chrome, Firefox, Safari, Edge (2020+)  
- **Mobile**: iOS 12+, Android 8+ (full feature support)  
- **Features used**: CSS Grid/Flexbox, CSS variables, Fetch API, LocalStorage, matchMedia  
- **No polyfills required** — site degrades gracefully in older browsers  

---

## 🔒 Security & Privacy

- **Static site**: No server-side logic, no database  
- **Form submission**: Uses [Formspree](https://formspree.io) (third-party, encrypted)  
- **Email obfuscation**: Triple-layer Base64 encoding to reduce spam crawlers  
- **Theme preference**: Stored in browser's `localStorage` only (no tracking)  
- **No analytics, no tracking, no cookies** — this is a pure copyright reference page  

---

## ⚖️ Legal Disclaimer

This page provides copyright and licensing information for photographs created by **Patrick Österlund**.  
It does **not** grant any rights or permissions unless explicitly stated.

- All photographs are protected under international copyright law  
- No reproduction, redistribution, or derivative works are permitted  
- No use is allowed in AI training datasets or machine learning models  
- No use is allowed for NFTs or blockchain‑based assets  
- No scraping, automated downloading, or bulk collection is permitted  
- Licensing requests must be submitted via the contact form  

This page does not constitute legal advice.

---

## 🕒 Version History

### **v1.4 — 2026‑06‑03**
- Fixed theme FOUC via inline anti‑flash script in `<head>`  
- Removed dead `applyFade` / `.theme-fade` mechanism  
- Dynamic `meta[name="theme-color"]` update on theme change  
- CSS tooltip on theme toggle (Light / Automatic / Dark)  
- Title attributes on all images  
- Fixed `.tab:hover` overriding active tab styling  
- Sticky header bar  
- Fixed 404 page: theme support, favicons, CSS variables  
- Removed non‑existent iOS splash screen references  
- Cleaned up `_config.yml` (removed unused remote theme)  
- Fixed `site.webmanifest`: correct `start_url`, `scope`, and favicon MIME type  

### **v1.3 — 2026‑06‑03**
- Added 3‑state theme toggle (Light / Auto / Dark)  
- Added morphing icons (sun → balance → moon)  
- Added slider with subtle markers  
- Improved header layout with flexbox  
- Added README, legal disclaimer, and project documentation  

### **v1.2 — 2026‑06‑03**
- Added light/dark theme toggle  
- Added system auto mode  
- Added iOS splash screens *(removed in v1.4 — files never existed)*  

### **v1.1 — 2026‑06‑02**
- Added QR code section  
- Added AJAX form submission  
- Added email obfuscation  
- Added bilingual content  

### **v1.0 — 2026‑06‑02**
- Initial release  
- Midnight theme  
- GitHub‑style header/footer  
- Tabbed Swedish/English layout  

---

## 📫 Contact

For licensing inquiries, please use the contact form on the page.  
For repository issues or suggestions, feel free to open an issue.

