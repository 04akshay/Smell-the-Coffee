# Smell the Coffee — Knowledge Base

> **Maintainers:** Update this document every time a page, component, or user flow changes. Push the updated file as part of the same commit.
>
> **Audience:** Human contributors and AI agents working on this codebase.

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Tech Stack & Architecture](#2-tech-stack--architecture)
3. [Design System](#3-design-system)
4. [Navigation & Shell](#4-navigation--shell)
5. [Pages & Features](#5-pages--features)
   - [Home](#51-home-)
   - [Coffee Finder](#52-coffee-finder-finder)
   - [Cafe Detail](#53-cafe-detail-cafeslug)
   - [Bean Database](#54-bean-database-bean-database)
   - [Bean Detail](#55-bean-detail-bean-databaseslug)
   - [Brewing Guides](#56-brewing-guides-brewing-guide)
   - [V60 Brew Guide Detail](#57-v60-brew-guide-detail-brewing-guidev60)
   - [Events](#58-events-events)
   - [Community Hub](#59-community-hub-community)
   - [Passport](#510-passport-passport)
6. [End-to-End User Flows](#6-end-to-end-user-flows)
7. [Component Reference](#7-component-reference)
8. [Agent-Specific Guidelines](#8-agent-specific-guidelines)
9. [Changelog](#9-changelog)

---

## 1. Project Overview

**Smell the Coffee (STC)** is a Delhi-first specialty coffee culture platform. It is a personal side project targeting Gen Z and millennials who want to explore, document, and level up their specialty coffee journey.

**Core value propositions:**
- Discover specialty cafes in Delhi with rich filtering and vibe scoring
- Build a personal Coffee Passport — track visits, earn stamps, complete trails
- Learn brewing techniques and bean provenance through curated guides
- Connect with a local specialty coffee community (events, editorials, live pulse)

**Repository:** `git@github.com:04akshay/Smell-the-Coffee.git`  
**Branch:** `main`  
**Working directory:** `/Users/akshaysingh/STC/web`  
**Framework:** Next.js 16 App Router

---

## 2. Tech Stack & Architecture

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router, TypeScript) |
| Styling | Tailwind CSS v4 (`@theme` CSS block — no JS config) |
| Animation | Framer Motion, GSAP |
| Icons | Material Symbols (via `<Icon name="..." />` component) |
| Fonts | Hanken Grotesk (body), Plus Jakarta Sans (display) |
| Images | `next/image` with `lh3.googleusercontent.com` remote pattern |
| Navigation | `next/link` for client-side routing |
| Routing | Next.js App Router file-based routing |

**Key architectural decisions:**
- `TopNav` and `BottomNav` are **client components** using `usePathname()` — mounted in the root layout
- Dark mode is **disabled** via `@custom-variant dark (&:where(.dark, .dark *))` in `globals.css` — OS preference does not trigger it
- The root layout adds `pt-16 md:pt-0` body padding to offset the fixed mobile top bar
- `Community` page has a **page-local footer** (`src/components/community/footer.tsx`) — there is no global footer, because the fixed-height finder layout cannot accommodate one

**File structure (key paths):**

```
src/
  lib/
    cafes.ts                         — Shared cafe dataset (CafeRecord[]) used by Home, Finder, and Cafe Detail
    beans.ts                         — Shared bean dataset (BeanRecord[]) used by Bean Database listing and Bean Detail; pouringSpots reference real cafe slugs from cafes.ts
    brewing-guides.ts                — Shared brew method dataset (BrewGuideRecord[]) used by Brewing Guide listing and detail pages
    passport-stamps.ts               — localStorage-backed stamp persistence (isCafeStamped, addCafeStamp, subscribeToStamps)
  app/
    layout.tsx                        — Root layout (fonts, nav, body padding)
    globals.css                       — Tailwind v4 @theme tokens + custom utilities
    page.tsx                          — Home
    finder/page.tsx                   — Coffee Finder (server shell; delegates to FinderView)
    cafe/roastery-coffee-house/page.tsx — Cafe detail (static route, reads from lib/cafes.ts)
    cafe/[slug]/page.tsx              — Cafe detail (dynamic route for all other cafes; notFound() on miss)
    bean-database/page.tsx            — Bean Database listing (server shell; delegates to BeanDatabaseView)
    bean-database/baba-budangiri/page.tsx — Bean detail (static route, reads from lib/beans.ts)
    bean-database/[slug]/page.tsx     — Bean detail (dynamic route for the other 9 beans; notFound() on miss)
    brewing-guide/page.tsx            — Brewing Guide listing (server shell; delegates to BrewingGuideView)
    brewing-guide/v60/page.tsx        — V60 guide detail (static route, reads from lib/brewing-guides.ts)
    brewing-guide/[slug]/page.tsx     — Guide detail (dynamic route for AeroPress, Chemex, French Press; notFound() on miss)
    events/page.tsx                   — Event Roster
    community/page.tsx                — Community Hub
    passport/page.tsx                 — Coffee Passport
  components/
    icon.tsx                          — Material Symbols wrapper
    top-nav.tsx                       — Desktop sticky nav (client)
    bottom-nav.tsx                    — Mobile 7-tab horizontal scrollable nav (client)
    mobile-top-bar.tsx                — Mobile header (brand + icons, md:hidden)
    hero-search.tsx                   — Search form submits to /finder?q=... (client)
    trending-cafes.tsx                — Reads featured/small cafes from lib/cafes.ts, all linked
    finder/
      finder-view.tsx                 — Client component: owns filter/sort/search state, renders grid + empty state
      empty-state.tsx                 — FinderEmptyState: zero-results screen (illustration, tilt interaction, reset CTAs, quick-vibe chips)
      sidebar-filters.tsx             — Checkbox filter groups (controlled by finder-view, client)
      cafe-card.tsx                   — Grid card with hover overlay
    bean-database/
      bean-database-view.tsx          — Client component: owns search state for the whole page body (hero through index)
    brewing/
      brewing-guide-view.tsx          — Client component: owns search state, renders featured + grid + empty state
    cafe/
      cafe-hero.tsx
      cafe-insights.tsx
      cafe-gallery.tsx
      cafe-location-passport.tsx       — Client; renders Stamp CTA + mounts PassportStampFlow
      passport-stamp-flow.tsx          — Client; Verify Location → Digital Stamp Ritual → Passport Stamped modal
    bean-database/
      education-hero.tsx
      search-filter-bar.tsx
      regional-favorites.tsx
      flavor-notes-grid.tsx
      bean-list.tsx
    bean-detail/
      bean-hero.tsx
      radar-chart.tsx                 — Interactive SVG radar chart (client)
      info-card.tsx
      pouring-now-list.tsx
      sourced-by-list.tsx
    brewing/
      search-filter-bar.tsx
      featured-guide.tsx
      guide-card.tsx
      step-timeline.tsx               — 3-column CSS grid timeline
    events/
      featured-event.tsx
      session-card.tsx
    community/
      status-banner.tsx
      vibe-card.tsx
      editorial-item.tsx
      throwdown-roster.tsx
      footer.tsx                      — Page-local dark footer
    passport/
      profile-header.tsx
      trophy-case.tsx
      active-trails.tsx
      stat-card.tsx
      friend-board.tsx
      recent-activity.tsx
      next-stop-card.tsx
```

---

## 3. Design System

All design tokens live in `src/app/globals.css` inside a Tailwind v4 `@theme {}` block. **There is no `tailwind.config.js`.**

### Color Tokens

| Token | Usage |
|---|---|
| `cream-foam` | Primary background (off-white) |
| `roasted-espresso` | Primary text, headings |
| `oat-milk` | Secondary background, input fills |
| `sage-leaf` | Accent / active state / CTA |
| `bean-origin-gold` | Ratings, highlights, badges |
| `on-surface-variant` | Muted / secondary text |
| `tertiary` | Subtle borders (`border-tertiary/10`) |
| `surface-container` | Card backgrounds |
| `primary` | Section headings (community) |

### Typography Tokens

Fonts applied via Tailwind utility classes — always pair the `font-*` class (which sets `font-family`) with a `text-*` class (which sets `font-size` + `line-height`):

| Class | Role |
|---|---|
| `font-display-lg` + `text-display-lg` | Hero headings (desktop) |
| `font-display-lg-mobile` + `text-display-lg-mobile` | Hero headings (mobile) |
| `font-headline-md` + `text-headline-md` | Section headings |
| `font-headline-sm` + `text-headline-sm` | Sub-section headings |
| `font-body-lg` + `text-body-lg` | Lead body text |
| `font-body-md` + `text-body-md` | Body text, nav links |
| `font-label-md` + `text-label-md` | Labels, metadata |
| `font-label-caps` + `text-label-caps` | Uppercase micro-labels |

### Spacing Tokens

| Token | Usage |
|---|---|
| `px-margin-desktop` | Page horizontal padding (desktop) |
| `px-margin-mobile` | Page horizontal padding (mobile) |
| `gap-section-gap` | Top-level section spacing |
| `gap-gutter` | Card/grid gutters |
| `gap-base` | Small element spacing |
| `max-w-container-max` | Maximum page content width |

### Custom CSS Utilities

| Utility | Description |
|---|---|
| `.masonry-grid` | CSS masonry layout for Community vibe cards |
| `.ambient-shadow` | Warm diffuse box-shadow |
| `.glass-panel` | Frosted glass effect |
| `.passport-stamp` | Circular stamp badge styling |
| `.timer-glow` | Pulsing glow for brew timer FAB |
| `.radar-point` | Pulsing data point on the flavor radar chart |
| `.hide-scrollbar` | Hide scrollbar while preserving scroll |
| `.noise-bg` | Subtle noise texture overlay (Home page) |
| `.coffee-pattern` | Repeating coffee-bean SVG pattern overlay on `surface`, used behind Finder's empty state |
| `.map-texture` | Dotted radial-gradient pattern, used behind the pulsing location marker in the Stamp flow's Verify Location step |
| `.holographic-shimmer` | Animated gold/oat-milk gradient sweep, used on the Digital Stamp Ritual seal once tapped |
| `.confetti-bean` / `@keyframes bean-float` | Falling bean particles on the Passport Stamped success screen |

### Icons

Use `<Icon name="<material-symbol-name>" />` for all icons. Add `filled` prop for filled variant. Size via `className="text-[16px]"` pattern.

---

## 4. Navigation & Shell

### Desktop — `TopNav` (`src/components/top-nav.tsx`)

- Sticky, `height: h-20`, `z-50`, cream-foam background
- Hidden on mobile (`hidden md:flex`)
- Shows a search input inline when on `/finder`; shows a search icon button elsewhere
- Active route: bottom border + bold weight
- Right-side icons: search (links to `/finder`), notifications (button), profile (button)

**Nav links:**

| Label | Route |
|---|---|
| Home | `/` |
| Coffee Finder | `/finder` |
| Bean Database | `/bean-database` |
| Brewing Guide | `/brewing-guide` |
| Events | `/events` |
| Community | `/community` |
| Passport | `/passport` |

### Mobile — `BottomNav` (`src/components/bottom-nav.tsx`)

- Fixed to bottom, `md:hidden`
- 7 tabs displayed as a **horizontally scrollable row** (`overflow-x-auto hide-scrollbar`) — tabs do not shrink below their natural width
- Same 7 routes as desktop, each with a Material Symbol icon + label
- Active tab: filled icon + sage-leaf color

### Mobile — `MobileTopBar` (`src/components/mobile-top-bar.tsx`)

- Shown only on mobile (`md:hidden`), fixed to top
- Contains brand name "Smell the Coffee" + search icon + bell icon
- Root layout applies `pt-16` on mobile to prevent content going under it

---

## 5. Pages & Features

### 5.1 Home (`/`)

**Purpose:** Entry point. Lets users search for cafes and see what's trending.

**Components:**
- `HeroSearch` — large headline + search form (client). Submitting routes to `/finder?q=<query>`.
- `TrendingCafes` — featured + 2 small cards, all sourced from `lib/cafes.ts` and linked to `/cafe/[slug]`

**User flow:**
1. User lands on `/`
2. Sees hero with search prompt
3. Types a query and submits (or presses Enter) → routes to `/finder?q=<query>`, which pre-filters the grid by cafe name/roaster/tags
4. Or browses trending cafes; clicking a card navigates to its detail page
5. Mood chips (Laptop Friendly, Minimalist, etc.) remain a local visual toggle only — they don't map to any Finder filter dimension, so they are intentionally not wired to navigation (would create a misleading empty-filter result)

---

### 5.2 Coffee Finder (`/finder`)

**Purpose:** Cafe directory with sidebar filtering. The primary discovery surface.

**Components:**
- `FinderView` (`client`, `src/components/finder/finder-view.tsx`) — owns filter/sort/search state via `useSearchParams` + `useState`; computes the visible cafe list and renders the empty state
- `SidebarFilters` (`client`) — 4 filter groups, controlled by `FinderView` (lifted state, no longer local)
- `CafeCard` — grid card; cards with `href` prop link to cafe detail

**Filter groups (all functional):**

| Group | Options | Matches against |
|---|---|---|
| Neighborhood | Safdarjung, Vasant Vihar, Hauz Khas, Connaught Place | `cafe.neighborhood` (no cafe currently has Connaught Place — filtering to it correctly yields zero results) |
| Noise Level | Quiet (Focus), Ambient (Chatter), Bustling (Loud) | base word matched against `cafe.tags` |
| Vibe | Workspace, Date Spot, Reading Nook | `cafe.tags` |
| Roaster Used | Onyx Coffee Lab, Sey Coffee, Intelligentsia | `cafe.roaster` |

No option checked in a group = that group doesn't filter. Across groups the filter is AND; within a group it's OR. Defaults start empty (previously defaulted to "Safdarjung" + "Quiet (Focus)", which — now that filtering is live — would have hidden 6 of 7 cafes on first load).

**Cafes in directory (7) — all linked, all data in `src/lib/cafes.ts`:**

| Name | Neighborhood | Roaster | Detail Page |
|---|---|---|---|
| Roastery Coffee House | Khan Market | Onyx Coffee Lab | `/cafe/roastery-coffee-house` |
| Blue Tokai Safdarjung | Safdarjung | Onyx Coffee Lab | `/cafe/blue-tokai-safdarjung` |
| Perch Wine & Coffee Bar | Vasant Vihar | Sey Coffee | `/cafe/perch-wine-coffee-bar` |
| Subko Cacao Mill | Hauz Khas | Intelligentsia | `/cafe/subko-cacao-mill` |
| Quick Brown Fox | Dhan Mill | Sey Coffee | `/cafe/quick-brown-fox` |
| Devan's South Indian | Lodhi Colony | Intelligentsia | `/cafe/devans-south-indian` |
| The Artful Baker | Khan Market | Onyx Coffee Lab | `/cafe/the-artful-baker` |

**Sort options (all functional):** Newest Added (declared array order), Highest Rated (`rating` desc), Closest to Me (`distanceKm` asc — a content-only field on `CafeRecord`, not real geolocation).

**Search (`?q=`):** Matches cafe name, roaster, or tags (case-insensitive substring). Populated by `HeroSearch` on Home; the header shows `Showing N of 7 Cafes ... for "query"` and a "Clear filters" action once any filter/search is active.

**Empty state (`FinderEmptyState`, `src/components/finder/empty-state.tsx`):** shown when the combined filter/search/sort yields zero cafes. Implements the "Coffee Finder - No Results" Stitch design — spilled-cup illustration with a mouse-tilt micro-interaction, "REFILL NEEDED" rotated badge, "Looks like we're out of beans." headline, and two actions:
- **Clear All Filters** / **Browse All Cafes** — both reset sidebar filters and the `q` param (functionally identical, matching the mockup's two-button framing of "reset" vs. "just browse")
- **Popular vibe chips** (Laptop Friendly, Quiet Corner, Outdoor Seating, Quick Fix) — each clears filters and sets `q` to a term that matches real cafe tags, so every chip returns real results rather than being decorative. "Outdoor Seating" and "Quick Fix" didn't correspond to any existing tag, so `lib/cafes.ts` gained those two tags on Perch Wine & Coffee Bar and The Artful Baker respectively to back them.

**TopNav behavior:** Shows inline search input when `pathname === '/finder'`. **Known gap:** this inline input is still not wired to the `q` param — wiring it requires either lifting shared state via URL (would need to wrap the layout-level `TopNav` in a `Suspense` boundary for `useSearchParams`, which is a broader architectural change) or a different state-sharing approach. Deferred; use the Home hero search or type directly in the URL (`/finder?q=...`) in the meantime.

**User flow:**
1. User clicks "Coffee Finder" in nav (or arrives via `/finder?q=...` from Home) → lands on `/finder`
2. Sees up to 7 cafe cards in a responsive grid (1 → 2 → 3 columns), narrowed by any incoming search query
3. Uses sidebar checkboxes to filter by neighborhood, noise, vibe, or roaster — grid updates live
4. Changes sort order — grid re-sorts live
5. Hovers a card → image scales up + "View Profile" overlay appears
6. Clicking a card navigates to its detail page

---

### 5.3 Cafe Detail (`/cafe/[slug]`)

**Implemented slugs (7):** `roastery-coffee-house` (static route, kept for history — reads from the same `lib/cafes.ts` record), plus `blue-tokai-safdarjung`, `perch-wine-coffee-bar`, `subko-cacao-mill`, `quick-brown-fox`, `devans-south-indian`, `the-artful-baker` (dynamic `[slug]` route via `generateStaticParams`). Next.js resolves the static segment first for an exact match, so both routes coexist safely — unknown slugs hit `notFound()`.

**Known gap:** no back link / breadcrumb / related-cafes rail yet (one-way trap) — pending a design pass, tracked separately.

**Purpose:** Deep profile of a single cafe — vibe, utility, coffee menu, gallery, location.

**Components:**
- `CafeHero` — hero image, rating badge, name, description
- `CafeInsights` — 3-panel bento: Vibe (tags), Utility (Wi-Fi/plugs/seating), Coffee (origins/signatures)
- `CafeGallery` — 5-image gallery grid with "View all X photos" affordance
- `CafeLocationPassport` (`client`) — map image, address, check-in count, and the "Stamp My Passport" CTA. Button reflects stamped state (via `useSyncExternalStore` over `lib/passport-stamps.ts`, localStorage-backed) and opens `PassportStampFlow` on click.

**Passport Stamp flow (`PassportStampFlow`, `src/components/cafe/passport-stamp-flow.tsx`, client):** a 3-step modal implementing the Stitch "Digital Stamp Ritual" designs, triggered from any cafe's "Stamp My Passport" button. Uses Framer Motion (`AnimatePresence`, `useReducedMotion`) instead of the mockups' raw WebGL shaders — this codebase has no WebGL anywhere else and the design brief caps the mobile animation budget, so shaders would have been inconsistent and risky. All motion-heavy pieces (confetti, ping ripple, floating idle animation) are gated behind `useReducedMotion()`.
- **Verify Location** — themed/flavor-only location check ("Syncing Vibe Coordinates..."), not a real `navigator.geolocation` call — the copy is intentionally playful ("vibe coordinates"), not a literal geofence
- **Digital Stamp Ritual** — tap the seal (holographic shimmer via a CSS keyframe, `.holographic-shimmer` in `globals.css`) to arm "Confirm Impression", then a brief "Authenticating..." step
- **Passport Stamped** — cafe-specific badge (`cafe.badgeName`), confetti (CSS `.confetti-bean` / `@keyframes bean-float`, generated in an effect via `setTimeout(fn, 0)` — `Math.random` cannot be called during render under this project's React Compiler purity rule), "View My Passport" (routes to `/passport`), "Share Your Vibe" (`navigator.share` with a clipboard-copy fallback)
- Stamps persist per-cafe in `localStorage` (`lib/passport-stamps.ts`); `addCafeStamp` dispatches a custom event so any mounted `CafeLocationPassport` picks up the change immediately, cross-tab included (also listens for the native `storage` event)
- **Agent note:** this component intentionally avoids `useEffect` + synchronous `setState` for both the "reset step when reopened" and "read stamped state" cases — the project's lint config (`react-hooks/set-state-in-effect`, `react-hooks/purity`) flags those. Reset-on-reopen is done by comparing against previous `open` in a state variable and calling `setState` directly during render (React's documented "adjusting state when a prop changes" pattern); stamped-state reads use `useSyncExternalStore`, not an effect.

**Data for Roastery Coffee House:**
- Rating: 4.8 ★
- Vibe: Low Noise, Natural Light — calm, botanical, spacious
- Wi-Fi: 150 Mbps | Plug Points: Abundant | Seating: Ergonomic
- Origins: Ethiopia, Karnataka (Estate Blend)
- Signatures: Cranberry Cold Brew, V60 Pour-over
- Address: Khan Market, Rabindra Nagar, New Delhi, Delhi 110003
- Check-ins: 243
- Gallery: 5 images (12 total shown in count)

**User flow:**
1. User clicks "View Profile" on Roastery Coffee House card in `/finder`
2. Lands on `/cafe/roastery-coffee-house`
3. Scrolls through hero → insights bento → gallery → location + passport stamp section
4. Clicks "Stamp My Passport" → Verify Location → Digital Stamp Ritual → Passport Stamped success screen (all 4 cafes/beans-agnostic; works identically for any of the 7 cafes since `CafeLocationPassport` is shared)
5. Button now reads "Passport Stamped" on this and future visits (persisted in `localStorage`)

---

### 5.4 Bean Database (`/bean-database`)

**Purpose:** Education hub and index for Indian specialty coffee beans.

**Components:**
- `EducationHero` — featured article card ("Know Your Beans: The Roasting Process")
- `SearchFilterBar` — sticky search + filter chip bar (docks below nav at `top-16 md:top-20`); the text input is **functional** (controlled by `BeanDatabaseView`), filtering the Complete Index below by name/notes/process. The 3 chip buttons (Region, Roast Level, Process) remain unwired — no design/taxonomy decision made yet for how they should look active vs. inactive.
- `RegionalFavorites` — bento grid: 1 featured bean + 6 secondary beans, **all linked** to detail pages
- `FlavorNotesGrid` — 4-quadrant flavor wheel sprite (Acidity/Citrus, Sweetness/Cocoa, Floral/Delicate, Nutty/Earthy)
- `BeanList` — Complete Index; rows are now `Link`s to detail pages, with an empty state when search yields nothing

**`BeanDatabaseView`** (`client`) owns the search state for the whole page body, so the sticky search bar (near the top) can filter the Complete Index (further down) without changing their DOM order.

**Featured bean:** Monsoon Malabar AA — Baba Budangiri → links to `/bean-database/baba-budangiri`

**Secondary beans (all linked):** Biligiri Hills Washed, Kents Honey Process, Andhra Pradesh Organic, Monsooned Malabar, Nilgiri Hills, Ethiopia Yirgacheffe

**Bean index / Complete Index (3 entries, all linked):**
| Bean | Process | Detail Page |
|---|---|---|
| Kalledevarapura Estate Pulp Sun Dried | Washed | `/bean-database/kalledevarapura-estate` |
| Gungegiri Estate Arabica | Natural | `/bean-database/gungegiri-estate-arabica` |
| Ratnagiri Estate Peaberry | Honey | `/bean-database/ratnagiri-estate-peaberry` |

Regional Favorites and the Complete Index are intentionally non-overlapping sets (10 unique beans total, matching the original content split) — a bean isn't shown twice.

**User flow:**
1. User clicks "Bean Database" in nav → lands on `/bean-database`
2. Sees education hero article at top
3. Sticky search/filter bar docks below nav when scrolling; typing filters the Complete Index live
4. Browses regional favorites bento; clicks any featured or secondary bean → goes to its detail page
5. Explores flavor quadrants; scrolls to Complete Index, clicks a row → goes to its detail page

---

### 5.5 Bean Detail (`/bean-database/[slug]`)

**Implemented slugs (10):** `baba-budangiri` (static route, reads from the same `lib/beans.ts` record), plus `biligiri-hills-washed`, `kents-honey-process`, `andhra-pradesh-organic`, `monsooned-malabar`, `nilgiri-hills`, `ethiopia-yirgacheffe`, `kalledevarapura-estate`, `gungegiri-estate-arabica`, `ratnagiri-estate-peaberry` (dynamic `[slug]` route via `generateStaticParams`). Same static-route-wins-on-exact-match pattern as `/cafe/[slug]`.

**Known gap:** no back link / breadcrumb / related-beans rail yet (one-way trap) — pending a design pass, same as Cafe Detail.

**Purpose:** In-depth profile of a single bean origin — flavor, process, roast, where to find it.

**Components:**
- `BeanHero` — tag (e.g. "Single Origin", "Peaberry", "Guest Origin"), name, description, origin, altitude
- `RadarChart` (client) — interactive SVG flavor radar with 5 axes (Chocolate, Sweetness, Body, Acidity, Nutty — fixed axis set across all beans, values vary); hover tooltips on data points; animated `pulse-point` keyframe
- `InfoCard` × 2 — Process card + Roast card, values now sourced per-bean from `lib/beans.ts` instead of hardcoded
- `PouringNowList` — cafes currently serving this bean; each row now optionally takes a `cafeHref` and renders as a `Link` to the real `/cafe/[slug]` page (reuses the existing `hover:border-bean-origin-gold` convention — no new visual design)
- `SourcedByList` — roasters sourcing this bean; still plain text (no roaster detail pages exist in the app, so there's nothing to link to yet — the "BUY" button remains decorative pending a product decision on what it should do)

**Radar chart axes for Baba Budangiri:**

| Axis | Score (/100) | Description |
|---|---|---|
| Chocolate | 90 | Prominent, dark cocoa notes |
| Sweetness | 75 | Balanced, caramel-like |
| Body | 80 | Rich, velvety mouthfeel |
| Acidity | 40 | Mild, subtle citrus hints |
| Nutty | 60 | Subtle roasted almond |

**Origin:** Chikkamagaluru, India | Altitude: 1200–1500m

**Pouring at:** Blue Tokai Vasant Vihar (Espresso & Pour Over), Quick Brown Fox Dhan Mill (AeroPress Special)

**Sourced by:** Kapi Kottai (Curveball Blend), Savorworks Roasters (Single Estate Washed)

**Radar chart implementation notes (for agents):**
- Axes computed trigonometrically: `angle = -90° + i × (360 / axisCount)` — do NOT hardcode pixel coordinates
- Value scaled: `r = (value / 100) × MAX_RADIUS` where `MAX_RADIUS = 120`
- React state manages hover tooltip visibility per data point
- `pulse-point` is a custom CSS `@keyframes` in `globals.css`

**User flow:**
1. User clicks featured bean in `/bean-database` → lands on `/bean-database/baba-budangiri`
2. Reads hero (origin, altitude, description)
3. Interacts with radar chart — hovers data points to see flavor descriptions
4. Reads process/roast info cards
5. Sees where to find this bean poured in Delhi
6. Sees which roasters source it

---

### 5.6 Brewing Guides (`/brewing-guide`)

**Purpose:** Curated library of brewing methods — from beginner to advanced.

**Components:**
- `BrewingGuideView` (`client`) — owns search state, filters "All Methods" by name/category/flavor tag; the Featured Guide card is always V60 (curated, unaffected by search), mirroring how Bean Database's featured bento stays static
- `SearchFilterBar` — search input is **functional**; the 3 chip buttons (Difficulty, Flavor Profile, Time) remain unwired, same documented gap as Bean Database's Region/Roast Level/Process chips
- `FeaturedGuide` — hero card for the highlighted guide (V60, links to detail)
- `GuideCard` — grid card with flavor tags, difficulty badge, brew time; **all 4 cards now linked**

**Guide library (4 methods, all linked, data in `src/lib/brewing-guides.ts`):**

| Method | Category | Difficulty | Time | Detail Page |
|---|---|---|---|---|
| V60 | Pour Over | Intermediate | 3:30m | `/brewing-guide/v60` |
| AeroPress | Immersion | Easy | 2:00m | `/brewing-guide/aeropress` |
| Chemex | Pour Over | Advanced | 4:30m | `/brewing-guide/chemex` |
| French Press | Immersion | Easy | 4:00m | `/brewing-guide/french-press` |

**User flow:**
1. User clicks "Brewing Guide" in nav → lands on `/brewing-guide`
2. Sees featured V60 hero card; clicks "Read Guide" → goes to `/brewing-guide/v60`
3. Or searches/browses all 4 method cards; clicks any card to go to its detail

---

### 5.7 Brew Guide Detail (`/brewing-guide/[slug]`)

**Implemented slugs (4):** `v60` (static route, reads from the same `lib/brewing-guides.ts` record), plus `aeropress`, `chemex`, `french-press` (dynamic `[slug]` route via `generateStaticParams`). Same static-route-wins-on-exact-match pattern as `/cafe/[slug]` and `/bean-database/[slug]` — all three detail-page templates (`GuideHero`, `EquipmentChecklist`, `RecipeCard`, `StepTimeline`) are fully data-driven, so adding the 3 new methods was pure content, no template changes.

**Known gap:** no back link / breadcrumb / related-guides rail yet — same one-way-trap gap as Cafe Detail and Bean Detail, pending a design pass. The "Start Brew Timer" button (in `StepTimeline`, desktop only) and the mobile `TimerFab` both remain decorative — a real timer needs idle/running/paused/complete states that don't exist yet, so it's out of scope for a no-new-design pass.

**Purpose:** Step-by-step brewing tutorial with equipment list, recipe card, and a brew timer FAB.

**Components:**
- Hero section — title, description, brew stats (time, difficulty, yield)
- Equipment checklist — list of required gear
- Recipe card — dose, water, temperature, grind size parameters
- `StepTimeline` — alternating left/right step layout using a 3-column CSS grid (`1fr / 2rem / 1fr`)
- Timer FAB — floating action button (bottom-right) with `timer-glow` pulse animation

**V60 recipe parameters:**
- Coffee dose: 15g
- Water: 250ml
- Temperature: 94°C
- Grind: Medium-Fine

**Brew steps:** Bloom → First Pour → Second Pour → Third Pour → Drawdown (alternating sides in timeline)

AeroPress, Chemex, and French Press each have their own equipment/recipe/step data in `lib/brewing-guides.ts` following the same shape — see that file for exact values rather than duplicating them here.

**Step timeline implementation notes (for agents):**
- Built as a 3-column grid (`grid-cols-[1fr_2rem_1fr]`) — not flexbox
- Left steps: `md:col-start-1` | Right steps: `md:col-start-3`
- Do NOT revert to flex-reverse pattern — it was replaced because it was fragile

**User flow:**
1. User arrives from Brewing Guide listing
2. Reads hero + recipe card
3. Checks equipment list
4. Follows alternating step timeline
5. Taps Timer FAB to start a brew timer (UI present; timer logic is future work)

---

### 5.8 Events (`/events`)

**Purpose:** Showcase upcoming specialty coffee events — throwdowns, cuppings, meet & greets.

**Components:**
- Page header — "Event Roster" title
- `FeaturedEvent` — large hero card with date, title, location, description, attendee avatars + count, RSVP CTA
- Filter button — icon button (UI only, not wired)
- `SessionCard` — grid of upcoming sessions (2 cards, 2-column on md+)

**Featured event:** The Eastside Throwdown — Oct 24, Sightglass Coffee Roasters, 45 attendees

**Upcoming sessions:**
| Title | Date | Time | Attendees |
|---|---|---|---|
| Beginner's Cupping | Oct 28 | 10:00 AM – 12:00 PM | 8 |
| Roaster's Meet & Greet | Nov 2 | 6:30 PM – 9:00 PM | 21 |

**User flow:**
1. User clicks "Events" in nav → lands on `/events`
2. Sees featured throwdown event with RSVP CTA (not wired)
3. Scrolls to upcoming sessions; sees date/time/description for each

---

### 5.9 Community Hub (`/community`)

**Purpose:** Social feed and community layer — live vibe check-ins, editorials, and throwdown roster.

**Components:**
- Page header — title + `StatusBanner` (14-day streak, Level 14 Barista Pro)
- `VibeCard` (masonry grid) — user check-in cards with avatar, message, vibe tags, noise/seating metrics; optional image
- `EditorialItem` — article row with image, tag, title, description, author, read time
- `ThrowdownRoster` (sidebar) — compact event list with RSVP/Waitlist CTAs
- `Footer` (page-local) — dark espresso-toned footer; **not a global footer**

**Live Pulse vibe cards (2):**
- Elena R. (Level 8, Chemex Novice) — checked into Onyx Coffee Lab; Productive Vibe, Laptop Friendly
- Marcus T. (Level 18, Roaster) — dialing in Ethiopian Yirgacheffe at Sey Coffee; Social Vibe, No Laptops

**Member Editorials (2):**
- "Hidden Courtyards: The Best Secret Patios for Summer Sipping" — Sarah L., 5 min read
- "Burr Alignment: A Practical Guide to Consistency" — David W., 12 min read

**Throwdown Roster (2):**
- Tonight 7:00 PM — Latte Art Smackdown, Prologue Coffee Bar (8+2 attendees) — RSVP
- Saturday 10:00 AM — Public Cupping: Gesha Varietals, The Roastery (2 attendees) — Waitlist

**User flow:**
1. User clicks "Community" in nav → lands on `/community`
2. Sees their streak/level status banner
3. Scrolls the masonry vibe card feed (live check-ins)
4. Reads member editorial articles
5. Checks throwdown roster sidebar; RSVPs or joins waitlist (CTA present; not wired)
6. Reaches page-local dark footer

---

### 5.10 Passport (`/passport`)

**Purpose:** Gamified personal profile — tracks cafe visits, badges, trails, stats, and friends.

**Components:**
- `ProfileHeader` — avatar, level badge (Level 5), name, handle, bio, stat pills (Cafes/Vibes/Points), journey progress bar (Delhi Coffee Trail: 12/20)
- `TrophyCase` — 4 stamps (3 earned + 1 locked): "10 Cafes Visited", "Pour-over Pro", "South Delhi Trail", "Roaster's Choice" (locked)
- `ActiveTrails` — 2 in-progress trails with progress bars
- `StatCard` × 2 — Favorite Bean (Ethiopian Yirgacheffe) + Brew Style (Aeropress)
- `FriendBoard` — ranked leaderboard: Sarah J. (#1, 34 badges), You (#2, 12 badges), Marcus K. (#3, 9 badges)
- `RecentActivity` — 3 feed items (friend check-in, badge unlock, RSVP)
- `NextStopCard` — AI-style recommendation card for next cafe to visit; now requires an `href` prop and renders as a `Link` (whole card, no nested `<button>`)

**Profile data (Alex Bean):**
- Level 5 | 42 Cafes | 128 Vibes | 3k Points
- Active Journey: Delhi Coffee Trail (12/20 stops)

**Active Trails:**
| Trail | Progress |
|---|---|
| The Eastside Espresso Run | 4/5 (80%) |
| The Hidden Gems | 1/4 (25%) |

**Next Stop recommendation:** Devan's South Indian Filter, Lodhi Colony (based on dark roast preference) — links to `/cafe/devans-south-indian`

**User flow:**
1. User clicks "Passport" in nav → lands on `/passport`
2. Sees profile header with level, stats, and journey progress bar
3. Scrolls to Trophy Case — sees earned stamps and one locked stamp
4. Checks active trails and their completion progress
5. Views stat cards for favorite bean + brew style
6. Sees friend leaderboard — their rank vs friends
7. Reads recent activity feed
8. Views "Next Stop" recommendation card

---

## 6. End-to-End User Flows

### Flow A — New User Discovery

```
Home (/) → Coffee Finder (/finder) → Cafe Detail (/cafe/roastery-coffee-house)
```
1. Lands on Home → sees trending cafes, or types a search query in HeroSearch
2. Clicks "Coffee Finder" in nav, or search submits to `/finder?q=...`
3. Applies neighborhood/noise/vibe/roaster filters — grid updates live
4. Hovers Roastery Coffee House card → clicks "View Profile"
5. Reads full cafe profile, gallery, and location
6. **Known gap:** no way back to Finder or to another cafe from here — pending a design pass (breadcrumb + related-cafes rail)

---

### Flow B — Bean Exploration

```
Bean Database (/bean-database) → Bean Detail (/bean-database/[slug]) → Cafe Detail (/cafe/[slug])
```
1. Clicks "Bean Database" in nav
2. Reads education hero about the roasting process
3. Searches or browses to any of the 10 beans (Regional Favorites bento, or the Complete Index — both fully linked now)
4. Lands on a bean detail page — reads origin, interacts with radar chart
5. Sees which Delhi cafes are pouring it in "Pouring Now" — these are now real links; clicking one goes directly to that cafe's detail page (previously plain text, required a manual detour through Coffee Finder)

---

### Flow C — Learning to Brew

```
Brewing Guides (/brewing-guide) → Brew Guide Detail (/brewing-guide/[slug])
```
1. Clicks "Brewing Guide" in nav
2. Reads featured guide hero (V60), or searches/browses all 4 methods (all now linked)
3. Clicks a method → full step-by-step page for that method
4. Checks equipment list + recipe parameters
5. Follows step timeline while brewing
6. Taps Timer FAB — still decorative; a functional timer needs new UI states (idle/running/paused/complete) that don't exist yet
7. **Known gap:** no way back to the guide index or to another method from here — pending a design pass

---

### Flow D — Community & Events

```
Community (/community) → Events (/events)
```
1. Clicks "Community" in nav
2. Reads live vibe pulse feed
3. Spots an upcoming throwdown in the roster sidebar
4. Clicks "Events" in nav to see full event listing
5. Views full event details → RSVP (UI present; not wired)

---

### Flow E — Gamification / Passport Loop

```
Passport (/passport) → Coffee Finder (/finder) → Cafe Detail (/cafe/roastery-coffee-house)
```
1. Clicks "Passport" in nav
2. Views trophy case — notices "Roaster's Choice" stamp is locked
3. Checks active trail progress (Eastside Espresso Run: 4/5)
4. Sees "Next Stop" recommendation (Devan's South Indian Filter) — now a real `Link`
5. Clicks it → goes directly to `/cafe/devans-south-indian` (no longer requires a manual detour through Coffee Finder)
6. Visits cafe detail, clicks "Stamp My Passport" → completes the Verify Location → Digital Stamp Ritual → Passport Stamped flow
7. **Known gap:** the stamp is persisted in `localStorage` only — the actual Trophy Case / stats / trail progress on `/passport` are still hardcoded mock data and don't yet reflect real stamps. Wiring that up is a larger Passport-page data-model change, out of scope for this pass.

---

## 7. Component Reference

### `<Icon name="..." />`

Wrapper for Material Symbols. Use `filled` prop for filled variant. Control size with `className="text-[16px]"`.

```tsx
<Icon name="star" filled className="text-bean-origin-gold" />
<Icon name="search" />
```

### `<CafeCard cafe={...} />`

Pass `href` to make the card a `<Link>`. Without `href`, renders a non-navigable `<div>`. Hover reveals "View Profile" overlay and scales image.

### `<FinderEmptyState onClearAll={...} onQuickVibe={...} />`

`onClearAll(): void` resets both sidebar filters and the URL search param. `onQuickVibe(query: string): void` does the same then sets `q` to the given term — the term must match a real tag/name/roaster substring in `lib/cafes.ts` or the chip becomes a dead end again. Do not add a quick-vibe chip without first confirming (or adding) matching cafe data.

### `<PassportStampFlow open cafeSlug cafeName neighborhood badgeName onClose />`

Self-contained modal; `open` controls mount/unmount via `AnimatePresence`. Resets its internal step to `"verify"` whenever `open` flips `false → true` — this is done by comparing against a `wasOpen` state variable and calling `setState` directly in the render body (not in a `useEffect`), since this project's lint config flags synchronous `setState` inside effects. Calls `addCafeStamp(cafeSlug)` itself; callers don't need to persist anything. Any new step or async data added here should generate randomness/impure values inside an effect or event handler, never in render/`useMemo` — the `react-hooks/purity` rule will fail the build otherwise (see `Confetti`'s `generateBeans()` for the pattern).

### `<RadarChart axes={[...]} />`

Client component. Each axis: `{ label: string, value: number (0–100), description: string }`. Geometry is computed — do not hardcode SVG coordinates.

### `<StepTimeline steps={[...]} />`

3-column grid (`1fr / 2rem / 1fr`). Steps alternate left/right. Never revert to flex-reverse pattern.

### `<GuideCard guide={...} />`

Pass `href` on the `BrewGuide` type to link the card via `<Link>`. Without `href`, renders a plain `<div>`. Uses conditional return (not a polymorphic Wrapper component).

---

## 8. Agent-Specific Guidelines

These rules are critical for any AI agent modifying this codebase:

1. **Nav chrome** — Always use `TopNav` + `BottomNav` + `MobileTopBar`. Never add sidebar navs, alternative nav patterns, or additional chrome from Stitch exports. Stitch nav is always discarded.

2. **Tailwind v4 tokens** — All new tokens go in the `@theme {}` block in `globals.css`. Never create a `tailwind.config.js`. Never use Tailwind v3 JS config syntax.

3. **Dark mode** — Do not add `dark:` variants. Dark mode is intentionally suppressed.

4. **Icons** — Always use `<Icon name="..." />`. Verify the icon name is a valid Material Symbol before using it. Past invalid icon: `search_spark` (replaced with `explore`).

5. **`next/image`** — All external image hostnames must be added to `next.config.ts` `remotePatterns`. Currently only `lh3.googleusercontent.com` is allowed.

6. **Client vs Server components** — Components using `usePathname()`, `useState()`, or other hooks must be `"use client"`. Server components (pages) should not be client components unless necessary.

7. **No global footer** — The community page has a page-local footer. Do not add a global footer to `layout.tsx` — it breaks the fixed-height finder layout.

8. **Git workflow** — After every code change (screen, feature, or fix), commit and push to `origin/main` automatically. Also update `KNOWLEDGE_BASE.md` in the same commit.

9. **Sticky filter bars** — Sticky elements in page content must offset for the nav: `top-16 md:top-20` to avoid being hidden behind the TopNav.

10. **Mobile bottom nav** — 7 items do not fit at fixed width. The nav is `overflow-x-auto hide-scrollbar`. Never shrink items below their natural size to fit.

---

## 9. Changelog

| Date | Change | Commit |
|---|---|---|
| 2026-07-08 | Passport Stamp flow implemented from Stitch designs (Verify Location, Digital Stamp Ritual, Passport Stamped): `PassportStampFlow` modal wired to every cafe's "Stamp My Passport" button, `lib/passport-stamps.ts` for localStorage persistence, `badgeName` added to every `CafeRecord` | — |
| 2026-07-08 | Finder empty state implemented from Stitch design ("Coffee Finder - No Results"): `FinderEmptyState` component, `.coffee-pattern` utility, functional quick-vibe chips (added "Outdoor Seating" and "Quick Fix" tags to back 2 of them) | — |
| 2026-07-06 | Brewing Guides wired end-to-end: shared `lib/brewing-guides.ts` dataset (4 methods, all linked), dynamic `/brewing-guide/[slug]` route for AeroPress/Chemex/French Press, "All Methods" search made functional | — |
| 2026-07-06 | Bean Database wired end-to-end: shared `lib/beans.ts` dataset (10 beans, all linked), dynamic `/bean-database/[slug]` route, Complete Index search made functional, Regional Favorites secondary cards linked, Pouring Now list links to real cafes | — |
| 2026-07-06 | Discovery loop wired end-to-end: shared `lib/cafes.ts` dataset (7 cafes), dynamic `/cafe/[slug]` route, Finder filters/sort/search made functional, Home hero search + trending cards linked, Passport Next Stop card linked | — |
| 2026-07-06 | Knowledge Base document created | — |
| Prior | Community Hub page added | — |
| Prior | Coffee Finder replaced with Cafe Directory (sidebar filters + grid) | 0476988 |
| Prior | Search bar placeholder shortened to "Search" | d5832cd |
| Prior | Bean Database + Baba Budangiri detail added | — |
| Prior | Brewing Guide listing + V60 detail added | — |
| Prior | Events page added (moved from Passport tab) | — |
| Prior | Passport page updated (Profile Header, Active Trails, Friend Board, Recent Activity) | — |
| Prior | Initial 11 screens ported from Stitch exports | — |
