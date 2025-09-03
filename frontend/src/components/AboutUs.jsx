import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'

export default function AboutUs() {
  const meshRef = useRef()
  
  useFrame(() => {
    meshRef.current.rotation.x += 0.01
    meshRef.current.rotation.y += 0.01
  })

  return (
    <section className="about" id="about">
      <h2>About Us</h2>
      <Canvas>
        <mesh ref={meshRef}>
          <dodecahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color="hotpink" />
          <Text
            position={[0, 0, 1.5]}
            fontSize={0.3}
            color="white"
            anchorX="center"
            anchorY="middle"
          >
            Our Story
          </Text>
        </mesh>
        <Html>
          <div className="about-content">
            <p>We are a creative team passionate about 3D web experiences.</p>
          </div>
        </Html>
      </Canvas>
    </section>
  )
}