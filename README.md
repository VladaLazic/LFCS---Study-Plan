# LFCS Study Plan

![LFCS](https://img.shields.io/badge/LFCS-Linux%20Foundation-01696f?style=flat-square)
![React](https://img.shields.io/badge/React-18-61dafb?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-5-646cff?style=flat-square&logo=vite)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

An interactive 12-week study plan for the **Linux Foundation Certified Sysadmin (LFCS)** exam, built with React + Vite. Track your progress day by day, browse key commands, and access curated resources — all in your browser.

---

## What Is This?

| Exam | LFCS — Linux Foundation Certified Sysadmin |
|---|---|
| Duration | 2 hours |
| Format | Online, proctored, performance-based (command-line tasks) |
| Pass mark | 66% |
| Validity | 3 years |

The plan covers all 5 official domains:

| Domain | Weight |
|---|---|
| Operations & Deployment | 25% |
| Networking | 25% |
| Essential Commands | 20% |
| Storage | 20% |
| Users & Groups | 10% |

---

## Getting Started

```bash
git clone https://github.com/<your-username>/lfcs-study-plan.git
cd lfcs-study-plan
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Project Structure

```
lfcs-study-plan/
├── index.html                   ← Entry HTML (Vite)
├── vite.config.js               ← Vite config (base path for GitHub Pages)
├── package.json
├── eslint.config.js
├── .gitignore
├── .github/
│   └── workflows/
│       └── deploy.yml           ← GitHub Actions — auto-deploy to GitHub Pages
├── public/
│   └── favicon.svg              ← Inline SVG favicon
└── src/
    ├── main.jsx                 ← React entry point
    ├── App.jsx                  ← Root component, view routing, modal state
    ├── data/
    │   └── studyPlan.js         ← All 12 weeks × 7 days + resources + exam info
    ├── hooks/
    │   └── useProgress.js       ← Progress state (sessionStorage), dark mode
    ├── components/
    │   ├── Header.jsx + .css    ← Sticky nav, view switcher, dark mode toggle
    │   ├── DomainBadge.jsx      ← Colour-coded domain weight pills
    │   ├── ProgressBar.jsx + .css ← Overall completion progress bar
    │   ├── WeekCard.jsx + .css  ← Expandable week row with day checklist
    │   ├── DayModal.jsx + .css  ← Full-screen day detail: subtopics + commands
    │   └── ResourcesPanel.jsx + .css ← Grouped resource links
    └── styles/
        └── global.css           ← Design tokens (Nexus palette), base stylesheet
```

---

## 12-Week Plan at a Glance

| Week | Domain | Theme |
|---|---|---|
| 1 | Essential Commands | Git, Services, Performance, SSL, Disk |
| 2 | Operations & Deployment | Kernel params, Processes, cron, Packages, Recovery |
| 3 | Operations & Deployment | VMs (libvirt), Docker, Podman, SELinux |
| 4 | Networking | IPv4/IPv6, DNS, Time sync, SSH |
| 5 | Networking | Firewalld, nftables, NAT, Routing, Bridges, Proxy |
| 6 | Storage | LVM, VFS, Swap, Storage monitoring |
| 7 | Storage | Filesystems, NFS, CIFS, iSCSI, autofs |
| 8 | Users & Groups | Users, Profiles, Limits, ACLs, LDAP |
| 9 | Mixed (Ops + Net) | Advanced scenarios + Timed lab #1 |
| 10 | Mixed (Storage + Cmd) | Advanced scenarios + Timed lab #2 |
| 11 | All domains | Full exam simulation ×2 + targeted revision |
| 12 | All domains | Speed drills + Exam day |

---

## Features

- ✅ **Progress tracking** — check off individual days or entire weeks
- 🌙 **Dark mode** — auto-detects system preference, toggle manually
- 📱 **Responsive** — works on mobile from 375px
- 💻 **Command reference** — every day shows key Linux commands
- 📚 **Resource panel** — 12 curated free resources, organised by type
- 🔒 **No auth needed** — fully static, works offline after first load

---

## Customising

- **Add or edit days**: `src/data/studyPlan.js` — each day is a plain JS object
- **Add resources**: append to the `RESOURCES` array in `studyPlan.js`
- **Change colours**: edit CSS custom properties in `src/styles/global.css`
- **Deploy to GitHub Pages**: push to `main` — the GitHub Actions workflow handles it

### GitHub Pages Setup (one-time)

1. In `vite.config.js`, set `base: '/lfcs-study-plan/'` (match your repo name exactly)
2. In your repo: **Settings → Pages → Source → GitHub Actions**
3. Push to `main` — done ✓

Your app will be live at: `https://<username>.github.io/lfcs-study-plan/`

---

## Exam Registration

Register at [training.linuxfoundation.org/certification/linux-foundation-certified-sysadmin-lfcs/](https://training.linuxfoundation.org/certification/linux-foundation-certified-sysadmin-lfcs/)

---

## License

MIT
