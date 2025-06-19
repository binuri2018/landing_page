import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import styles from './Hero.module.css'
import bgImage from '../Assets/hero-bg.png' // Import the image

const RotatingBox = () => (
  <mesh rotation={[0.5, 0.5, 0]}>
    <boxGeometry args={[2, 2, 2]} />
    <meshStandardMaterial color="#4ade80" />
  </mesh>
)

const Hero = () => {
  return (
    <div
      className={styles.heroContainer}
      style={{ backgroundImage: `url(${bgImage})` }} // Use imported image here
    >
      <Canvas camera={{ position: [5, 5, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} intensity={1} />
        <RotatingBox />
        <OrbitControls enableZoom={false} />
      </Canvas>
      <div className={styles.heroText}>
        <h1>BlackWhite Studio</h1>
        <p>Bringing Ideas to Life in Motion.</p>
      </div>
    </div>
  )
}

export default Hero
