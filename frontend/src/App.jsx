import { Canvas } from '@react-three/fiber';
import { useEffect, useState } from 'react';
import { OrbitControls, Stars } from '@react-three/drei'
import { Header3D, Header2D } from './components/Header'
import { HeroSection3D, HeroSection2D } from './components/HeroSection'
import AboutUs from './components/AboutUs'
import TeamSection from './components/TeamSection'
import PortfolioSection from './components/PortfolioSection'
import ServicesSection from './components/ServicesSection'
import FAQSection from './components/FAQSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import PrivacyPolicy from './components/PrivacyPolicy'

export default function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/hello')
      .then(res => res.json())
      .then(data => setMessage(data.message))
  }, []);   .catch(err => console.error('Error:', err));
  }, []);

  return (
    <div className="App">
      <p style={{position: 'absolute', top: '20px', left: '20px', zIndex: 100, color: 'white'}}>{message}</p>
      <Canvas>
        <Header3D />
        <HeroSection3D />
        <AboutUs />
        <TeamSection />
        <ServicesSection />
        <PrivacyPolicy />
        <Footer />
        <OrbitControls />
        <Stars />
      </Canvas>
      <Header2D />
      <HeroSection2D />
      <PortfolioSection />
      <FAQSection />
      <ContactSection />
    </div>
  )
}