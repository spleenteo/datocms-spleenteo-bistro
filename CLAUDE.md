# Bistro Spleenteo

Astro project with DatoCMS integration, React components, and Tailwind CSS.

## Tech Stack
- Astro 5+ (SSR mode)
- React components
- Tailwind CSS (applyBaseStyles: false)
- DatoCMS for content management
- TypeScript and Tada generated

## Project Structure
- `/src/components` - React components
- Every component has a directory with:
  - Fragment
  - Component
  - index (to define the component)
- `/src/layouts` - Astro layouts
- `/src/pages` - Astro pages/routes
- `~` alias points to `/src`

## Conventions
- Direct, technical communication style
- DatoCMS integration patterns
- Don't recreate typescript props since Tada already does

# Project Configuration

## Package Manager
Use `bun` instead of `npm` for all package management tasks.

Examples:
- `bun install` instead of `npm install`
- `bun run dev` instead of `npm run dev`
- `bun add <package>` instead of `npm install <package>`
- `bun remove <package>` instead of `npm uninstall <package>`

