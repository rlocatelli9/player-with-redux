# Contributing

This project follows a development pattern focused on simplicity,
predictability, and performance.

## Quick Setup

1. Install dependencies: `pnpm install --frozen-lockfile`
2. Run in development: `pnpm run start:dev`
3. Run local checks before opening a PR:
   - `pnpm run lint`
   - `pnpm run build`

## Project Structure

- `src/core`: global configuration (store, base hooks)
- `src/features`: domain code (player, todo)
- `src/shared`: reusable components and types

Rule: all feature business rules must stay inside
`src/features/<feature>`.

## Code Conventions

- Language: TypeScript
- Global state: Redux Toolkit (one slice per feature)
- Selectors: always export selectors with the slice
- React components: small and explicit responsibilities
- Imports: keep paths consistent and avoid circular dependencies

## Redux Pattern

- Slice per feature: `src/features/<feature>/store/slice.ts`
- Short behavior-oriented action names (`play`, `next`, `add`)
- Keep state serializable whenever possible
- Selectors by concern:
  - feature root selector
  - derived selectors for UI

## Definition of Done (DoD)

A task is only done when:

1. It satisfies the functional requirement
2. Build is not broken (`pnpm run build`)
3. Lint checks pass (`pnpm run lint`)
4. Documentation is updated when behavior changes
5. The PR describes context, changes, and validation

## Pull Requests

- Keep PRs small and focused on one goal
- Avoid mixing refactoring with new features in the same PR
- Describe regression risk and validation steps
- Use the PR template in `.github/pull_request_template.md`

## Commits

Recommended pattern (Conventional Commits):

- `feat: add player progress control`
- `fix: correct current lesson selection`
- `refactor: simplify player selectors`
- `docs: update architecture`
- `test: add reducer coverage`

You can configure the local commit template with:

`git config commit.template .gitmessage.txt`
