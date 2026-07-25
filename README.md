# CockroachHub — CJP Helpline

Emergency resource hub for student protesters in India. Works offline. Zero data collection.

## Quick Start
\`\`\`bash
docker compose up -d
cd backend && uv sync && uvicorn app.main:app --reload
cd frontend && npm install && npm run dev
\`\`\`

## Features
- Emergency contacts (verified legal aid, medical, helplines)
- Live field feed with real-time alerts
- Know Your Rights (BNSS-corrected)
- First aid guide (tear gas, lathi charge, pepper spray)
- Fact check & rumor busting
- SOS emergency broadcast with GPS
- Safe zones with directions
- Bail & legal procedure guide
- Protest checklist (localStorage persisted)
- Mental health support directory
- Aid & accommodation
- Offline-first PWA
- Stealth PIN mode
- Auto-erase timer
- Dark/light mode, English/Hindi

## Tech Stack
- Frontend: React 19 + Vite 6 + Tailwind 3 + PWA
- Backend: FastAPI + SQLAlchemy async + PostgreSQL 17
- Auth: JWT + bcrypt, rate-limited login
- Infrastructure: Docker Compose (PostgreSQL)

## Default Admin
| Email | Password |
|---|---|
| admin@helpline.local | admin123 |
