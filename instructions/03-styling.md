# Styling with Tailwind CSS

## Entry Point
Tailwind is loaded via `src/styles/index.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Extending the Theme
Add custom colors, fonts, or spacing in `tailwind.config.js`:
```js
theme: {
  extend: {
    colors: {
      brand: {
        DEFAULT: '#6366f1',
        dark: '#4f46e5',
      },
    },
    fontFamily: {
      sans: ['Inter', 'ui-sans-serif', 'system-ui'],
    },
  },
},
```

## Common Patterns

### Responsive layout
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
```

### Dark background + light text (Signal Shift default)
```jsx
<section className="bg-gray-950 text-white">
```

### Button
```jsx
<button className="px-5 py-2.5 bg-brand text-white rounded-xl font-medium hover:bg-brand-dark transition-colors">
  Click me
</button>
```

## Adding Custom Fonts (Google Fonts)
1. Add `<link>` in `index.html`
2. Reference the font name in `tailwind.config.js` under `fontFamily`
