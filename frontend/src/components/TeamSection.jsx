import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'

const TeamMember = ({ name, position, index }) => {
  const meshRef = useRef()
  
  useFrame(() => {
    meshRef.current.rotation.y += 0.005
  })

  return (
    <group position={[index * 3 - 3, 0, 0]}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial color="#3498db" />
        <Text
          position={[0, -1.2, 0]}
          fontSize={0.2}
          color="white"
          anchorX="center"
        >
          {name}
        </Text>
        <Text
          position={[0, -1.5, 0]}
          fontSize={0.15}
          color="#aaa"
          anchorX="center"
        >
          {position}
        </Text>
      </mesh>
    </group>
  )
}

export default function TeamSection() {
  const teamMembers = [
    { name: 'John Doe', position: 'Lead Developer' },
    { name: 'Jane Smith', position: 'UI/UX Designer' },
    { name: 'Mike Johnson', position: '3D Artist' }
  ]

  return (
    <section className="team" id="team">
      <h2>Our Team</h2>
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        {teamMembers.map((member, i) => (
          <TeamMember 
            key={i} 
            name={member.name} 
            position={member.position} 
            index={i} 
          />
        ))}
      </Canvas>
    </section>
  )
}