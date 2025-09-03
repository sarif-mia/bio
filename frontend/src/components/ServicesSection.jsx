import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'

const ServiceCard = ({ service, position }) => {
  const meshRef = useRef()
  
  useFrame(() => {
    meshRef.current.rotation.y += 0.005
  })

  return (
    <mesh position={position} ref={meshRef}>
      <planeGeometry args={[2, 1]} />
      <meshStandardMaterial color="#3498db" />
      <Text
        position={[0, 0, 0.1]}
        fontSize={0.2}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {service.title}
      </Text>
    </mesh>
  )
}

export default function ServicesSection() {
  const services = [
    { title: 'Web Development' },
    { title: '3D Animation' },
    { title: 'UI/UX Design' },
    { title: 'Consulting' }
  ]

  return (
    <section className="services">
      <h2>My Services</h2>
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        {services.map((service, i) => (
          <ServiceCard 
            key={i} 
            service={service} 
            position={[i * 2.5 - 3.75, 0, 0]} 
          />
        ))}
      </Canvas>
    </section>
  )
}