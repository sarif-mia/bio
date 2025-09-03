import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'

export default function Header3D() {
  const meshRef = useRef()
  
  useFrame(() => {
    meshRef.current.rotation.y += 0.01
  })

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <torusKnotGeometry args={[1, 0.4, 100, 16]} />
      <meshStandardMaterial color="hotpink" />
      <Text
        position={[0, 0, 2]}
        fontSize={0.5}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        Professional Portfolio
      </Text>
    </mesh>
  )
}

export function Header2D() {
  return (
    <nav className="header-nav">
      <a href="#about">About</a>
      <a href="#team">Team</a>
      <a href="#privacy">Privacy Policy</a>
    </nav>
  )
}