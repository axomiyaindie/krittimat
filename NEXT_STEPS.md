# Next Steps: Krittimat

## Goal

This document lists the best next actions to take Krittimat from a working bilingual Next.js app to a cleaner, more scalable, and more production-ready product.

It is ordered by priority, not by difficulty.

## Current State

Right now:

- The app builds successfully
- The bilingual route structure works
- Core pages are present
- JSON content is connected correctly
- The project is usable as a foundation

But:

- Some migration leftovers remain
- Some route/link behavior is still inconsistent
- Search paths are not fully aligned with the current localized app structure
- Typing and architecture are only partially matured

## Priority 1: Fix Route Consistency

### Why this matters

The app has already moved to localized routes like:

- `/en/tools`
- `/as/tools`
- `/en/prompts`

But some utilities still generate older route shapes. This is the biggest gap between “builds” and “fully trustworthy in production.”

### What to do

1. Audit all internal links across the app.
2. Replace any old non-localized paths with locale-aware routes.
3. Make sure search results always point to valid App Router pages.
4. Ensure every content type has one canonical route pattern.

### Files to review first

- [src/lib/search.js](/d:/as/krittimat/src/lib/search.js)
- [src/features/directory/components/SearchBar.jsx](/d:/as/krittimat/src/features/directory/components/SearchBar.jsx)
- [src/app/[lang]/tools/page.jsx](/d:/as/krittimat/src/app/[lang]/tools/page.jsx)
- [src/app/[lang]/tools/[id]/page.jsx](/d:/as/krittimat/src/app/[lang]/tools/[id]/page.jsx)
- [src/app/[lang]/prompts/page.jsx](/d:/as/krittimat/src/app/[lang]/prompts/page.jsx)
- [src/app/[lang]/learnai/page.jsx](/d:/as/krittimat/src/app/[lang]/learnai/page.jsx)

### Desired outcome

- No component or utility should link to old Vite-era or non-localized paths
- All app navigation should respect the current `lang`

## Priority 2: Finish Migration Cleanup

### Why this matters

The repo shows signs of an old project structure being replaced by a new one. That is normal during migration, but it creates confusion for future edits and increases the chance of accidental regressions.

### What to do

1. Identify legacy files that are no longer part of the live Next.js app.
2. Remove dead files only after confirming nothing imports them.
3. Clean up duplicate concepts that exist in both old and new locations.
4. Remove placeholder barrels or empty files that are no longer useful.

### Areas to inspect

- old Vite-era routes/components if still present in git history or workspace
- mixed old path habits in utilities
- empty config or placeholder files

### Desired outcome

- The repo should reflect one clear architecture, not two partially overlapping ones

## Priority 3: Standardize Data Access

### Why this matters

Some pages still import JSON directly, while the project also has a service/repository layer. Both approaches can work, but mixing them makes future growth messier.

### What to do

1. Decide on one preferred pattern for app data access.
2. Prefer the service/factory/repository approach for scalability.
3. Refactor page-level JSON imports to use shared data access methods where it improves consistency.
4. Keep direct JSON imports only if you intentionally want a lightweight static-only approach.

### Files to review first

- [src/services/dataService.ts](/d:/as/krittimat/src/services/dataService.ts)
- [src/services/jsonDataService.ts](/d:/as/krittimat/src/services/jsonDataService.ts)
- [src/services/dataServiceFactory.ts](/d:/as/krittimat/src/services/dataServiceFactory.ts)
- [src/repositories/toolsRepository.ts](/d:/as/krittimat/src/repositories/toolsRepository.ts)
- route files under [src/app/[lang]](/d:/as/krittimat/src/app/[lang])

### Recommended direction

Use the existing `dataServiceFactory` pattern as the single shared entrypoint if the app is expected to grow.

### Desired outcome

- Data access becomes predictable
- Future migration from JSON to database becomes easier

## Priority 4: Improve Type Safety

### Why this matters

The app currently mixes `.js`, `.jsx`, `.ts`, and minimal types. That is acceptable for now, but it limits confidence when making bigger changes.

### What to do

1. Convert the most important route and data files from `.jsx` to `.tsx`.
2. Expand shared type definitions where real fields are used.
3. Type props for important shared components.
4. Reduce implicit `any` behavior over time.

### Best files to convert first

- [src/app/[lang]/tools/page.jsx](/d:/as/krittimat/src/app/[lang]/tools/page.jsx)
- [src/app/[lang]/tools/[id]/page.jsx](/d:/as/krittimat/src/app/[lang]/tools/[id]/page.jsx)
- [src/features/directory/components/ToolCard.jsx](/d:/as/krittimat/src/features/directory/components/ToolCard.jsx)
- [src/features/directory/components/SearchBar.jsx](/d:/as/krittimat/src/features/directory/components/SearchBar.jsx)
- [src/features/directory/components/HomeView.jsx](/d:/as/krittimat/src/features/directory/components/HomeView.jsx)

### Desired outcome

- Safer refactors
- Better editor support
- Lower regression risk

## Priority 5: Make Search Production-Safe

### Why this matters

Search is a user-facing feature. Even if the app builds, broken search links or inconsistent results will immediately feel unpolished.

### What to do

1. Make search results locale-aware.
2. Ensure each result item maps to a real existing page.
3. Review whether prompt/tutorial result targets are correct.
4. If needed, move search mapping into a dedicated typed helper.

### Files to review

- [src/lib/search.js](/d:/as/krittimat/src/lib/search.js)
- [src/features/directory/components/SearchBar.jsx](/d:/as/krittimat/src/features/directory/components/SearchBar.jsx)

### Desired outcome

- Search should feel native to the actual app, not inherited from an older route system

## Priority 6: Add Content Validation

### Why this matters

The site depends heavily on JSON content. If someone edits JSON incorrectly, production pages can break silently or behave strangely.

### What to do

1. Add schema validation for tools, categories, prompts, and tutorials.
2. Validate JSON during build or CI.
3. Surface readable errors when content shape is invalid.

### Good future options

- lightweight custom validators
- `zod`
- build-time validation scripts

### Desired outcome

- Content edits become safer
- LLM-generated JSON changes become much less risky

## Priority 7: Add Linting and Tests

### Why this matters

A project can work without tests for a while, but production readiness improves a lot once routine mistakes are caught automatically.

### What to do

1. Add a lint script to `package.json`
2. Add at least a few smoke tests
3. Add route/render sanity tests for the most important pages
4. Add search behavior checks if search stays client-side

### Minimum useful coverage

- home page renders
- tools list renders
- tool detail renders for a known ID
- locale redirect works
- search returns valid hrefs

### Desired outcome

- Safer deployments
- Faster iteration

## Priority 8: Review Placeholder or Hardcoded UI Content

### Why this matters

Some parts of the UI appear more decorative or placeholder-like than truly data-driven. That is fine for a prototype, but production content should be intentional.

### What to do

1. Review tool detail page sections like:
   - key features
   - pros
   - cons
   - rating text
2. Decide whether they should:
   - come from JSON
   - be removed
   - be rewritten as generic UI copy
3. Avoid presenting invented facts as if they are real structured data

### File to inspect first

- [src/app/[lang]/tools/[id]/page.jsx](/d:/as/krittimat/src/app/[lang]/tools/[id]/page.jsx)

### Desired outcome

- The app feels trustworthy, not padded

## Priority 9: Improve Config Clarity

### Why this matters

A few config files are present but minimal. As the app grows, clearer config boundaries help a lot.

### What to do

1. Fill or remove empty/unused config files
2. Centralize app-wide constants
3. Document environment variables
4. Keep site metadata in one clear place

### Files to review

- [src/config/dataSource.ts](/d:/as/krittimat/src/config/dataSource.ts)
- [src/config/i18n.ts](/d:/as/krittimat/src/config/i18n.ts)
- [src/config/siteConfig.ts](/d:/as/krittimat/src/config/siteConfig.ts)
- `.env.example`

### Desired outcome

- Easier onboarding
- Less guesswork for future contributors or LLMs

## Suggested Execution Order

If working in practical sequence, use this order:

1. Fix all route inconsistencies
2. Repair search URLs and behavior
3. Clean migration leftovers
4. Standardize data access
5. Add validation for JSON content
6. Improve types on important routes/components
7. Add linting and tests
8. Review placeholder/hardcoded UI sections
9. Final config and documentation polish

## What “Production Ready” Should Mean Here

For this project, a reasonable production-ready bar is:

- Builds cleanly
- All internal links are correct
- Locale redirects work reliably
- Search results open real pages
- Content shape is validated
- No obvious legacy structure confusion remains
- Important pages are at least lightly tested
- Shared data access pattern is consistent

## Best Immediate Next Task

If only one thing should be done next, do this:

Fix all route generation and search links so every internal navigation path is valid and locale-aware.

That will give the biggest jump in real-world reliability.

## Short Summary

Krittimat is already a working base. The next phase is not about rewriting everything. It is about tightening consistency, removing migration residue, making data access more intentional, and adding enough validation/testing so future edits are safe.
