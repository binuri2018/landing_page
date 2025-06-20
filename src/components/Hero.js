import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import styles from './Hero.module.css'
import bgImage from '../Assets/hero-bg.png'

const Hero = () => {
  return (
    <div
      className={styles.heroContainer}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Canvas camera={{ position: [5, 5, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} intensity={1} />
        
        <OrbitControls enableZoom={false} />
      </Canvas>
      <div className={styles.heroText}>
        <h1></h1>
        <p></p>
      </div>
    </div>
  )
}

export default Hero
