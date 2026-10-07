# Fundación Manos Guerreras

Sitio web estático creado con React, TypeScript y Vite.

## Requisitos

- Node.js 22.12 o superior (la versión 24 está indicada en `.nvmrc`).
- npm.

## Desarrollo local

```sh
npm ci
npm run dev
```

## Validación de producción

```sh
npm run lint
npm run build
npm run preview
```

El sitio compilado queda en `dist/`.

## Despliegue en Vercel

El archivo `vercel.json` configura Vercel para instalar dependencias con `npm ci`, ejecutar `npm run build` y publicar `dist/`.

1. Sube este proyecto a un repositorio Git (GitHub, GitLab o Bitbucket).
2. Importa el repositorio desde el panel de Vercel y conserva la configuración detectada.
3. Pulsa **Deploy**. No se requieren variables de entorno para este sitio.

También puedes desplegar desde la carpeta del proyecto con la CLI de Vercel (`vercel` y luego `vercel --prod`).

## Dominio y buscadores

Cuando tengas un dominio definitivo, configúralo en Vercel y actualiza la información de dominio/canonical y el sitemap antes de enviarlo a buscadores. `public/robots.txt` permite la indexación del sitio.
