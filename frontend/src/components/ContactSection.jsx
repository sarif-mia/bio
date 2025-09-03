import { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { Text } from '@react-three/drei'

const ContactForm = () => {
  const formRef = useRef()
  
  return (
    <group position={[0, 0, 0]}>
      <Text
        position={[0, 1, 0]}
        fontSize={0.3}
        color="white"
        anchorX="center"
      >
        Get In Touch
      </Text>
      <Html>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </Html>
    </group>
  )
}

export default function ContactSection() {
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <ContactForm />
      </Canvas>
    </section>
  )
}