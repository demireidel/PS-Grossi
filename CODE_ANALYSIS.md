# Code Analysis: PS-Grossi Repository

**Campaign Website for Rafael Grossi's UN Secretary-General Candidacy**
*Analysis Date: 2026-03-16*

---

## Overall Assessment: 7.5 / 10

A well-architected Next.js 16.1 + React 19 campaign site with strong design and modern tooling, but with notable gaps in testing, accessibility, and several code-level bugs.

---

## Architecture & Tech Stack — 10/10

- **Next.js 16.1** App Router with proper file-based routing
- **React 19.2.4** with hooks-based patterns
- **TypeScript 5.7.3** strict mode — no `any` types, no `@ts-ignore`
- **Tailwind CSS 4.2** + **shadcn/ui** component library
- **OKLCH color space** for perceptually uniform theming
- Clean separation: `app/` (routes), `components/sections/` (page sections), `components/ui/` (primitives), `hooks/`, `lib/`

---

## Bugs & Issues Found

### HIGH Severity

| # | File | Line(s) | Issue |
|---|------|---------|-------|
| 1 | `app/globals.css` | ~125, ~135 | **Ken Burns & slow-pan animations ignore `prefers-reduced-motion`** — users with vestibular disorders may experience discomfort. All CSS animations should be wrapped in `@media (prefers-reduced-motion: no-preference)`. |
| 2 | `hooks/use-toast.ts` | 9 | **TOAST_REMOVE_DELAY = 1,000,000ms (11.5 days)** — toasts effectively never auto-dismiss. Should be 3,000–5,000ms for standard toast UX. |

### MEDIUM Severity

| # | File | Line(s) | Issue |
|---|------|---------|-------|
| 3 | `components/navigation.tsx` | 58 | **Logo `href="#"`** — should be `"/"` for proper home navigation and screen reader semantics. |
| 4 | `components/footer.tsx` | 180, 186, 197 | **Privacy Policy, Terms of Service, Accessibility links use `href="#"`** — broken/placeholder links confuse users and assistive tech. |
| 5 | `hooks/use-in-view.ts` | 5 | **`threshold` missing from useEffect dependency array** — if threshold is passed as a prop and changes, the observer won't update. |
| 6 | `hooks/use-toast.ts` | 182 | **useEffect missing `state` in dependency array** — could cause stale listener closures when toast state changes. |
| 7 | Various sections | Multiple | **Inline `transitionDelay` style calculations in render path** — `style={{ transitionDelay: inView ? \`${index * 100}ms\` : '0ms' }}` recalculates every render. Should use `useMemo` or CSS custom properties. |

### LOW Severity

| # | File | Line(s) | Issue |
|---|------|---------|-------|
| 8 | Multiple sections | Various | **39 instances of arbitrary text sizes** (`text-[10px]`, `text-[11px]`, `text-[150px]`) outside the Tailwind scale — inconsistent with design system. |
| 9 | `components/sections/hero-section.tsx` | 9–11 | **Unnecessary `setLoaded(true)` in useEffect** — could use CSS-only animation trigger instead of React state. |
| 10 | `components/footer.tsx` | 176 | **`new Date().getFullYear()` called on every render** — minor; could be a module-level constant. |

---

## Security — 8/10

**Strengths:**
- CSP headers configured in `next.config.mjs` (lines 14–24)
- `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`
- `Permissions-Policy` restricts camera, mic, geolocation
- External links use `rel="noopener noreferrer"`
- JSON-LD data sanitized via `JSON.stringify()`
- No `.env` files committed

**Concerns:**
- CSP allows `'unsafe-inline'` for both scripts and styles — moderate XSS risk. Consider nonce-based CSP.
- External CDN dependencies (Google Fonts, Vercel Analytics) given broad CSP permissions.

---

## Performance — 9/10

**Strengths:**
- Dynamic imports for below-fold sections (`app/page.tsx` lines 7–13)
- `priority` flag on hero image for LCP optimization
- AVIF/WebP image formats configured
- Passive scroll listeners throughout
- Intersection Observer for lazy animations

**Concerns:**
- **Multiple IntersectionObserver instances per section** — `for-everybody-section.tsx` creates 5 observers; `transparency-section.tsx` creates 6. Could consolidate into a single observer per section.
- **Inline style recalculations** on animation delays (see Bug #7).
- **Static data arrays recreated on every render** — `engagementPrinciples`, `trackRecords`, `deliveryAreas`, etc. defined inside components. Moving to module scope or `useMemo` would prevent unnecessary allocations.

---

## Accessibility — 7/10

**Strengths:**
- Skip-to-content link (`layout.tsx` line 76)
- Semantic HTML with proper heading hierarchy
- ARIA labels on nav elements (`aria-label`, `aria-expanded`, `aria-controls`)
- Escape key closes mobile menu
- Body scroll lock on mobile menu

**Gaps:**
- **No `prefers-reduced-motion` support** — all CSS and JS animations run unconditionally (HIGH priority fix)
- **`href="#"` on multiple interactive elements** — confuses screen readers (navigation logo, footer links)
- **Missing visible focus indicators** on custom hover-effect elements
- **Small text with reduced opacity** (`text-[10px]` at lower contrast) may fail WCAG AA contrast requirements
- No automated accessibility testing configured

---

## Testing — 1/10

- **No test files exist** in the repository
- **No testing framework** configured (no Jest, Vitest, Playwright, or Cypress)
- **No test scripts** in `package.json`
- This is the single biggest quality gap

---

## CI/CD — 2/10

- No GitHub Actions workflow
- No automated linting, type-checking, or build verification
- ESLint configured but not enforced via CI

---

## Documentation — 3/10

- No `README.md` with setup/development instructions
- `lib/types.ts` provides good self-documentation for data structures
- Component naming is clear and descriptive

---

## Code Quality — 9/10

**Strengths:**
- Zero `any` types, zero `@ts-ignore` comments
- Clean component separation and naming
- Shared `useInView` hook across all sections
- Centralized types in `lib/types.ts`
- Reusable `SectionHeader` component

**Improvement Areas:**
- Hardcoded magic numbers (scroll thresholds 50px in nav, 500px in footer) should be constants in `lib/constants.ts`
- Data arrays in section components should live in `lib/data.ts` for reusability and testability
- Duplicated section header pattern category (Section 3 duplicates Section 2 in `PROJECT_RATING.md`)

---

## Recommended Priority Fixes

### Immediate
1. Add `@media (prefers-reduced-motion: reduce)` to pause/disable all animations
2. Fix `TOAST_REMOVE_DELAY` to a reasonable value (e.g., 5000ms)
3. Fix all `href="#"` links to proper destinations (`"/"` for logo, actual pages or `#` removal for footer)
4. Fix `useInView` dependency array to include `threshold`

### Short-term
5. Add smoke tests with Vitest + React Testing Library
6. Set up GitHub Actions for build + lint + type-check
7. Add a `README.md` with setup instructions
8. Consolidate IntersectionObserver instances in large sections

### Medium-term
9. Move data arrays to `lib/data.ts`
10. Extract magic numbers to `lib/constants.ts`
11. Implement nonce-based CSP instead of `'unsafe-inline'`
12. Add automated accessibility testing (axe-core or similar)

---

*Generated by automated code analysis*
