import React, { useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import styles from './Hero.module.css'
import bgImage from '../Assets/hero-bg.png'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div
      className={styles.heroContainer}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay for better text readability */}
      <div className={styles.overlay}></div>
      
      {/* Three.js Canvas */}
      <div className={styles.canvasContainer}>
        <Canvas camera={{ position: [5, 5, 5] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 2]} intensity={1} />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>

      {/* Hero Content */}
      <div className={`${styles.heroContent} ${isVisible ? styles.visible : ''}`}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>
            Transform Your Vision Into
            <span className={styles.highlight}> Reality</span>
          </h1>
          <p className={styles.heroSubtitle}>
            We create innovative digital solutions that drive growth and deliver exceptional user experiences. 
            From concept to deployment, we bring your ideas to life.
          </p>
          <div className={styles.ctaContainer}>
            <button className={styles.primaryBtn}>
              Get Started
            </button>
            <button className={styles.secondaryBtn}>
              Learn More
            </button>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className={styles.statsContainer}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>500+</span>
            <span className={styles.statLabel}>Projects Completed</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>98%</span>
            <span className={styles.statLabel}>Client Satisfaction</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>24/7</span>
            <span className={styles.statLabel}>Support Available</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollArrow}></div>
        <span>Scroll to explore</span>
      </div>
    </div>
  )
}

export default Hero
