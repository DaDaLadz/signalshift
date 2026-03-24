# Building Components

## Location
All reusable UI pieces live in `src/components/`.

## Component Template
```jsx
// src/components/Card.jsx
function Card({ title, children }) {
  return (
    <div className="rounded-2xl bg-gray-900 p-6 shadow-md">
      {title && <h2 className="text-xl font-semibold mb-3">{title}</h2>}
      {children}
    </div>
  )
}

export default Card
```

## Usage
```jsx
import Card from '../components/Card'

<Card title="My Card">
  <p>Content goes here.</p>
</Card>
```

## Guidelines
- One component per file, named with PascalCase
- Accept props; avoid hard-coded copy inside reusable components
- Compose small components into larger ones rather than building monoliths
- Co-locate a component's styles within its JSX using Tailwind classes
