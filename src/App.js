import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/NavBar'
import About from './components/About'
import Contact from './components/Contact'
import Services from './components/Services'
import Footer from './components/Footer'
import Blog from './components/Blogs'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Blog />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
