@AGENTS.md

# mathware-web

Portfolio hub site for mathware.dev. Other portfolio projects live in their own folders and repositories; this site introduces and links to them.

## Working style (learning mode)

The user is a beginner in web development (some Python/JS, new to TypeScript) and is learning through this project.

- Proceed step by step. Before each step, briefly explain what we are doing and why.
- The user runs commands, configures dashboards, and writes simple code themselves. Do not do it for them; give hints when they get stuck.
- Explain new concepts in simple terms.
- End each step with 1–2 comprehension questions, and only move on when the user says "다음" (next).

## Language

- Talk with the user in Korean.
- Write documents (README, docs, CLAUDE.md, etc.), code comments, and commit messages in English by default.

## Stack

Next.js (App Router) + TypeScript + Tailwind, Better Auth, Neon Postgres + Drizzle ORM, deployed on Vercel, domain mathware.dev (Cloudflare DNS).

## Plan

1. ✅ Dev tools (Node 24 LTS via Homebrew, Git, gh)
2. ✅ Git identity + GitHub connection (gh CLI, HTTPS, noreply email, account euijin-math)
3. ⏳ Create Next.js project (done) → commit + push to GitHub
4. Home page + portfolio structure (entries can be added one at a time later)
5. Neon connection + Drizzle setup (.env, ORM)
6. Better Auth setup + migrations
7. Sign up / sign in / sign out UI
8. Deploy to Vercel
9. Connect mathware.dev via Cloudflare DNS

## Cautions

- Never touch the Zoho Mail records (MX, SPF, DKIM, DMARC) in Cloudflare DNS.
- Secrets (database URL, auth secret, etc.) go only in `.env*` files. `.gitignore` excludes `.env*`, so they are never committed.
- The project lives on an external SSD (`/Volumes/EJ`, APFS); the disk must be connected.
