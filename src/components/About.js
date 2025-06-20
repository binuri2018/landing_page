import React from 'react'
import styles from './About.module.css'

const About = () => {
  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.content}>
        <h2>About BlackWhite Studio</h2>
        <p>
          At <strong>BlackWhite Studio</strong>, we blend technology and imagination to craft powerful animated experiences that leave a lasting impact. 
          As a modern animation-producing IT company, our mission is to turn ideas into visual stories through cutting-edge design, 3D motion, and interactive visuals.
        </p>
        <p>
          From conceptual design to immersive digital animations, we work closely with brands, startups, and creative teams to bring their visions to life. 
          Whether it’s a product showcase, brand intro, or a full-fledged animated web experience, we make innovation look effortless.
        </p>
        <p>
          With a passion for visual storytelling and deep expertise in animation technologies, 
          BlackWhite Studio transforms the complex into the captivating — one frame at a time.
        </p>
      </div>
    </section>
  )
}

export default About
