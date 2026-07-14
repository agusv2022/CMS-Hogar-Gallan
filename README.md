# Hogar Gallán — web

Astro + Tailwind. Sitio estático.

## Desarrollo
```bash
npm install
npm run dev
```

## Despliegue en Cloudflare Pages
En el panel de Cloudflare Pages, conecta el repo de GitHub y usa:

| Ajuste                  | Valor           |
|-------------------------|-----------------|
| Framework preset        | Astro           |
| Build command           | `npm run build` |
| Build output directory  | `dist`          |
| Node version (variable) | `NODE_VERSION` = `20` |

## Imágenes

Las fotos viven en `src/images/` y **se importan** en el componente:

```astro
import casa01 from '../images/casa-01.jpg';
<Image src={casa01} alt="..." />
```

Nunca escribas `<img src="/src/images/foto.jpg">`. Esa ruta solo existe en tu
disco: `/src/` no se publica. Por eso las imágenes se veían en local y
desaparecían en Cloudflare.

Los nombres de archivo no llevan espacios, a propósito: los espacios rompen los
imports.

Para añadir una foto: cópiala a `src/images/`, impórtala arriba en
`src/pages/index.astro` y añádela al array `galeria`.

## Contraseña del gestor

El panel del gestor es una demo que guarda en `localStorage` del navegador, con
la contraseña escrita en el código. **No protege nada.** Sirve para llevar la
cuenta tú mismo, no para datos de huéspedes reales. Si vas a guardar datos de
clientes, hace falta backend y autenticación de verdad.
