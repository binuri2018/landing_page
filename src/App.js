import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/NavBar'
import About from './components/About'
import Contact from './components/Contact'
import Services from './components/Services'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
    </div>
  )
}

export default App
