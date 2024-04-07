
import './App.css'
import Navbar from './componentes/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Blogs from './pages/Blogs'
import Contact from './pages/Contact'
import Footer from './componentes/Footer'

function App() {

  return (
    <>
      <BrowserRouter >
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </>
  )
}

export default App
