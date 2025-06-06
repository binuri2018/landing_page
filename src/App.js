import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/NavBar'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Contact />
    </div>
  )
}

export default App
