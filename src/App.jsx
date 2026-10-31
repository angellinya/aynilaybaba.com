import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Psychology from './pages/Psychology'
import Books from './pages/Books'
import Speaking from './pages/Speaking'
import Contact from './pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/psychology" element={<Psychology />} />
          <Route path="/books" element={<Books />} />
          <Route path="/speaking" element={<Speaking />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Navigate to="/psychology" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
