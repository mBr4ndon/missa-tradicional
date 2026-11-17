# Missa Tradicional Portugal

Vite + React + TypeScript + Tailwind v4 + React Router.

- `npm install` e `npm run dev` para desenvolver, `npm run build` para gerar `dist`
- Todo o texto está em `src/content.ts`
- As fotografias estão listadas em `src/images.json`. Por agora vêm do CDN do Wix.
  Para as guardar no projeto: `npm run images`, depois fazer commit de `public/images`
  e de `src/images.ts` (o script passa `LOCAL_IMAGES` para `true`).
- Vercel: framework Vite, build `npm run build`, output `dist`. `vercel.json` reencaminha
  todas as rotas para `index.html`.
