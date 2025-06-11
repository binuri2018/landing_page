import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import styles from './Hero.module.css' // import CSS module

const RotatingBox = () => (
  <mesh rotation={[0.5, 0.5, 0]}>
    <boxGeometry args={[2, 2, 2]} />
    <meshStandardMaterial color="#4ade80" />
  </mesh>
)

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <Canvas camera={{ position: [5, 5, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} intensity={1} />
        <RotatingBox />
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
