# Copilot Instructions

## Build, lint, and validation

- Use **Node 22** locally (`.nvmrc`). CI installs dependencies with **Bun** and runs the repo through Bun-backed scripts.
- Install dependencies: `bun install`
- Start local development: `bun dev`
- Lint the whole repo: `bun lint`
- Run Biome with fixes: `bun check`
- Format the repo: `bun format`
- Create a production build: `bun run build`
- Lint a single file with the same toolchain: `bunx biome check components/contact.tsx`
- Workspace MCP config lives in `.vscode/mcp.json` and enables the Playwright MCP server through `npx -y @microsoft/mcp-server-playwright`.
- There is **no automated test suite configured yet**: there is no `test` script in `package.json` and no `*.test.*` / `*.spec.*` files in the repo. For now, validate changes with `bun lint` and `bun run build`.

## High-level architecture

- This is a **Next.js 16 App Router** portfolio site built as a single landing page. `app/layout.tsx` provides the global shell and providers, while `app/page.tsx` composes the page sections in order: intro, about, skills, experience, and contact.
- Navigation state is shared through `context/active-section-context.tsx` and `lib/hooks.ts`. Section components call `useSectionInView(...)`, and the header plus intro CTA update the same context when users click anchor links. Keep section names, hashes, and DOM `id` values aligned.
- The site is intentionally **data-driven** from `lib/data.ts`. Header links, the experience timeline, and the skills list all render from exported `as const` arrays. `lib/types.ts` derives `SectionName` from `links`, so renaming sections in `lib/data.ts` changes the type surface too.
- Theme state lives in `context/theme-context.tsx` and is applied by toggling the `dark` class on `document.documentElement`. Components that need theme-aware styling, such as `components/timeline.tsx`, read from `useTheme()`.
- The contact flow spans client and server files: `components/contact.tsx` uses a server action as the form `action`, `actions/send-email.ts` validates `FormData` and sends through Resend, and `email/contact-form-email.tsx` defines the email body with `@react-email/components`.
- Styling uses **Tailwind CSS v4** through CSS imports in `app/globals.css` plus `@tailwindcss/postcss` in `postcss.config.mjs`. The project also relies on a few shared global styles there, including `.borderBlack` and the `--line-color` variable used by the timeline theme.

## Key conventions

- Use **Biome** for formatting and linting, not ESLint or Prettier. `biome.json` enforces **2-space indentation**, **double quotes**, and **no semicolons**.
- Most visual sections are **client components** because they use `framer-motion`, React hooks, or shared context. Keep pure data/helper modules in `lib/` server-safe unless they actually need `"use client"`.
- Reuse `useSectionInView(sectionName, options)` for section tracking instead of adding new Intersection Observer logic. When a click should immediately change the active nav item, also update `timeOfLastClick` in `ActiveSectionContext` to avoid the scroll observer overriding that state too early.
- Keep section metadata centralized in `lib/data.ts` and typed with `as const`; do not duplicate section-name unions by hand.
- For server actions, keep validation small and explicit by reusing `validateString` and `getErrorMessage` from `lib/utils.ts`.
- If you change the contact form, keep the client field names (`senderEmail`, `message`) synchronized with `actions/send-email.ts`, because the server action reads those exact `FormData` keys.
