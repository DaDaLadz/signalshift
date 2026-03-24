# Adding Pages

## Setup: Install React Router
```bash
npm install react-router-dom
```

## Create a Page Component
Add a file to `src/pages/`, e.g. `src/pages/Home.jsx`:
```jsx
function Home() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold">Home</h1>
    </main>
  )
}

export default Home
```

## Wire Up Routing in App.jsx
```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
```

## Naming Convention
- One file per page: `PageName.jsx`
- Export a default function named after the page
- Keep data fetching in the page; pass data down to components
