# CLAUDE.md — PS-Grossi

## Project Overview
Personal website for Grossi. Static landing page, no backend.

## Tech Stack (pinned to LTS/stable — March 2026)
- Node.js 24 LTS (Krypton)
- Next.js 16.1 (App Router, Turbopack default)
- React 19.2
- TypeScript 5.9
- Tailwind CSS 4.1
- shadcn/ui (latest)
- Vercel (hosting + deploy)

## Commands
- `npm run dev` → dev server with Turbopack (default in Next 16)
- `npm run build` → production build
- `npm run lint` → ESLint check
- `npx shadcn@latest add [component]` → add shadcn components

## Project Structure
```
/app          → pages, layouts, metadata
/components   → reusable components
/hooks        → custom React hooks
/lib          → utilities, helpers, cn()
/public       → static assets (images, fonts, favicons)
```

## Next.js 16 Rules
- Turbopack is the default bundler — do not configure Webpack
- All request APIs are async: await params, await searchParams, await cookies(), await headers()
- Use "use cache" directive for explicit caching — caching is opt-in, not automatic
- Use proxy.ts instead of middleware.ts (middleware.ts is deprecated)
- React Compiler is available but not enabled by default — do not add manual useMemo/useCallback

## Tailwind CSS 4 Rules
- CSS-first config: use @theme directive in CSS, not tailwind.config.js
- Import via @import "tailwindcss" — no @tailwind directives
- Uses OKLCH colors by default
- Automatic content detection — no content array needed
- Use @utility for custom utilities, @variant for custom variants

## Coding Rules
- Functional components only, never classes
- Server Components by default, add "use client" only when needed
- Use Tailwind utilities exclusively — never write custom CSS files
- Use cn() from lib/utils for conditional classes
- Named exports for components, never default exports
- Keep components small: if it exceeds ~80 lines, split it
- Use semantic HTML (section, nav, main, article, footer)
- All images use next/image with width, height, and alt
- Use next/link for internal navigation, never <a>

## shadcn/ui Rules
- Never edit files inside /components/ui manually
- Compose shadcn primitives into custom components in /components
- If a shadcn component exists for the need, use it — don't build custom
- Install missing components before using: `npx shadcn@latest add [name]`

## Design
- Responsive: mobile-first, use sm/md/lg/xl breakpoints
- Animations: prefer View Transitions (React 19.2), fallback to framer-motion
- Use Tailwind spacing scale — avoid arbitrary values

## Performance
- Minimize "use client" — keep client components as leaf nodes
- Lazy load below-the-fold sections
- Use next/image for all images
- Import individual icons, never entire icon libraries

## Git
- Conventional commits: feat:, fix:, chore:, docs:
- Never commit .env or .env.local
- Branch naming: feature/[name], fix/[name]

## Deploy
- Vercel auto-deploys from main branch
- Preview deploys on PRs

## Important
- Read PLAN.md before making structural changes
- This is a static site — no API routes, no database, no auth
- Do NOT upgrade any dependency beyond the versions listed above without explicit approval

## Language
- Code, comments, and commit messages in English
- Communicate with me in Spanish
