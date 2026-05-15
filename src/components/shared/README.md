# Reusable TRIIBE Components

Drop any of these into a new TRIIBE page project. All components live at `src/components/` (or `src/hooks/`) and have no project-specific dependencies — just React, Tailwind, and lucide-react.

---

## Components

### `Footer.tsx`
Full site footer matching triibe.org.

**Design:** White background, 5-column top grid (brand + 3 link groups + Candid seal), bottom bar with copyright and social icons.

**Usage:**
```tsx
import Footer from "@/components/Footer";

// drop at bottom of page, outside max-width container
<Footer />
```

**Requires:** `/images/triibe-logo-black.png` in `public/`.

---

### `Navbar.tsx`
Full site navbar matching triibe.org.

**Design:** Dark green (`#0D2B1E`) sticky top bar, TRIIBE wordmark, nav links, Donate + Apply CTAs, mobile hamburger menu.

**Usage:**
```tsx
import Navbar from "@/components/Navbar";

<Navbar />
```

**Requires:** `/images/triibe-logo-black.png` in `public/`.

---

### `LinkedInBadge.tsx`
Clickable LinkedIn "in" icon link. Returns `null` when no URL is passed — safe to always render.

**Usage:**
```tsx
import { LinkedInBadge } from "@/components/LinkedInBadge";

<LinkedInBadge url={person.linkedIn} />
```

---

### `InstagramBadge.tsx`
Clickable Instagram icon (gradient SVG). Returns `null` when no URL is passed.

**Usage:**
```tsx
import { InstagramBadge } from "@/components/InstagramBadge";

<InstagramBadge url={person.instagram} />
```

---

### `FadeUp.tsx`
Scroll-triggered fade-up animation wrapper. Uses IntersectionObserver — no layout shift, no dependencies beyond React.

**Props:** `children`, `delay?: number` (ms), `threshold?: number` (default 0.15)

**Usage:**
```tsx
import { FadeUp } from "@/components/FadeUp";

<FadeUp delay={100}>
  <YourComponent />
</FadeUp>
```

---

## Hooks

### `hooks/useCountUp.ts`
Animates a number from 0 to `target` over ~1 second. Trigger manually via `start()`.

**Usage:**
```tsx
import { useCountUp } from "@/hooks/useCountUp";

const { count, start } = useCountUp(42);
// call start() when element enters viewport
```

---

### `hooks/useFadeUp.ts`
IntersectionObserver hook that returns `{ ref, visible }`. Powers `FadeUp.tsx` internally — use directly if you need finer control.

**Usage:**
```tsx
import { useFadeUp } from "@/hooks/useFadeUp";

const { ref, visible } = useFadeUp(0.15);
<div ref={ref} style={{ opacity: visible ? 1 : 0 }}>...</div>
```

---

## Brand tokens (reference)

```
Primary green:      #1A6B3C
Dark green (navbar): #0D2B1E
Light green bg:     #EAF3DE
Green border:       #C0DD97
Text black:         #111111
Body text:          #444
Muted text:         #888
```
