# AMS Solutions — Website Implementation Plan
*3-day sprint · July 2026*

---

## 0. Stack decision (locked, don't revisit)

- **Framework:** Next.js 14+ (App Router), TypeScript
- **Styling:** Tailwind CSS
- **Deploy:** Cloudflare Pages, connected to GitHub repo
- **CMS:** none for launch — content hardcoded in TSX/MDX files. Add a headless CMS later only if update frequency demands it.
- **Fonts:** self-hosted via `next/font`, not Google Fonts CDN (faster, no external request)
- **Repo:** public or private GitHub repo, connected to Cloudflare Pages for auto-deploy on push

No debate on any of the above mid-build. If something doesn't work, fix it — don't switch tools.

---

## 1. Repo & environment setup (Day 1, first 90 minutes)

```bash
npx create-next-app@latest ams-solutions --typescript --tailwind --app --src-dir
cd ams-solutions
git init
git add .
git commit -m "init"
```

Create GitHub repo, push:
```bash
gh repo create ams-solutions --private --source=. --push
# or manually: create on github.com, then
git remote add origin git@github.com:<you>/ams-solutions.git
git branch -M main
git push -u origin main
```

**Connect Cloudflare Pages immediately** — before writing a single component:
- Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git
- Select the repo, framework preset: Next.js
- Build command: `npx next build`
- Output directory: check current Cloudflare Next.js adapter docs — as of recent versions this typically needs `@cloudflare/next-on-pages` for full SSR support; if you're keeping the site static/simple, `next export`-style output is easier. Confirm the adapter requirement before Day 1 ends, don't discover it on Day 3.
- First push to `main` triggers first deploy → you now have a live `*.pages.dev` URL

Do this first so every subsequent push is visible on a real URL within minutes. Building blind for hours is how you lose a day to a deployment surprise.

---

## 2. Folder structure

```
src/
  app/
    layout.tsx          — root layout, fonts, metadata
    page.tsx             — homepage
    style-guide/
      page.tsx            — living design system reference (Day 1 deliverable)
    products/
      tremble/page.tsx
    services/
      page.tsx
    studio/page.tsx
    contact/page.tsx
    legal/
      privacy/page.tsx
      terms/page.tsx
  components/
    ui/
      Button.tsx
      Card.tsx
      SectionHeader.tsx
    layout/
      Nav.tsx
      Footer.tsx
      Section.tsx
  lib/
    tokens.ts            — optional: typed token exports for use outside Tailwind classes
public/
  logo.svg
tailwind.config.ts
```

`/work` (concept builds grid) is a stretch section — see §5 cut list.

---

## 3. Day-by-day

### Day 1 — Foundation
- [ ] Repo + Cloudflare Pages connected, first deploy live (90 min, §1)
- [ ] Design tokens in `tailwind.config.ts` (see design system doc below)
- [ ] Fonts loaded via `next/font`
- [ ] Build `/style-guide` route rendering every token + component variant
- [ ] Build 5 core components: `Button`, `Nav`, `Section`, `Card`, `Footer`
- [ ] Finalize copy in a single doc: positioning sentence, 3 service group descriptions, Tremble blurb, studio bio, contact copy
- [ ] Start Cloudflare DNS migration in parallel (see domain steps already agreed) — do NOT touch nameservers yet, just get records verified and ready

**Day 1 exit criteria:** `/style-guide` live on `.pages.dev` showing correct colors/type/components. Copy doc finished.

### Day 2 — Homepage
- [ ] Hero section
- [ ] Products/Tremble feature block
- [ ] Services (3 groups, numbered)
- [ ] How we work / process
- [ ] Concept builds section (2–3 items, explicitly labeled, no fabricated claims)
- [ ] Contact section
- [ ] Deploy after every section, check on real mobile device via the `.pages.dev` URL, not just browser devtools

**Day 2 exit criteria:** homepage complete, responsive, deployed, reviewed on phone.

### Day 3 — Remaining pages + launch
- [ ] `/products/tremble` full page
- [ ] `/services` full page
- [ ] `/studio` (about) page
- [ ] `/legal/privacy`, `/legal/terms` (required — GDPR, you're an EU entity)
- [ ] `/contact` if not fully covered by homepage section
- [ ] Cross-browser check (Safari, Chrome, Firefox)
- [ ] Lighthouse pass — fix anything under 90 on Performance/SEO/Accessibility
- [ ] Cloudflare nameserver cutover (only now — see §4)
- [ ] Attach custom domain to Pages project
- [ ] Verify mail send/receive post-cutover
- [ ] Final content proofread — no placeholder text, no lorem ipsum, no broken links

**Day 3 exit criteria:** site live on real domain, mail verified working, no console errors.

---

## 4. Domain cutover checklist (execute Day 3, or earlier if you want more buffer)

1. Add domain to Cloudflare, let it scan existing DNS
2. Manually verify against current Squarespace DNS panel: MX records (priority values), SPF TXT, DKIM TXT (check it wasn't truncated on import), DMARC if present
3. Change nameservers at Squarespace registrar settings to the two Cloudflare-assigned ones
4. Wait for "Active" status in Cloudflare (usually hours)
5. Send + receive a test email through the Workspace account
6. Add custom domain in Cloudflare Pages project settings → auto-configures routing

Do not delete/change anything at Squarespace beyond the nameserver field.

---

## 5. Cut list — if time runs short, cut in this order

1. `/work` / concept-builds section — homepage still works without it
2. `/studio` team photos — replace with text-only bios
3. Legal pages beyond the bare minimum (keep privacy at minimum, GDPR-required)
4. Any animation beyond basic fade/translate entrances
5. Second language

Do not cut: `/products/tremble`, `/services`, contact method, mobile responsiveness, Lighthouse basics.

---

## 6. Post-launch (week 2+, not part of this sprint)

- Add real client work to `/work` as soon as first paid AMS project completes
- First engineering note published
- `/en` if a non-Slovenian lead materializes
- Logo redesign to the container-less S-stroke concept, once there's a spare afternoon

---

# Design System — how to build it, concretely

You are not designing in Figma. The design system *is* the Tailwind config plus the `/style-guide` route. Below is the exact content to put in both.

## Step 1 — Extract real values from your existing logo

Open `AMS_Solutions_logo.png` in any color picker (macOS: Digital Color Meter, or just Preview → eyedropper in Markup toolbar). Get the exact hex of:
- The dark navy square background
- Confirm it's not pure black — it should read as a deep blue-navy
- HEX COLOR CONFIRMED: #08182d

Use that exact value as `navy-900`. Don't approximate from memory — pick it directly from the file so the site matches the logo you already have.

## Step 2 — Token set to add to `tailwind.config.ts`

```ts
// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#0B1424",   // near-black navy, use sparingly (text on light)
          900: "#14213D",   // ← REPLACE with your exact logo hex
          700: "#2A3B63",
          500: "#4A5D8A",
        },
        ground: {
          DEFAULT: "#FAF9F6",  // warm off-white, not pure #FFF
          card: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#2E6FF2",  // pick ONE: electric blue or signal orange — decide now, don't waver
        },
        ink: {
          DEFAULT: "#14213D",  // body text = navy-900, not black
          muted: "#5B6472",
        },
        line: "#E4E2DC",       // border/divider color
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      fontSize: {
        // fluid-ish fixed scale, adjust if needed but don't add more steps
        "display-lg": ["4.5rem", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display": ["3rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "h2": ["2rem", { lineHeight: "1.2" }],
        "h3": ["1.5rem", { lineHeight: "1.3" }],
        "body-lg": ["1.125rem", { lineHeight: "1.6" }],
        "body": ["1rem", { lineHeight: "1.6" }],
        "small": ["0.875rem", { lineHeight: "1.5" }],
        "mono-label": ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.05em" }],
      },
      spacing: {
        "section-y": "8rem",       // 128px — section vertical padding, desktop
        "section-y-mobile": "4rem",
      },
      borderRadius: {
        DEFAULT: "6px",
        lg: "12px",
      },
    },
  },
};
export default config;
```

**Rules for using this file:** every color, every font size, every spacing value used anywhere in the site comes from this config. If you find yourself typing an arbitrary Tailwind value like `text-[19px]` or `mt-[73px]`, stop — either it fits an existing token or you're about to fragment the system. Add a token instead of a one-off.

## Step 3 — Fonts

Pick one grotesque with character (per earlier recommendation: Geist, General Sans, or Instrument Sans — all free, all self-hostable via `next/font`). Add a monospace (JetBrains Mono or IBM Plex Mono) for metadata/labels only — never body text.

```ts
// app/layout.tsx
import { Geist, JetBrains_Mono } from "next/font/google";

const sans = Geist({ subsets: ["latin"], variable: "--font-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });
```

## Step 4 — Build the 5 components first, nothing else

`Button` (primary / secondary / ghost variants), `Nav`, `Section` (wraps every homepage block, enforces consistent vertical padding via the `section-y` token), `Card`, `Footer`. Every page is these five plus text and images. Resist building a bespoke component for a single section — reuse `Card` and `Section` everywhere.

## Step 5 — `/style-guide` route

Literally render every color swatch, every font-size step, every button variant, every card variant on one page, stacked with labels. This takes under an hour and becomes your only reference while building — instead of re-deciding "what shade of navy for this hover state" five times, you look at the page.

```tsx
// app/style-guide/page.tsx
export default function StyleGuide() {
  return (
    <div className="p-12 space-y-16">
      <section>
        <h2 className="font-mono text-mono-label uppercase mb-4">Colors</h2>
        <div className="flex gap-4">
          <Swatch name="navy-900" className="bg-navy-900" />
          <Swatch name="ground" className="bg-ground border border-line" />
          <Swatch name="accent" className="bg-accent" />
        </div>
      </section>
      <section>
        <h2 className="font-mono text-mono-label uppercase mb-4">Type</h2>
        <p className="text-display-lg">Display LG</p>
        <p className="text-display">Display</p>
        <p className="text-h2">Heading 2</p>
        <p className="text-body-lg">Body large</p>
        <p className="text-body">Body</p>
      </section>
      {/* buttons, cards, etc — same pattern */}
    </div>
  );
}
```

## Step 6 — Discipline, not tooling, is the actual system

The reason this counts as a "design system" without Figma: consistency comes from the fact that every component pulls from the same six token categories (color, type, spacing, radius) and nothing is hand-tuned per page. The moment you stop referencing `/style-guide` and start eyeballing values, the system degrades. Check every new section against it before moving to the next.

---

*Document version 1.0 — prepared for the 3-day build sprint, July 2026*
