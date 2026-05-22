# Project Context: Krittimat

## Overview

Krittimat is a bilingual AI tools directory built with Next.js App Router. It is designed to present AI tools, prompts, and tutorials in both English (`en`) and Assamese (`as`).

The current project is a migrated codebase: it appears to have started in an older Vite-style structure and has been moved into a Next.js 16 structure. The app now builds successfully and the current working architecture is based on localized App Router routes under `src/app/[lang]`.

This document is meant as a handoff file for any LLM or developer so they can understand the project quickly and make changes safely.

## Stack

- Framework: Next.js 16
- UI: React 19
- Styling: Tailwind CSS
- Search: Fuse.js
- Language mode: mixed JavaScript + TypeScript
- Current data source: local JSON files

## Product Purpose

The app is an AI directory website with bilingual content. It includes:

- AI tools listing
- Tool detail pages
- Category navigation
- Prompt collection
- Tutorial collection
- Basic localized content pages such as About, Privacy, Terms, Blog, and Learn AI

The main user-facing goal is to help people browse and discover AI tools and related learning resources in English and Assamese.

## Supported Languages

Configured in [src/config/i18n.ts](/d:/as/krittimat/src/config/i18n.ts):

- `en` = English
- `as` = Assamese

Default locale:

- `en`

Locale behavior:

- Requests without locale are redirected to `/{locale}`
- Locale is detected from:
  - `NEXT_LOCALE` cookie
  - `accept-language` header
  - fallback default locale

Locale redirect logic lives in [src/proxy.ts](/d:/as/krittimat/src/proxy.ts).

## Current App Structure

### Root Shell

- [src/app/layout.jsx](/d:/as/krittimat/src/app/layout.jsx)

This defines the root HTML/body shell and imports global styles.

### Localized Shell

- [src/app/[lang]/layout.jsx](/d:/as/krittimat/src/app/[lang]/layout.jsx)

This wraps all localized routes and renders:

- `Header`
- page content
- `Footer`

### Main Routes

- Home: [src/app/[lang]/page.jsx](/d:/as/krittimat/src/app/[lang]/page.jsx)
- Tools listing: [src/app/[lang]/tools/page.jsx](/d:/as/krittimat/src/app/[lang]/tools/page.jsx)
- Tool detail: [src/app/[lang]/tools/[id]/page.jsx](/d:/as/krittimat/src/app/[lang]/tools/[id]/page.jsx)
- Prompts: [src/app/[lang]/prompts/page.jsx](/d:/as/krittimat/src/app/[lang]/prompts/page.jsx)
- Learn AI: [src/app/[lang]/learnai/page.jsx](/d:/as/krittimat/src/app/[lang]/learnai/page.jsx)
- About: [src/app/[lang]/about/page.jsx](/d:/as/krittimat/src/app/[lang]/about/page.jsx)
- Blog: [src/app/[lang]/blog/page.jsx](/d:/as/krittimat/src/app/[lang]/blog/page.jsx)
- Privacy: [src/app/[lang]/privacy/page.jsx](/d:/as/krittimat/src/app/[lang]/privacy/page.jsx)
- Terms: [src/app/[lang]/terms/page.jsx](/d:/as/krittimat/src/app/[lang]/terms/page.jsx)

### Shared Components

- Layout components: [src/components/layout](/d:/as/krittimat/src/components/layout)
- Feature components: [src/features/directory/components](/d:/as/krittimat/src/features/directory/components)

Important feature components include:

- `HomeView`
- `HeroSection`
- `CategoriesSection`
- `TrendingSection`
- `ToolCard`
- `CategoryNav`
- `SearchBar`
- `NewsletterForm`

## Data Model

The app currently uses JSON files as the source of truth.

### Content Files

- [src/data/tools.json](/d:/as/krittimat/src/data/tools.json)
- [src/data/categories.json](/d:/as/krittimat/src/data/categories.json)
- [src/data/prompts.json](/d:/as/krittimat/src/data/prompts.json)
- [src/data/tutorials.json](/d:/as/krittimat/src/data/tutorials.json)

### Locale Dictionaries

- [src/locales/en.json](/d:/as/krittimat/src/locales/en.json)
- [src/locales/as.json](/d:/as/krittimat/src/locales/as.json)

### Shared Data Exports

- [src/data/index.ts](/d:/as/krittimat/src/data/index.ts)

## Data and Service Layer

There is an early abstraction layer for scalability.

### Config

- [src/config/dataSource.ts](/d:/as/krittimat/src/config/dataSource.ts)

The project supports a configurable data source:

- `json`
- `database`

At the moment, the app uses `json`.

### Service Interface

- [src/services/dataService.ts](/d:/as/krittimat/src/services/dataService.ts)

Defines the shared data-service interface for:

- tools
- categories
- prompts
- tutorials

### JSON Service

- [src/services/jsonDataService.ts](/d:/as/krittimat/src/services/jsonDataService.ts)

This loads JSON data lazily and exposes methods like:

- `getTools`
- `getToolById`
- `getToolsByCategory`
- `searchTools`
- `getCategories`
- `getPrompts`
- `getTutorials`

### Data Service Factory

- [src/services/dataServiceFactory.ts](/d:/as/krittimat/src/services/dataServiceFactory.ts)

This is the correct shared singleton entrypoint for data access.

### Repositories

- [src/repositories/toolsRepository.ts](/d:/as/krittimat/src/repositories/toolsRepository.ts)

There is a repository layer present, but it is still partial and not yet used consistently across all routes/pages.

## Search

### UI

- [src/features/directory/components/SearchBar.jsx](/d:/as/krittimat/src/features/directory/components/SearchBar.jsx)

### Search Utility

- [src/lib/search.js](/d:/as/krittimat/src/lib/search.js)

Search uses Fuse.js and indexes tools, prompts, and tutorials.

Important warning:

- The search utility still contains old route patterns such as `/ai-tools/...` and `/tutorials/...`
- Those paths do not fully match the current localized Next.js route structure
- So build is passing, but search navigation still needs cleanup before calling the app fully production-ready

## Types

Minimal shared types exist in:

- [src/types/index.ts](/d:/as/krittimat/src/types/index.ts)
- [src/types/tool.ts](/d:/as/krittimat/src/types/tool.ts)
- [src/types/category.ts](/d:/as/krittimat/src/types/category.ts)
- [src/types/api.ts](/d:/as/krittimat/src/types/api.ts)

These cover the current JSON-backed model:

- `Tool`
- `Category`
- `Prompt`
- `Tutorial`

The project is not yet fully typed. Important runtime files still use `.jsx` and `.js`.

## What Was Recently Fixed

The following structural issues were repaired without changing the actual content:

- Broken imports that still pointed to old `utils/*.json` paths
- Wrong layout imports for `Header` and `Footer`
- Invalid barrel exports in component/lib index files
- Broken repository/service imports that pointed to the wrong data-service module
- Missing shared type definitions required for successful TypeScript build

Result:

- `npm run build` now passes successfully

## Current Strengths

- The app now builds successfully
- The route structure is understandable
- Locale handling is centralized
- Content is clearly separated into JSON files
- There is already a path toward future database migration
- Feature components are grouped reasonably well

## Current Weaknesses

The project works, but it is not fully polished yet.

Main weaknesses:

- The migration from the older structure is not completely cleaned up
- Search links are not fully aligned with the current localized route structure
- Some pages directly import JSON instead of consistently using repositories/services
- The codebase is mixed JS/TS, so type safety is incomplete
- Some files are placeholders or lightly structured rather than fully matured
- No visible automated tests were found
- No lint script is present in `package.json`

## Production Readiness Assessment

### Build Status

- Build-ready: yes
- Deployable as a working Next.js app: yes

### Production-Ready Assessment

Not fully production-ready yet.

Reason:

- The structure is good enough to continue development safely
- The app compiles and routes are generated correctly
- But there are still migration leftovers and route-consistency issues
- Search behavior and some internal links need another cleanup pass
- The architecture is headed in the right direction, but not fully hardened

### Best Description of Current State

This is a working, scalable foundation rather than a fully finished production architecture.

## Scalability Assessment

### Scalable Parts

- App Router layout
- Locale-based route segmentation
- Data service abstraction
- JSON content separation
- Feature-based component grouping

### Limits to Scalability Right Now

- Direct JSON imports in route components
- Partial rather than complete repository/service adoption
- Mixed JS/TS codebase
- Missing validation for content shape
- Missing test and lint pipeline

## Recommended Next Improvements

If continuing this project, the best next steps are:

1. Fix all search-generated URLs to use the current locale-aware route structure.
2. Finish cleaning migration leftovers from the old app structure.
3. Move page-level data access to repositories/services consistently.
4. Convert important `.jsx` files to `.tsx`.
5. Add schema validation for JSON content.
6. Add lint and test scripts in `package.json`.
7. Review hardcoded placeholder-like UI text in some detail views and make it data-driven where appropriate.

## Safe Editing Guidance for Any LLM

If another LLM edits this project, it should follow these rules:

1. Do not change actual content in JSON/locales unless explicitly asked.
2. Prefer structural fixes over rewriting visible text.
3. Keep localized route behavior under `src/app/[lang]`.
4. Preserve the bilingual English/Assamese model.
5. Prefer using [src/services/dataServiceFactory.ts](/d:/as/krittimat/src/services/dataServiceFactory.ts) if expanding the data layer.
6. Be careful with old Vite-era route remnants, especially inside search and internal links.
7. If adding new pages, add them under `src/app/[lang]` unless there is a strong reason not to.

## Short Summary

Krittimat is a bilingual Next.js AI tools directory using JSON-based content and localized App Router pages. It currently builds successfully and has a workable, fairly scalable structure, but it still needs cleanup before being considered fully production-ready. The most important remaining gaps are route consistency, search link correctness, stronger typing, and final migration cleanup.
