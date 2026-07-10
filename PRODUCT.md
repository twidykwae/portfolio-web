# Product

## Register

brand

## Users

Primary: graduate school admissions readers, fellowship committees, and research advisors evaluating Twidy Kelvin Kwae for advanced study in AI/ML and adjacent fields. They review at speed (often dozens of applicants in a sitting), on a mix of laptop and phone screens, and form impressions in seconds before deciding whether to read more. Secondary: faith-aligned organizations, mission-tech founders, and recruiters in data science / IT consulting who arrive via referral or search.

The job they're trying to get done: decide quickly whether Twidy's work warrants a closer look, then have a clear path into the actual projects on GitHub. They are not looking for marketing; they are looking for substance they can verify.

## Product Purpose

A personal portfolio that functions as the front door to Twidy's technical work. The single most important action is exploring projects on GitHub, so every design decision is measured against whether it shortens the path from "landed on the page" to "opened the repo."

The site exists to communicate three things in fewer than ten seconds of reading: (1) who Twidy is academically and technically, (2) what specifically he has built and worked on, (3) what kind of person, technologist, and collaborator he is. Success looks like an admissions reader bookmarking a project link, downloading the resume as a follow-up, or writing the name down to mention in a committee discussion.

## Brand Personality

Rigorous, technical, precise. Confident without being loud. The voice should read like a careful student-researcher writing about their own work: specific verbs, concrete metrics, no filler. Three-word personality: **substantive, considered, distinctive.**

Faith and purpose are part of the foundation but never the headline. They show up the way a researcher's values show up in choice of problems, not the way an evangelist's values show up on a billboard. The Bible verse already on the site is the right register: small, italic, quiet.

Tone in copy: direct, specific, lightly warm. No "passionate developer," no "results-driven," no resume-cliche. When in doubt, cut adjectives.

## Anti-references

This site must explicitly NOT look or feel like:

- **The generic dev-portfolio template.** Dark background + one blue accent + identical project cards + "Hi, I'm — a passionate developer building cool things." This is the default everyone ships, and the current implementation drifts toward it. Breaking out of this template is a primary design goal.
- **Bootcamp / Awwwards-style splash.** Heavy parallax, scroll hijacking, gradient text, glassmorphism, animations for animation's sake. Motion should serve reading, not perform.
- **Religious or inspirational kitsch.** No oversized verse banners, no stock cross imagery, no "Jesus first" graphics. Faith is woven in quietly or not visible at all on a given screen.

## Design Principles

1. **Show, don't claim.** Every project entry should let the work make the case: a metric, a stack note, a one-sentence technical claim. Cut adjectives like "passionate," "innovative," "cutting-edge." If a recruiter or admissions reader could not paraphrase the technical substance after one read, the copy has failed.

2. **Project depth over project breadth.** Better four projects with visible technical detail than twelve thumbnails. The Projects section is the conversion surface; treat each card as a small case study, not a tile.

3. **Faith as foundation, not foreground.** The Bible verse, the mention of serving missions, the line about following Christ all stay. They are part of the substance. They should never be amplified into design elements (no verse-as-hero, no cross watermarks). Quiet conviction reads stronger than loud declaration.

4. **Readable like a thoughtful note.** Channel the content-first feel of a careful technical blog. Reward the reader who actually reads. Generous line height, restrained motion, typography that creates hierarchy without shouting. Notion-style calm meets dev-portfolio rigor.

5. **Resist the dev-portfolio default.** When a design choice feels like "what every other CS student's portfolio does," pick the second-most-obvious option. Specifically: the blue-on-black accent palette is a category reflex and should be reworked. The card grid for projects should be reconsidered.

## Accessibility & Inclusion

No formal WCAG target, but apply reasonable defaults: text contrast that holds up on aging monitors and outdoor phone use, keyboard reachability for all interactive elements, `prefers-reduced-motion` respected by all GSAP and Framer Motion animations. Light/dark toggle stays. Photography page should keep image alt text accurate, not decorative-placeholder.

## Open Threads

- **Research experience section.** Twidy wants to add a dedicated Research section between Experience and Projects (or replacing part of Experience). Format and content to be designed in a future shape/craft pass; capture publications, posters, lab work, or in-progress research with the same content-first treatment as Projects.
