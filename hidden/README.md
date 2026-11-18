# Temporarily unpublished website assets

Primimix and Matching Disconnected Shapes are hidden during paper review.
Their definitions and descriptions remain in `src/`, but `hidden: true` in
`src/lib/projects.ts` excludes them from project listings and generated routes.

Their report, images, and models are stored under `hidden/public/`, outside
Astro's served `public/` directory. The CV is also stored here because it
describes both projects; its download links are temporarily removed.

To restore these projects after review:

1. Remove their `hidden: true` flags in `src/lib/projects.ts`.
2. Move the corresponding files from `hidden/public/` back to `public/`.
3. Restore the English and Spanish homepage news, DI-Lab achievement, and CV
   download links as appropriate.
4. Run `npm run build` before publishing.

This directory is retained in Git for restoration; it is not included in the
published website.
