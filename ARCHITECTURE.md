# Architecture

This document defines the key technical decisions used to keep the
project consistent.

## Overview

Main stack:

- React + TypeScript + Vite
- Redux Toolkit for global state
- Biome for code quality and formatting

## Layer Organization (Feature-First structure)

- `src/core`
  - Global configuration (store, base hooks)
- `src/features`
  - Business domains isolated by folder
  - Each feature groups `components/`, `store/`, `utils/`, `services/`,
    `hooks/`, and `index.tsx`
- `src/shared`
  - Reusable types and components
  
```sh
src/
├── assets/                      # Tailwind v4 globals + Imagens
├── common/                      # UI KIT + UTILS ("Shared")
│   ├── components/              # Button.tsx, Modal.tsx
│   ├── types/                   # Global types
│   └── services/                # API Client base
├── features/                    # DOMAIN
│   ├── auth/                    # All about Auth (UI + Store + API)
│   └── video-player/            # All about Player
│       ├── components/          # Player, Controls, List
│       ├── store/               # Redux slice (state + actions)
│       ├── services/            # API call specific
│       └── hooks/               # hook custom logic.ts
├── store/                       # REDUX
│   ├── rootReducer.ts           # Import the slices of each feature
│   └── index.ts                 # Store
└── pages/                       # Routes (import direct of features/)
```

## Global State vs Local State

- Use Redux for shared state across multiple components/routes.
- Use local state (`useState`) for temporary UI-only state.

Practical rule:

- If state affects more than one component in a feature, evaluate a
  slice.
- If state is strictly visual and disposable, keep it local.

## Redux Toolkit Pattern

- Central store in `src/core/store/index.ts`
- One slice per feature in `src/features/<feature>/store/slice.ts`
- Selectors exported from the same slice file

## Selection and Performance

- Avoid coupling components directly to raw state when transformation is
  needed.
- Prioritize dedicated selectors for each component's data needs.
- For high-frequency state (player), evolve to memoized selectors as
  needed.

## Decision Conventions

When multiple technical options are valid, prefer the one with:

1. Lower coupling across features
2. Better onboarding readability
3. Lower regression risk
4. Lower maintenance cost
