import React from 'react'
import styles from './About.module.css'

const About = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>About Us</h2>
        <p className={styles.description}>
          At <span className={styles.highlight}>VisionaryTech</span>, we are passionate about pushing the boundaries of innovation. Our mission is to create immersive and interactive digital experiences using the latest in 3D and web technologies.  
        </p>
        <p className={styles.description}>
          Whether it's crafting product showcases, building real-time visualizations, or designing captivating user interfaces, we blend creativity with cutting-edge tools like React, Three.js, and Framer Motion to bring ideas to life.
        </p>
      </div>
    </section>
  )
}

export default About
