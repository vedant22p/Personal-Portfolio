import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import Hero from './components/sections/Hero';
import Education from './components/sections/Education';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Publications from './components/sections/Publications';
import Achievements from './components/sections/Achievements';
import Certifications from './components/sections/Certifications';
import Skills from './components/sections/Skills';
import Footer from './components/Footer';

function App() { 
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
      easing: 'ease-out',
    });

    // Create particles
    const createParticle = () => {
      const particles = document.querySelector('.particles');
      if (particles) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 8 + 4) + 's';
        particles.appendChild(particle);
        
        setTimeout(() => {
          particle.remove();
        }, 8000);
      }
    };

    // Create particles periodically
    const particleInterval = setInterval(createParticle, 2000);

    return () => clearInterval(particleInterval);
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-900">
      {/* Neural Network Background */}
      <div className="neural-bg"></div>
      
      {/* Floating Particles */}
      <div className="particles"></div>
      
      {/* Main Content */}
      <div className="relative z-10">
        <Header />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <Hero />
          <Education />
          <Experience />
          <Projects />
          <Publications />
          <Achievements />
          <Certifications />
          <Skills />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;