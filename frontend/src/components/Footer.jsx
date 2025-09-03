import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text, Html } from '@react-three/drei'
import './Footer.css'

export default function Footer() {
  const meshRef = useRef()
  
  useFrame(() => {
    meshRef.current.rotation.y += 0.01
  })

  return (
    <footer className="footer">
      <Canvas>
        <mesh ref={meshRef}>
          <torusGeometry args={[1, 0.4, 16, 100]} />
          <meshStandardMaterial color="#6a11cb" />
          <Text
            position={[0, 0, 2]}
            fontSize={0.5}
            color="white"
            anchorX="center"
            anchorY="middle"
          >
            Thanks for visiting!
          </Text>
        </mesh>
        <Html position={[0, -2, 0]}>
          <div className="social-links">
            <a href="#" className="social-link">LinkedIn</a>
            <a href="#" className="social-link">GitHub</a>
            <a href="#" className="social-link">Twitter</a>
          </div>
        </Html>
      </Canvas>
      <div className="copyright">
        © {new Date().getFullYear()} All rights reserved
      </div>
    </footer>
  )
}