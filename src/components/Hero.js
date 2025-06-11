import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

const RotatingBox = () => {
  return (
    <mesh rotation={[0.5, 0.5, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#4ade80" />
    </mesh>
  )
}

const Hero = () => {
  return (
    <div style={{ height: '100vh', background: '#111' }}>
      <Canvas camera={{ position: [5, 5, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} intensity={1} />
        <RotatingBox />
        <OrbitControls enableZoom={false} />
      </Canvas>
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '10%',
        color: '#fff',
        fontSize: '2rem'
      }}>
        <h1>Your Company Name</h1>
        <p>Innovating the Future</p>
      </div>
    </div>
  )
}

export default Hero
