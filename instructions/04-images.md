# Working with Images

## Two Image Locations

### `public/images/` — Static assets
Served at the root URL. Reference with an absolute path string:
```jsx
<img src="/images/hero.jpg" alt="Hero" />
```
Best for: favicons, OG images, assets referenced in CSS `url()`.

### `src/assets/images/` — Imported assets
Vite processes these at build time (adds content hash for caching):
```jsx
import logo from '../assets/images/logo.svg'

<img src={logo} alt="Signal Shift logo" />
```
Best for: logo, icons, images used directly in components.

## Optimisation Tips
- Prefer `.webp` or `.avif` over `.jpg`/`.png` for photos
- Use `.svg` for logos and icons
- Add `width` and `height` attributes to avoid layout shift
- Use `loading="lazy"` for below-the-fold images:
  ```jsx
  <img src="/images/feature.webp" alt="Feature" loading="lazy" width={800} height={450} />
  ```

## Background Images via Tailwind
Add to `tailwind.config.js`:
```js
extend: {
  backgroundImage: {
    'hero': "url('/images/hero.jpg')",
  },
}
```
Then use: `<div className="bg-hero bg-cover bg-center">`
