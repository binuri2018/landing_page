import React from 'react'
import styles from './Services.module.css'
import { FaFilm, FaCube, FaMagic } from 'react-icons/fa'

const Services = () => {
  return (
    <section id="services" className={styles.servicesSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Our Services</h2>
        <p className={styles.subtitle}>
          At BlackWhite Studio, we merge code with creativity to deliver stunning visual stories and animated tech experiences.
        </p>

        <div className={styles.cards}>
          <div className={styles.card}>
            <FaFilm className={styles.icon} />
            <h3>Animated Visuals</h3>
            <p>
              We craft cinematic animations and brand intros that captivate audiences, using tools like After Effects, Lottie, and WebGL.
            </p>
          </div>

          <div className={styles.card}>
            <FaCube className={styles.icon} />
            <h3>Interactive 3D Experiences</h3>
            <p>
              Build immersive web environments with Three.js & react-three-fiber — perfect for product demos and storytelling.
            </p>
          </div>

          <div className={styles.card}>
            <FaMagic className={styles.icon} />
            <h3>Creative Web Development</h3>
            <p>
              Bespoke websites with animation-first design, combining React, Framer Motion, and next-gen performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
