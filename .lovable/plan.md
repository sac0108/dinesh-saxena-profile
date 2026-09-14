# Establish the Dinesh Saxena brand-system foundation

## Scope
- Add one typed central brand configuration for the verified name, professional descriptor, phone, city, logo/portrait/favicon/OG slots, canonical URL, and structured social channels.
- Mark supplied identity/contact values as verified and leave every unconfirmed website, social URL, handle, logo, and OG image value explicitly pending with `null` values.
- Refactor the site navigation, hero/profile identity, About signature, professional-presence copy, footer, contact calls, and page metadata to read brand identity values from this configuration.
- Add a restrained Digital Presence area in the footer that renders only verified social links; pending channels remain invisible rather than showing placeholders or fake handles.
- Preserve the existing profile portrait separately from the immutable core-logo slot. Keep the current favicon as a temporary site icon while the official logo/favicon/OG artwork slots remain empty.
- Write comprehensive brand guidelines covering the D monogram and illustrated portrait direction, coffee-only rule, hospitality heritage motifs, logo variants, palette, typography, spacing, sizing, messaging, voice, digital use, Taj non-affiliation, verification workflow, and governance.
- Do not change curriculum, inquiry validation, animations, phone behavior, or unrelated layout.

## Technical details
- Export small helpers for telephone links, canonical URL resolution, verified social filtering, and optional media metadata so all consumers use identical values.
- Keep asset slots nullable and documented; no invented URL or generated substitute will be introduced.
- Verify with TypeScript, the application build, source scans for duplicated brand values, and desktop/mobile browser checks.
