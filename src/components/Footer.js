import React, { useState, useEffect } from 'react'
import styles from './Footer.module.css'
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaInstagram, 
  FaDribbble, 
  FaBehance,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaArrowUp
} from 'react-icons/fa'

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const footerSection = document.querySelector('footer')
    if (footerSection) {
      observer.observe(footerSection)
    }

    // Scroll to top functionality
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Services', href: '#services' },
      { name: 'Portfolio', href: '#portfolio' },
      { name: 'Blog', href: '#blog' }
    ],
    services: [
      { name: 'Web Development', href: '#services' },
      { name: '3D Animation', href: '#services' },
      { name: 'UI/UX Design', href: '#services' },
      { name: 'Digital Marketing', href: '#services' }
    ],
    support: [
      { name: 'Contact Us', href: '#contact' },
      { name: 'FAQ', href: '#faq' },
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' }
    ]
  }

  const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com', label: 'GitHub' },
    { icon: <FaLinkedin />, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <FaTwitter />, href: 'https://twitter.com', label: 'Twitter' },
    { icon: <FaInstagram />, href: 'https://instagram.com', label: 'Instagram' },
    { icon: <FaDribbble />, href: 'https://dribbble.com', label: 'Dribbble' },
    { icon: <FaBehance />, href: 'https://behance.net', label: 'Behance' }
  ]

  return (
    <footer className={styles.footer}>
      <div className={styles.backgroundOverlay}></div>
      
      <div className={styles.container}>
        {/* Main Footer Content */}
        <div className={`${styles.mainContent} ${isVisible ? styles.visible : ''}`}>
          {/* Brand Section */}
          <div className={styles.brandSection}>
            <h2 className={styles.brandTitle}>
              BlackWhite <span className={styles.highlight}>Studio</span>
            </h2>
            <p className={styles.brandTagline}>
              Where creativity meets technology to create extraordinary digital experiences
            </p>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <FaEnvelope />
                <span>hello@blackwhitestudio.com</span>
              </div>
              <div className={styles.contactItem}>
                <FaPhone />
                <span>+94 11 222 3333</span>
              </div>
              <div className={styles.contactItem}>
                <FaMapMarkerAlt />
                <span>123 Creative Street, Design City, DC 12345</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div className={styles.linksSection}>
            <div className={styles.linkGroup}>
              <h3>Company</h3>
              <ul>
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h3>Services</h3>
              <ul>
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h3>Support</h3>
              <ul>
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Social Media & Newsletter */}
        <div className={`${styles.bottomSection} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.socialSection}>
            <h3>Follow Our Journey</h3>
            <p>Stay connected with us on social media for the latest updates and insights</p>
            <div className={styles.socialLinks}>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className={styles.newsletterSection}>
            <h3>Stay Updated</h3>
            <p>Subscribe to our newsletter for the latest insights and project updates</p>
            <div className={styles.newsletterForm}>
              <input
                type="email"
                placeholder="Enter your email"
                className={styles.newsletterInput}
              />
              <button className={styles.newsletterButton}>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className={styles.copyrightSection}>
        <div className={styles.copyrightContent}>
          <p>&copy; {currentYear} BlackWhite Studio. All rights reserved.</p>
          <div className={styles.legalLinks}>
            <a href="#privacy">Privacy Policy</a>
            <span className={styles.separator}>•</span>
            <a href="#terms">Terms of Service</a>
            <span className={styles.separator}>•</span>
            <a href="#cookies">Cookie Policy</a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button 
          className={styles.scrollToTop}
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  )
}

export default Footer
