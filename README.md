# LFCS Study Plan

![LFCS](https://img.shields.io/badge/LFCS-Linux%20Foundation-01696f?style=flat-square)
![React](https://img.shields.io/badge/React-18-61dafb?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-5-646cff?style=flat-square&logo=vite)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

An interactive **12-week study plan** for the [Linux Foundation Certified Sysadmin (LFCS)](https://training.linuxfoundation.org/certification/linux-foundation-certified-sysadmin-lfcs/) exam.

Track your progress day by day, review key Linux commands, and browse curated study resources — all in your browser.

---

## Live app

**https://vladalazic.github.io/LFCS---Study-Plan/**

No install or account required. Progress is saved in your browser (session storage).

---

## About the exam

| | |
|---|---|
| **Exam** | LFCS — Linux Foundation Certified Sysadmin |
| **Duration** | 2 hours |
| **Format** | Online, proctored, performance-based (command-line tasks) |
| **Pass mark** | 66% |
| **Validity** | 3 years |

### Domains covered

| Domain | Weight |
|---|---|
| Operations & Deployment | 25% |
| Networking | 25% |
| Essential Commands | 20% |
| Storage | 20% |
| Users & Groups | 10% |

---

## Features

- **Progress tracking** — check off individual days or entire weeks
- **Command reference** — every day lists key commands to practice
- **Resource panel** — 13 curated free resources, organised by type
- **Dark mode** — follows system preference, toggle anytime
- **Responsive** — works on mobile from 375px up
- **Offline-friendly** — static site, works after the first load

---

## 12-week overview

| Week | Domain | Theme |
|---|---|---|
| 1 | Essential Commands | Git, services, performance, SSL, disk |
| 2 | Operations & Deployment | Kernel params, processes, cron, packages, recovery |
| 3 | Operations & Deployment | VMs (libvirt), Docker, Podman, SELinux |
| 4 | Networking | IPv4/IPv6, DNS, time sync, SSH |
| 5 | Networking | firewalld, nftables, NAT, routing, bridges, proxy |
| 6 | Storage | LVM, VFS, swap, storage monitoring |
| 7 | Storage | Filesystems, NFS, CIFS, iSCSI, autofs |
| 8 | Users & Groups | Users, profiles, limits, ACLs, LDAP |
| 9 | Mixed (Ops + Net) | Advanced scenarios + timed lab #1 |
| 10 | Mixed (Storage + Cmd) | Advanced scenarios + timed lab #2 |
| 11 | All domains | Full exam simulation ×2 + targeted revision |
| 12 | All domains | Speed drills + exam day |

---

## Run locally

```bash
git clone https://github.com/VladaLazic/LFCS---Study-Plan.git
cd LFCS---Study-Plan
npm install
npm run dev
```

Open **http://localhost:5173/LFCS---Study-Plan/** in your browser.

### Build for production

```bash
npm run build
npm run preview
```

---

## Project structure

```
LFCS---Study-Plan/
├── .github/workflows/deploy.yml   GitHub Actions — auto-deploy to Pages
├── public/                        Static assets (favicon, PDF notes)
├── src/
│   ├── data/studyPlan.js          12 weeks × 7 days, resources, exam info
│   ├── hooks/useProgress.js       Progress state + dark mode
│   ├── components/                UI components
│   └── styles/global.css          Design tokens and base styles
├── index.html
├── vite.config.js
└── package.json
```

---

## Customising

| Goal | File |
|---|---|
| Add or edit study days | `src/data/studyPlan.js` |
| Add resources | `RESOURCES` array in `studyPlan.js` |
| Change colours / theme | `src/styles/global.css` |

Push to `main` to redeploy — GitHub Actions handles the rest.

---

## Exam registration

Register at the [Linux Foundation LFCS certification page](https://training.linuxfoundation.org/certification/linux-foundation-certified-sysadmin-lfcs/).

---

## License

MIT
