# aynilaybaba

Portfolio site for Aynil Aybaba — psychologist, writer, and speaker.

## Stack

- React 19 + Vite 8
- React Router 7 (routes: `/`, `/about`, `/services`, `/books`, `/contact`)
- Tailwind CSS v4
- ESLint + Prettier

## Requirements

Node 24 (see `.nvmrc` — run `nvm use` before installing).

## Scripts

```
npm run dev             # start dev server
npm run build            # production build
npm run preview          # preview production build
npm run lint              # lint
npm run format            # format with Prettier
npm run format:check      # check formatting without writing
```

## Structure

- `src/pages/` — one file per route
- `src/components/` — shared layout pieces (Nav, Footer, Hero, Layout)
- `src/components/ui/` — reusable UI primitives (Button, Card, Eyebrow, SectionHeading)
- `src/assets/images/` — drop site images here and import them directly in components
