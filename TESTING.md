# TESTING

## Framework

- Vitest
- Testing Library
- JSDOM

## Run

```bash
npm run test
```

## Scope

- Unit and component tests live alongside the React feature they verify.
- For interactive studio pages, prefer user-facing tests that click buttons, fill fields, and assert visible states.
- When a bug is fixed, add a regression test that reproduces the broken interaction first.
