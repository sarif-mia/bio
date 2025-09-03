import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { Text } from '@react-three/drei'

export function HeroSection3D() {
  const meshRef = useRef()
  
  useFrame(() => {
    meshRef.current.rotation.y += 0.01
  })

  return (
    <>
      <mesh ref={meshRef}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="hotpink" />
      </mesh>
      <Text
        position={[0, 0, -2]}
        fontSize={0.5}
        color="white"
      >
        Welcome
      </Text>
    </>
  )
}

export function HeroSection2D() {
  return (
    <div className="hero-content">
      <h1>Professional Web Developer</h1>
      <p>Creating immersive 3D web experiences</p>
    </div>
  )
}