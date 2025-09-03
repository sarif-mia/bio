import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'

export default function PrivacyPolicy() {
  const meshRef = useRef()
  
  useFrame(() => {
    meshRef.current.rotation.y += 0.005
  })

  return (
    <section className="privacy" id="privacy">
      <h2>Privacy Policy</h2>
      <Canvas>
        <mesh ref={meshRef}>
          <torusGeometry args={[2, 0.2, 16, 100]} />
          <meshStandardMaterial color="#3498db" />
          <Text
            position={[0, 0, 0]}
            fontSize={0.2}
            color="white"
            anchorX="center"
            anchorY="middle"
          >
            Your Data is Safe
          </Text>
        </mesh>
        <Html>
          <div className="privacy-content">
            <p>We respect your privacy and protect your personal information.</p>
          </div>
        </Html>
      </Canvas>
    </section>
  )
}