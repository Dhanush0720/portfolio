# Dhanush Sudarshanam — Portfolio

Built with Next.js (App Router) + Tailwind CSS v4. The page is styled as a sequence
of executed notebook cells (In [n]: / Out [n]:), fitting an AI/ML student's world.

## Run locally
npm install
npm run dev

Visit http://localhost:3000

## Deploy
Push this folder to a GitHub repo and import it at https://vercel.com/new
No environment variables or extra config needed.

## Customize
- Content (text, projects, skills, certs) lives in app/page.tsx
- Colors / fonts / spacing tokens live in app/globals.css (:root block)
- public/resume.pdf is the downloadable resume - replace the file, keep the filename
- Reusable "notebook cell" section wrapper is in components/Cell.tsx
