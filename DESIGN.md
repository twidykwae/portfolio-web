---
name: Twidy Kelvin Kwae Portfolio
description: Personal portfolio for grad-school admissions, built as a reading room: tinted OKLCH neutrals, single Manuscript Ochre accent, system sans typography, motion in service of reading.
colors:
  ink: "oklch(13% 0.005 70)"
  ink-deep: "oklch(8% 0.005 70)"
  paper: "oklch(96% 0.005 75)"
  paper-dim: "oklch(83% 0.005 75)"
  paper-soft: "oklch(64% 0.005 70)"
  paper-faint: "oklch(48% 0.005 70)"
  divider: "oklch(20% 0.005 70)"
  divider-soft: "oklch(27% 0.005 70)"
  accent: "oklch(75% 0.13 75)"
  accent-deep: "oklch(58% 0.12 70)"
  accent-hover: "oklch(48% 0.11 65)"
  paper-light: "oklch(96% 0.005 75)"
  ink-light: "oklch(20% 0.005 70)"
typography:
  display-light:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "clamp(2.25rem, 7vw, 6rem)"
    fontWeight: 300
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  display-bold:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "clamp(2.25rem, 7vw, 6rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "clamp(1.5rem, 3vw, 1.875rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "normal"
  title:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "clamp(1.125rem, 2vw, 1.25rem)"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "normal"
  body:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "clamp(1rem, 1.5vw, 1.125rem)"
    fontWeight: 300
    lineHeight: 1.65
    letterSpacing: "normal"
  label:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.05em"
rounded:
  sm: "0.25rem"
  md: "0.75rem"
  lg: "1.5rem"
  full: "9999px"
spacing:
  xs: "0.5rem"
  sm: "1rem"
  md: "2rem"
  lg: "4rem"
  xl: "8rem"
components:
  button-primary:
    backgroundColor: "{colors.accent-deep}"
    textColor: "{colors.paper}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
    typography: "{typography.body}"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
    textColor: "{colors.paper}"
  button-resume:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "8px 32px"
    typography: "{typography.body}"
  button-resume-hover:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.ink}"
  input-field:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.md}"
    padding: "12px"
    typography: "{typography.body}"
  card-project:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.md}"
    padding: "16px"
  card-project-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  nav-bar:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    padding: "28px"
    typography: "{typography.body}"
  research-row:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    padding: "24px 0"
  status-pill:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper-soft}"
    rounded: "{rounded.sm}"
    padding: "4px 10px"
---

# Design System: Twidy Kelvin Kwae Portfolio

## 1. Overview

**Creative North Star: "The Reading Room"**

This site feels like walking into a quiet university reading room. The visitor sits down to read carefully, not to be sold to. Typography carries the room. Motion is restrained and only ever serves reading. Color is rare and intentional: a warm, considered Manuscript Ochre that escapes the SaaS-blue category reflex and reads as editorial rather than tech-marketing. Neutrals are tinted toward the same warm hue, so pure `#000` and `#fff` never appear: the room has a temperature.

The system has cleared its first transition. The earlier dev-portfolio default (pure black + Tailwind-default blue + identical project cards) has been replaced with a real accent, tinted near-black/near-white in OKLCH, semantic design tokens, and a content-first row composition for both the Research and Experience surfaces. The Bible verse retains its quiet treatment (small, italic, body voice).

This system explicitly rejects: the generic dev-portfolio template, bootcamp-style splash animation, gradient text, glassmorphism, religious or inspirational kitsch, and any decorative motion that fights with reading.

**Key Characteristics:**

- Content is the design. Hierarchy, measure, and breathing room do the heavy lifting before any decoration enters.
- Color is rare. One accent (Manuscript Ochre) is used on `<=10%` of any given screen; everything else is warm tinted neutral.
- Neutrals are warm-tinted in OKLCH. The whole site has a faint amber temperature, not a cold gray-blue cast.
- Components are precise and unornamented. Crisp edges, clear states, no decoration that doesn't serve a function.
- Motion responds to scroll, state, and theme. It never performs.
- Two themes live in parallel (dark default, light toggle), both built on the same semantic tokens via CSS variables.
- `prefers-reduced-motion` is respected globally.

## 2. Colors: The Reading Room Palette

The palette is intentionally austere. Tinted neutrals carry the room; the single accent appears as a marginal mark, never as a fill on more than a small primary surface. All values are OKLCH with low chroma at extremes (per shared design law).

### Primary

- **Manuscript Ochre** (`oklch(75% 0.13 75)`, deep `oklch(58% 0.12 70)`, hover `oklch(48% 0.11 65)`): The accent. Used on link hover, focus rings, the Contact submit button, the scroll-to-top button, the Resume button hover state, the highlighted "Kwae" half of the hero name, and any single-most-important active state in a component. Warm and considered; reads as editorial rather than tech-marketing. The accent has three steps so the same hue carries across text-hover, fill, and fill-hover roles without introducing a second hue.

### Neutral (Dark Mode, the default room)

- **Ink** (`oklch(13% 0.005 70)`): Page background everywhere. Warm tinted near-black; chroma 0.005 toward amber so the surface reads as paper-dark, not cold black.
- **Ink Deep** (`oklch(8% 0.005 70)`): Reserved for layered surfaces or deeper variants. Sparingly used today.
- **Paper** (`oklch(96% 0.005 75)`): Primary text and inverse-button fills (the Resume button). Warm near-white; same hue as Ink at higher lightness.
- **Paper Dim** (`oklch(83% 0.005 75)`): Body paragraphs. About, Bible verse, project descriptions, research prose.
- **Paper Soft** (`oklch(64% 0.005 70)`): Secondary text, metadata, location and duration lines, default footer link color, inactive tabs in Experience.
- **Paper Faint** (`oklch(48% 0.005 70)`): Smallest labels (uppercase tracking-wider), publication years, "More research notes will appear here." Reads as a typographic accent rather than a color.
- **Divider** (`oklch(20% 0.005 70)`): Hairlines under section headers, between research rows, project card borders, footer top border.
- **Divider Soft** (`oklch(27% 0.005 70)`): Input field borders, mobile-nav backgrounds, hover backgrounds in dropdown menus, status pill borders.

### Neutral (Light Mode)

Light mode is a warm cream paper, not a cold slate. The semantic tokens swap values via a single CSS variable override on `html.theme-light`; nothing in components changes class names.

- Ink swaps to `oklch(96% 0.005 75)` (warm cream page).
- Paper swaps to `oklch(20% 0.005 70)` (deep warm text).
- Paper Dim / Soft / Faint, Divider / Divider Soft are darkened symmetrically; Accent darkens to `oklch(55% 0.13 70)` for contrast on the cream surface.

### Named Rules

**The One Accent Rule.** Manuscript Ochre is the only accent. It carries link hover, focus rings, primary button fills (deep variant), and one or two signature typographic moments (the hero name). Never introduce a second hue, even at small scale.

**The Tinted-Paper Rule.** Pure `#000` and `#fff` do not appear in this codebase. Every neutral has chroma `0.005` toward hue 70 to 75 (amber direction). This is non-negotiable: it is the room's temperature.

**The 10-Percent Rule.** On any given screen, accent fills cover `<=10%` of the visible area. Above that ratio the system tips from Restrained into Committed, which is not this site.

## 3. Typography

**Display Font:** ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif (the platform's native sans; no custom font is shipped).
**Body Font:** Same as display.
**Label Font:** Same as display.

**Character:** A single system sans across the entire system. Hierarchy is carried entirely by weight contrast, scale, and the rare typographic motif (uppercase tracking-wider labels). The Reading Room aesthetic is achieved through restraint, not through font selection. A future iteration could introduce a content-first serif or wide-grotesk display for headlines without changing the body voice; for now, the single-family discipline is intentional.

### Hierarchy

- **Display Light** (300, clamp 2.25rem to 6rem, line-height 1.05, letter-spacing -0.01em): The first half of the hero name ("Twidy Kelvin"). Sets a quiet, attenuated tone before the weight jump.
- **Display Bold** (700, clamp 2.25rem to 6rem, line-height 1.05): The second half of the hero name ("Kwae") in Manuscript Ochre. The weight contrast on a single name is the site's signature typographic move.
- **Headline** (700, clamp 1.5rem to 1.875rem, line-height 1.2): Section titles: "Experience", "Research", "Projects", "Contact". No decorative underline.
- **Title** (600, clamp 1.125rem to 1.25rem, line-height 1.3): Project names, research item titles, active experience-tab labels, current position headings. Hovered titles shift to accent.
- **Body** (300, clamp 1rem to 1.125rem, line-height 1.65): About-section paragraphs, Bible verse, research prose, experience bullets. Capped at `max-w-prose` (roughly 65ch) wherever it appears at length. `text-pretty` applied to balance line endings.
- **Label** (600, 0.75rem, letter-spacing 0.05em, UPPERCASE via class, source written in Title Case): "SCHOOL" / "CONTACT" / "LINKS" / publication years / status pills. The site's most distinctive typographic moment after the hero name. Sentence-case in JSX, CSS handles the uppercase.

### Named Rules

**The Weight-Contrast Rule.** Hierarchy is carried by weight contrast (>=1.25 ratio between steps) before it is carried by size. The hero name's font-light to font-bold jump on a single line is the canonical example.

**The Body-Floor Rule.** Paragraph-length text is at least font-weight 300. font-weight 100 (Tailwind `font-thin`) is reserved for the briefest of decorative or single-line labels, if at all. The whole codebase was audited to lift font-thin paragraphs to font-light.

**The Label-as-Accent Rule.** Uppercase tracking-wider labels in Paper Faint are the reusable typographic accent. They function as the typographic equivalent of a marginal note: appear before reaching for color or rule lines.

**The Sentence-Case Source Rule.** Label text in JSX is written in Title Case ("School", "March 2025", "In progress"). The CSS class applies the uppercase transformation. This keeps source readable and lets the label component change visual case without touching content.

## 4. Elevation

The system is flat. Depth is conveyed through tonal contrast (Divider against Ink), 1px hairlines, and typographic hierarchy. Shadows have been removed where they were inert; what remains is intentional.

### Shadow Vocabulary

No ambient or elevated shadow tokens are defined. Cards, the navbar, and the scroll-to-top button have no `box-shadow`. The earlier `shadow-md` / `shadow-lg` declarations have been removed in the polish pass: they were invisible on the dark surface and added cost without benefit.

### Named Rules

**The Flat-By-Default Rule.** Surfaces are flat at rest. Depth comes from tonal contrast and hairlines, not from shadows. A future component that genuinely needs elevation (e.g., a popover or a tooltip) should introduce its own bounded shadow rather than reach for a global scale.

## 5. Components

### Buttons

- **Shape:** Two distinct radii by role. The Send Message and scroll-to-top buttons use **rounded-xl** (`0.75rem`). The Resume button uses **rounded-3xl** (`1.5rem`). The radii are role-coded: rectangular-soft for primary forms, pill-shaped for the resume CTA. This is intentional, not drift.
- **Primary (Send Message):** Manuscript Ochre Deep background, Paper text, padding `12px 24px`, rounded-xl, font-medium. Transition: background to Ochre Hover on hover, 200ms ease.
- **Disabled state:** opacity 60%, cursor not-allowed. Used during form submission.
- **Resume (white-on-dark inverse):** Paper background, Ink text, 1px Paper border, rounded-3xl, padding `8px 32px`. Hover: background shifts to Manuscript Ochre, border to Ochre, text stays Ink. The previous Anomaly Resume Green is resolved.
- **Scroll-to-top:** Manuscript Ochre Deep circular fill, padding `12px`, rounded-full. No transform-on-hover (the previous `scale-110` was removed).
- **Focus:** All buttons share `focus-visible` outline: 2px Manuscript Ochre, offset 4px. Never `outline: none` without replacement.

### Inputs / Fields

- **Style:** Ink background, Paper text, 1px Divider Soft border, rounded-xl, padding `12px`, font-light (lifted from font-thin).
- **Label:** Visible Paper Faint uppercase tracking-wider label above each input. Placeholders are example values, not labels.
- **Focus:** 2px Manuscript Ochre ring, Manuscript Ochre border. 200ms color transition.
- **Required:** HTML `required` attribute on all fields; no visual asterisk yet.

### Cards (Project)

- **Corner Style:** rounded-xl (`0.75rem`).
- **Background:** Ink.
- **Border:** 1px Divider, shifts to Manuscript Ochre on hover (200ms).
- **Shadow Strategy:** None.
- **Internal Padding:** `16px`.
- **Image:** 192px tall, object-cover, `group-hover:scale-105` over 300ms ease-out. Lazy-loaded. Reduced-motion users get no scale.
- **Content:** Title (600 weight) shifts to Manuscript Ochre on hover; description in Paper Dim font-light.
- **Focus:** 2px Manuscript Ochre outline on the link wrapper.

### Navigation

- **Style:** Fixed top, Ink background, full-width, padding `28px`, font-light. No shadow.
- **Logo:** "Twidy Kwae" wordmark left.
- **Right cluster:** theme toggle (sun/moon SVG, no rotation animation), hamburger.
- **Mobile menu:** Fixed dropdown, top-20 right-6, w-56, Divider background with 1px Divider Soft border, rounded-lg. Items in Paper, hover background to Divider Soft, hover text to Manuscript Ochre.
- **Theme toggle:** Adds `theme-transitioning` class to `<html>` for 280ms; CSS transitions all background/color/border across that window. After the window, transitions are removed so hover and focus remain snappy.
- **Smooth scroll:** Custom 800ms ease-out cubic. Reduced-motion users get an instant jump.
- **Keyboard:** Escape closes the menu. `aria-expanded` / `aria-controls` set on the trigger.

### Research Row (signature component)

- **Layout:** Three-column grid on desktop (`170px | 1fr | auto`); single column on mobile with the year/status pill stacked above the title. No card, no fill, no shadow.
- **Year cell:** Paper Faint, uppercase, tracking-wider, tabular-nums, font-semibold, 0.75rem.
- **Status pill (in-progress items):** Paper Soft text in a 1px Divider Soft border, rounded-sm, padding `4px 10px`. Non-interactive.
- **Title:** Title typography. Hovered title shifts to Manuscript Ochre.
- **Meta line:** Paper Soft, font-light, small.
- **Chevron:** 16px stroke-1.75 SVG, 90deg rotate on expand, 300ms ease-out.
- **Expand transition:** `grid-template-rows: 0fr -> 1fr` over 280ms `cubic-bezier(0.22, 1, 0.36, 1)`. Modern browser support: Chrome 117+, Safari 17.4+, Firefox 119+. Reduced-motion: instant.
- **One open at a time:** Clicking a second row collapses the first. Clicking the open row collapses it.
- **Focus:** `focus-visible` outline 2px Manuscript Ochre offset 4px on the row trigger.
- **Artifact links inside expanded content:** Primary link Paper font-medium, secondary Paper Soft font-light; both hover to Manuscript Ochre. `target="_blank" rel="noopener noreferrer"`.

### Experience Tab Pattern

- **Layout:** Grid `md:grid-cols-5`. Selected experience details span 4 columns; clickable company list takes 1 column.
- **Divider:** Vertical 1px Divider line between detail and list (desktop only).
- **List items:** Plain buttons. Active: Paper, font-semibold, `aria-pressed="true"`. Inactive: Paper Soft, font-light, hover Manuscript Ochre.
- **Bullets:** `list-disc`, `marker:text-paper-faint` so the markers read as a typographic accent.

### Bible Verse Block

- **Style:** Centered, italic, Paper Dim text, font-light, `text-pretty`. Attribution line "Matthew 6:34" in Paper Soft, font-light, no leading dash. No card, no background tint, no quote-graphic. The correct quiet treatment per PRODUCT.md.

### Status Pill

- **Style:** Paper Soft text in a 1px Divider Soft border, rounded-sm, padding `4px 10px`, uppercase, tracking-wider, font-semibold, tabular-nums. Non-interactive. Used in Research rows for in-progress items.

## 6. Do's and Don'ts

### Do:

- **Do** use the semantic tokens (`bg-ink`, `text-paper`, `text-accent`, `border-divider`) when adding new surfaces. Never reach back to Tailwind's `bg-black`, `text-gray-400`, or `text-blue-500` for new code: those names still exist in Tailwind, but they break the temperature of the room.
- **Do** keep Manuscript Ochre rare. The 10-Percent Rule is binding. If you find yourself filling a large area with accent, you're past Restrained; rework before shipping.
- **Do** lift any font-weight 100 paragraph text to font-light (300) or heavier.
- **Do** apply `text-balance` to headings of 2 to 4 words and `text-pretty` to multi-line body paragraphs.
- **Do** preserve the weight-contrast move on the hero name and the uppercase tracking-wider labels. These are the site's signature typographic moments.
- **Do** keep the Bible verse small, italic, in body voice. Faith is foundation, not foreground.
- **Do** keep motion in service of reading. Scroll-fade-in is appropriate. Hover scale on cards is appropriate at 1.02 to 1.05. Anything bigger performs.
- **Do** respect `prefers-reduced-motion` in every new GSAP, Framer Motion, or CSS animation: provide an instant or fade-only alternative.
- **Do** write copy in sentence case in source. CSS handles uppercase via `uppercase` plus `tracking-wider`.

### Don't:

- **Don't** reintroduce pure `#000` or `#fff` anywhere. Both are bugs in this codebase; everything is OKLCH tinted neutrals.
- **Don't** add a second hue. Manuscript Ochre is the only accent. Greens, blues, reds for "variety" break the One Accent Rule.
- **Don't** ship side-stripe borders. `border-left` or `border-right` greater than 1px as a colored accent is banned outright.
- **Don't** add gradient text. `background-clip: text` plus gradient is banned. Hierarchy uses weight and size.
- **Don't** add glassmorphism. No blurs on cards, no glass nav, no `backdrop-filter` as decoration.
- **Don't** ship the hero-metric template. Big number plus small label plus supporting stats plus gradient accent is the SaaS cliche PRODUCT.md anti-references by name.
- **Don't** repeat identical card grids beyond what already exists. The four-project grid is the one acceptable instance. Future surfaces need a different form (Research uses rows, not cards).
- **Don't** open with a modal. Modals are the first thought of a tired designer; exhaust inline / progressive disclosure first.
- **Don't** amplify the Bible verse into a design element. No oversized quotes, no scripture banners, no cross watermarks.
- **Don't** write "passionate developer," "results-driven," "innovative," "cutting-edge," or any phrase that could appear on a stock LinkedIn About page. The voice rules apply here verbatim.
- **Don't** animate CSS layout properties casually. The `grid-template-rows` expansion in Research is intentional and bounded; layout-property animation outside that case is banned.
- **Don't** use em dashes anywhere in copy. Commas, colons, semicolons, periods, or parentheses only. This rule applies to UX copy, JSX strings, and prose alike.
