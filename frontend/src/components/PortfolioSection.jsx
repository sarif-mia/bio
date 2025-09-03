import { useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Html } from '@react-three/drei'

const ProjectCube = ({ project, position }) => {
  const [hovered, setHover] = useState(false)
  const meshRef = useRef()
  
  useFrame(() => {
    meshRef.current.rotation.x += 0.01
    meshRef.current.rotation.y += 0.01
  })

  return (
    <mesh 
      position={position}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      ref={meshRef}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
      <Html distanceFactor={10}>
        <div className="project-info">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      </Html>
    </mesh>
  )
}

export default function PortfolioSection() {
  const projects = [
    { title: 'E-commerce Site', description: '3D product showcase' },
    { title: 'Web App', description: 'Interactive dashboard' },
    { title: 'Portfolio', description: 'Creative showcase' }
  ]

  return (
    <section className="portfolio">
      <h2>My Portfolio</h2>
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        {projects.map((project, i) => (
          <ProjectCube 
            key={i} 
            project={project} 
            position={[i * 2 - 2, 0, 0]} 
          />
        ))}
        <OrbitControls enableZoom={false} />
      </Canvas>
    </section>
  )
}