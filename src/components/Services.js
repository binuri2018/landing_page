import React from 'react'
import styles from './Services.module.css'
import { FaCode, FaCubes, FaRocket } from 'react-icons/fa'

const Services = () => {
  return (
    <section id="services" className={styles.servicesSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Our Services</h2>
        <p className={styles.subtitle}>
          We bring ideas to life with cutting-edge technology and creative design.
        </p>

        <div className={styles.cards}>
          <div className={styles.card}>
            <FaCode className={styles.icon} />
            <h3>Web Development</h3>
            <p>
              Responsive and dynamic websites using modern frameworks like React, Next.js, and more.
            </p>
          </div>

          <div className={styles.card}>
            <FaCubes className={styles.icon} />
            <h3>3D Experiences</h3>
            <p>
              Immersive product showcases and interactive scenes using Three.js and react-three-fiber.
            </p>
          </div>

          <div className={styles.card}>
            <FaRocket className={styles.icon} />
            <h3>UI/UX Design</h3>
            <p>
              Beautiful, user-centered designs with smooth animations and responsive layouts.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
