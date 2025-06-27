import React, { useState, useEffect } from 'react'
import styles from './About.module.css'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      observer.observe(aboutSection)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.container}>
        {/* Header Section */}
        <div className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
          <h2 className={styles.title}>
            About <span className={styles.highlight}>BlackWhite Studio</span>
          </h2>
          <p className={styles.subtitle}>
            Where creativity meets technology to create extraordinary digital experiences
          </p>
        </div>

        {/* Main Content */}
        <div className={`${styles.content} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.textContent}>
            <p className={styles.description}>
              At <strong>BlackWhite Studio</strong>, we blend technology and imagination to craft powerful animated experiences that leave a lasting impact. 
              As a modern animation-producing IT company, our mission is to turn ideas into visual stories through cutting-edge design, 3D motion, and interactive visuals.
            </p>
            <p className={styles.description}>
              From conceptual design to immersive digital animations, we work closely with brands, startups, and creative teams to bring their visions to life. 
              Whether it's a product showcase, brand intro, or a full-fledged animated web experience, we make innovation look effortless.
            </p>
            <p className={styles.description}>
              With a passion for visual storytelling and deep expertise in animation technologies, 
              BlackWhite Studio transforms the complex into the captivating — one frame at a time.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className={`${styles.featuresGrid} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🎨</div>
            <h3>Creative Design</h3>
            <p>Innovative visual concepts that capture attention and tell compelling stories</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🎬</div>
            <h3>3D Animation</h3>
            <p>Cutting-edge 3D motion graphics that bring your ideas to life</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>💻</div>
            <h3>Interactive Tech</h3>
            <p>Modern web technologies creating immersive digital experiences</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🚀</div>
            <h3>Innovation First</h3>
            <p>Pioneering new approaches to digital storytelling and brand engagement</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`${styles.ctaSection} ${isVisible ? styles.visible : ''}`}>
          <h3>Ready to bring your vision to life?</h3>
          <p>Let's create something extraordinary together</p>
          <button className={styles.ctaButton}>
            Start Your Project With Us
          </button>
        </div>
      </div>
    </section>
  )
}

export default About
