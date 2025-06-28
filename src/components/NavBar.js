import React, { useState, useEffect } from 'react'
import styles from './NavBar.module.css'
import logo from '../Assets/logo.png'
import { FaBars, FaTimes, FaEnvelope } from 'react-icons/fa'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'services', 'blog', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      setActiveSection(current || 'home')
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    closeMobileMenu()
  }

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' }
  ]

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        {/* Logo */}
        <div className={styles.logoSection}>
          <div className={styles.logo} onClick={() => scrollToSection('home')}>
            <img src={logo} alt="BlackWhite Studio" className={styles.logoImage} />
            <span className={styles.logoText}>
              BlackWhite <span className={styles.logoHighlight}>Studio</span>
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <ul className={styles.navLinks}>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={activeSection === item.id ? styles.active : ''}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.id)
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className={styles.ctaSection}>
          <a
            href="#contact"
            className={styles.ctaButton}
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('contact')
            }}
          >
            <FaEnvelope />
            Get Started
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={styles.mobileMenuButton}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
        <div className={styles.mobileMenuContent}>
          <ul className={styles.mobileNavLinks}>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={activeSection === item.id ? styles.active : ''}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.id)
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          
          <div className={styles.mobileCta}>
            <a
              href="#contact"
              className={styles.mobileCtaButton}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('contact')
              }}
            >
              <FaEnvelope />
              Get Started
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className={styles.mobileMenuOverlay} onClick={closeMobileMenu}></div>
      )}
    </nav>
  )
}

export default Navbar
