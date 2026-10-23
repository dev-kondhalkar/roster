# Roster

A simple CRM for contacts, companies, deals and activities.

**Stack:** Next.js (App Router) · TypeScript · Tailwind CSS · shadcn/ui

Frontend first. The backend (PostgreSQL + Prisma) comes later.

## Getting started

Requires Node.js 20+.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Adding components

shadcn/ui is already configured (`components.json`). Add components as needed:

```bash
npx shadcn@latest add button
npx shadcn@latest add table input dialog
```

They are copied into `components/ui`.

## Project layout

```
app/          Pages and layouts (App Router)
components/   App components; shadcn components go in components/ui
hooks/        Shared React hooks
lib/          Utilities (cn helper)
```

## Scripts

`npm run dev` · `npm run build` · `npm run typecheck` · `npm run lint`
