import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Text } from '@react-three/drei'

const FAQItem = ({ question, answer, position }) => {
  const [expanded, setExpanded] = useState(false)
  
  return (
    <group position={position} onClick={() => setExpanded(!expanded)}>
      <Text
        position={[0, 0.5, 0]}
        fontSize={0.2}
        color="white"
        anchorX="center"
      >
        {question}
      </Text>
      {expanded && (
        <Text
          position={[0, 0, 0]}
          fontSize={0.15}
          color="#aaa"
          anchorX="center"
        >
          {answer}
        </Text>
      )}
    </group>
  )
}

export default function FAQSection() {
  const faqs = [
    { 
      question: 'What technologies do you use?', 
      answer: 'React, Three.js, and modern web tools' 
    },
    { 
      question: 'How long do projects take?', 
      answer: 'Depends on complexity, typically 2-8 weeks' 
    },
    { 
      question: 'Do you provide maintenance?', 
      answer: 'Yes, ongoing support packages available' 
    }
  ]

  return (
    <section className="faq">
      <h2>Frequently Asked Questions</h2>
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        {faqs.map((faq, i) => (
          <FAQItem 
            key={i} 
            question={faq.question} 
            answer={faq.answer} 
            position={[0, -i * 0.8, 0]} 
          />
        ))}
      </Canvas>
    </section>
  )
}